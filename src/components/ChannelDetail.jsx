import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchApi } from '../utils/fetchApi';

const ChannelDetail = () => {

    const [channelDetail, setchannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const { id } = useParams();

    useEffect(() => {
        setIsLoading(true)
        fetchApi(`channels?part=snippet&id=${id}`)
            .then((data) => {
                setchannelDetail(data?.items[0])
                setIsLoading(false)
            })

        fetchApi(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => {
                setVideos(data?.items)
            })

    }, [id])

    return (
        <Box minHeight="95vh">
            {isLoading ? (
                <div class="lds-facebook" style={{ position: 'fixed', top: '35%', left: '44%' }}><div></div><div></div><div></div></div>
            ) : (
                <>
                    <Box>
                        <div style={{ background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)', zIndex: 10, height: '300px' }} />
                        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
                    </Box>

                    <Box display='flex' p='2'>
                        <Box sx={{ mr: { sm: '100px' } }} />
                        <Videos videos={videos} />
                    </Box>
                </>
            )}

        </Box>
    )
}

export default ChannelDetail