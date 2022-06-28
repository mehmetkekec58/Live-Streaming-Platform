import { Button } from '@mui/material';
import React from 'react'
import "./Brand.css";
import HomeIcon from '@mui/icons-material/Menu';

let logo: string = "https://icon-library.com/images/icon-png-logos/icon-png-logos-7.jpg";
let brandName: string = "Canlı Yayın Platformu";

function Brand() {
  return (
    <div className="brand">
      <Button className='button'><HomeIcon style={{ color: 'grey' }} /></Button>
      <img
        alt="Canlı Yayın Platformu"
        src={logo}
        width="40"
        height="40"
        className="d-inline-block brand-img"
      />{'   '}
      <text className='brand-name'>{brandName}</text>
    </div>
  )
}

export default Brand