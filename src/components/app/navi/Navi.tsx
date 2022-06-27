import React, { useState } from 'react'
import "./Navi.css";
import { Navbar } from 'react-bootstrap';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from '../search-bar/SearchBar';
import Brand from '../brand/Brand';
import ItemMenu from '../item-menu/ItemMenu';



function Navi() {
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);


  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let firsName: string = "Nagehan";
  let lastName: string = "Uzun";
  let firstNameAndLastName: string = firsName + " " + lastName;
  let logo: string = "https://icon-library.com/images/icon-png-logos/icon-png-logos-7.jpg";
  let photoUrl: string = "https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc";
  let brandName: string = "Canlı Yayın Platformu";



  return (
    <Navbar className='navi'>
      <div className='container1'>
        <div className='brand-div'>
       <Brand/>
        <ItemMenu/>
        </div>
      </div>
    </Navbar>

  );
}

export default Navi;