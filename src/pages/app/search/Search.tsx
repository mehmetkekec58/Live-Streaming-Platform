import Grid from '@mui/material/Grid/Grid';
import Paper from '@mui/material/Paper/Paper';
import styled from '@mui/material/styles/styled';
import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Drawer from '../../../components/app/drawer/Drawer';
import SearchList from '../../../components/app/search-list/SearchList';
import './Search.css';


function Search() {
 const [searchParams, getSearchParams] = useSearchParams();
 

  const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',

  }));

  return (
    <div className='search-page'>
      {/* hey {searchParams.get("q")} */}
      <Grid container columns={16}>
      <Grid item xs={3}>
        <Item ><Drawer /></Item>
      </Grid>
      <Grid item xs={13}>
        <Item><SearchList/></Item>
      </Grid>
    </Grid>
      
    
    </div>
  )

}

export default Search