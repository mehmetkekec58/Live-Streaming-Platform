import React from 'react'
import "./Brand.css";

let logo: string = "https://icon-library.com/images/icon-png-logos/icon-png-logos-7.jpg";
let brandName: string = "Canlı Yayın Platformu";

function Brand() {
  return (
    <div style={{ float: 'left' }}>
    <img
      alt=""
      src={logo}
      width="40"
      height="40"
      className="d-inline-block"
    />{'   '}
    <text className='brand-name'>{brandName}</text>
  </div>
  )
}

export default Brand