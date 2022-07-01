import Fullscreen from '@mui/icons-material/Fullscreen';
import PlayArrow from "@mui/icons-material/PlayArrow";
import Pause from "@mui/icons-material/Pause";
import Fade from '@mui/material/Fade/Fade';
import Menu from '@mui/material/Menu/Menu';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import React, { useRef, useState } from 'react';
import './Video.css';





function Video() {
    const videoPlayer = useRef<HTMLVideoElement>(null);
    const [playPauseVideo, setPlayPauseVideo] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [value, setValue] = React.useState<number>(30);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    };
    function playPause(event: React.MouseEvent<HTMLDivElement>) {

        if (playPauseVideo) {
            videoPlayer.current && videoPlayer.current.pause();

            setPlayPauseVideo(false)
        } else {
            videoPlayer.current && videoPlayer.current.play();
            setPlayPauseVideo(true)
        }
    }

    const fullScreen = (event: any) => {
        videoPlayer.current && videoPlayer.current.requestFullscreen();
    }

    return (
        <div>
            <div id="video" className='video-container'>
                <video ref={videoPlayer} className='video-class' controlsList="nodownload noplaybackrate" controls={false}>
                    <source src='http://media.w3.org/2010/05/sintel/trailer.mp4' type='video/mp4' />
                    Your browser does not support the video tag.
                </video>


                <div className='video-buttons'>
                    <div className='play-pause-button' onClick={playPause}>{playPauseVideo ? <Pause fontSize='large' /> : <PlayArrow fontSize='large' />} </div>
                    <div className='video-fullscreen-button' onClick={fullScreen}><Fullscreen fontSize='large' /></div>
                    <div className='video-volume'>



                    </div>

                    <div className='video-quality-button'
                        onClick={handleClick}
                    >
                        Kalite 240p
                    </div>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}>420p</MenuItem>
                        <MenuItem onClick={handleClose}>720p</MenuItem>
                        <MenuItem onClick={handleClose}>1080p</MenuItem>
                    </Menu>

                </div>
            </div>

        </div>
    )
}

export default Video