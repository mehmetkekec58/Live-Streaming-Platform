import React,{useState} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/app/home/Home';
import Navi from './components/app/navi/Navi';
import Search from './pages/app/search/Search';
import Grid from '@mui/material/Grid/Grid';
import styled from '@mui/material/styles/styled';
import Paper from '@mui/material/Paper/Paper';
import Drawer from './components/app/drawer/Drawer';
import Stream from './pages/app/stream/Stream';

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',

}));

function App() {

  const [drawerClose, setDrawerClose] = useState<boolean>(false)

  return (
    <div>
    <Navi/>


    <Grid container columns={16}>
      <Grid item xs={3}>
        <Item ><Drawer /></Item>
      </Grid>
      <Grid item xs={13}>
        <Item>
          <Routes>
      <Route path='' element={<Home />} /> 
      <Route path='search' element={<Search/>} />
      <Route path='stream' element={<Stream/>} />
    </Routes>
    </Item>
      </Grid>
    </Grid>

   
    </div>
  );
}

export default App;
