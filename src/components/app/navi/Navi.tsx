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

  return (
    <Navbar className='navi'>
      <div className='navi-div'>
        <Brand />
        <SearchBar />
        <ItemMenu />
      </div>
    </Navbar>

  );
}

export default Navi;