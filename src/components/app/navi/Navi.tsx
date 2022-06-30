import React from 'react'
import "./Navi.css";
import { Navbar } from 'react-bootstrap';
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