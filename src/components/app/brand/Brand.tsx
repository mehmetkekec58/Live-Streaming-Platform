import { Button } from '@mui/material';
import React from 'react'
import "./Brand.css";
import HomeIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

let logo: string = "https://icon-library.com/images/icon-png-logos/icon-png-logos-7.jpg";
let brandName: string = "Canlı Yayın Platformu";

function Brand() {
  return (
    <div className="brand">
    
      <Button className='button'><HomeIcon style={{ color: 'grey' }} /></Button>
      <Link to="/" style={{textDecoration:'none'}}>
      <img
        alt="Canlı Yayın Platformu"
        src={logo}
        width="30"
        height="30"
        className="d-inline-block brand-img"
      />
      <span className='brand-name'>{brandName}</span>
      </Link>
    </div>
  )
}

export default Brand