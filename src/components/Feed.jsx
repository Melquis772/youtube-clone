import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { Sidebar, Videos } from './';
import { fetchApi } from '../utils/fetchApi';

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        setIsLoading(true)

        fetchApi(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => {

                setVideos(data.items)

                setIsLoading(false)
            })


    }, [selectedCategory])


    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

                <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
                    &copy; Copyright 2022 Melquisedec
                </Typography>
            </Box>

            {isLoading ? (
                <>
                    <div class="lds-facebook"><div></div><div></div><div></div></div>
                </>

            ) : (
                <>
                    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>

                        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: '#fff' }}>
                            {selectedCategory}  <span style={{ color: '#F31503' }}>videos</span>
                        </Typography>

                        <Videos videos={videos} />
                    </Box>
                </>
            )}
        </Stack>
    )
}

export default Feed;