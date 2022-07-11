import { Divider } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';
import'./VideoDescription.css';

function VideoDescription() {
  return (
    <div>
      <span className="video-description-video-title">Valorant Canlı Yayını</span>
      <Divider/>
      <span>İzleyici: 14 B</span>
      <Button variant='warning' className='video-description-follow-button'>Takip Et</Button>
      <span>Merhaba ben Nagehan Uzun hergün canlı yayın açıyorum. Burada FPS oyunları oyunlarının neredeyse çoğunu oynuyorum.</span>
      </div>
  )
}

export default VideoDescription