import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper/Paper';
import styled from '@mui/material/styles/styled';
import React from 'react'
import Drawer from '../../../components/app/drawer/Drawer';
import Main from '../../../components/app/main/Main';
import Navi from '../../../components/app/navi/Navi';
import "./Home.css";

export default function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
   
  }));
  return (
    <div className='app'>
      <Navi />
 <Box sx={{ flexGrow: 1 }}>
      <Grid  container columns={16}>
        <Grid item xs={3}>
          <Item><Drawer /></Item>
        </Grid>
        <Grid item xs={13}>
          <Item><Main/></Item>
        </Grid>
      </Grid>
    </Box>
 
    </div>

  )
}
