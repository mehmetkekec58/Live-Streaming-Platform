import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper/Paper';
import styled from '@mui/material/styles/styled';
import React, { useState } from 'react'
import Drawer from '../../../components/app/drawer/Drawer';
import Main from '../../../components/app/main/Main';
import Navi from '../../../components/app/navi/Navi';
import "./Home.css";


export default function Home() {
  return (
    <div className='app'>
      <Main />
    </div>

  )
}
