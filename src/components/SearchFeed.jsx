import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import { Box, Typography } from '@mui/material';

import { Videos } from './';
import { fetchApi } from '../utils/fetchApi';

const SearchFeed = () => {

    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const { searchTerm } = useParams()

    useEffect(() => {
        setIsLoading(true)
        fetchApi(`search?part=snippet&q=${searchTerm}`)
            .then((data) => {
                setVideos(data.items)
                setIsLoading(false)
            })

    }, [searchTerm])


    return (

        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
            <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: '#fff' }}>
                Search results for: <span style={{ color: '#F31503' }}>{searchTerm}</span> videos
            </Typography>

            {isLoading ? (
                <div class="lds-facebook" style={{ position: 'fixed', top: '35%', left: '44%' }}><div></div><div></div><div></div></div>
            ) : (
                <>

                    <Videos videos={videos} />
                </>
            )}
        </Box>
    )
}

export default SearchFeed;