import Grid from '@mui/material/Grid/Grid';
import Paper from '@mui/material/Paper/Paper';
import styled from '@mui/material/styles/styled';
import React from 'react';
import Chat from '../../../components/app/chat/Chat';
import VideoDescription from '../../../components/app/video-description/VideoDescription';
import Video from '../../../components/app/video/Video';
import './Stream.css';

const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',

}));

function Stream() {
    return (
        <div className='general-stream-div'>
            <div className='general-stream-div'>
                <Grid container columns={16}>
                    <Grid item xs={11}>
                        <Item >
                            <Video />
                            <VideoDescription />
                        </Item>
                    </Grid>
                    <Grid item xs={5}>
                        <Item>
                            <Chat />
                        </Item>
                    </Grid>
                </Grid>


            </div>

        </div>
    )
}

export default Stream