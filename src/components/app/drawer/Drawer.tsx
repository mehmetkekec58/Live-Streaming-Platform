import React from 'react';
import Box from '@mui/material/Box/Box';
import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemButton from '@mui/material/ListItemButton/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import "./Drawer.css";
import Footer from '../footer/Footer';
import MyAvatarComponent from '../../../utilities/avatar-component/MyAvatarComponent';
import { numberRounder } from '../../../helper/numberRounder';
import { Divider, ImageListItem, ListSubheader } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TrendingIcon from '@mui/icons-material/TrendingUp';

const data = [
  {
    fullName: "Murat kiraz",
    viewers: 15000,
  },
  {
    fullName: "Deniz Bozdağ",
    viewers: 2351,
  },
  {
    fullName: "Ceren Aksal",
    viewers: 852,
  },
  {
    fullName: "Murat kiraz",
    viewers: 1500000,
  },
  {
    fullName: "Deniz Bozdağ",
    viewers: 1241112,
  },
  {
    fullName: "Ceren Aksal",
    viewers: 852,
  },
  {
    fullName: "Murat kiraz",
    viewers: 15000,
  },
  {
    fullName: "Deniz Bozdağ",
    viewers: 2351,
  },
  {
    fullName: "Ceren Aksal",
    viewers: 852,
  },
  {
    fullName: "Murat kiraz",
    viewers: 15000,
  },
  {
    fullName: "Deniz Bozdağ",
    viewers: 2351,
  },
  {
    fullName: "Ceren Aksal",
    viewers: 852,
  },
  {
    fullName: "Murat kiraz",
    viewers: 15000,
  },
  {
    fullName: "Deniz Bozdağ",
    viewers: 2351,
  },
  {
    fullName: "Ceren Aksal",
    viewers: 852,
  },
  {
    fullName: "Murat kiraz",
    viewers: 15000,
  },
  {
    fullName: "Deniz Bozdağ",
    viewers: 2351,
  },
  {
    fullName: "Ceren Aksal",
    viewers: 852,
  },
  {
    fullName: "Murat kiraz",
    viewers: 15000,
  },
  {
    fullName: "Deniz Bozdağ",
    viewers: 2351,
  },
  {
    fullName: "Ceren Aksal",
    viewers: 852,
  },
]
function screenHeight():number {
  return screen.height;
  
}

function Drawer() {
  return (
    <div className='drawer-div'>
      <Box sx={{ bgcolor: 'white' }}>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText  primary="Ana Sayfa" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TrendingIcon />
              </ListItemIcon>
              <ListItemText primary="Trendler" />
            </ListItemButton>
          </ListItem>
        </List>
          <List>
            <Divider />
            <span style={{ float: 'left', marginTop: '5px', marginLeft: '15px', fontSize: '20px', fontWeight: 'bold', fontFamily: 'Ubuntu' }}>Abonelikler</span>
            {data.map((e) => (
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <MyAvatarComponent fullName={e.fullName} />
                  </ListItemIcon>
                  <ListItemText primary={e.fullName} />
                  <div className=''>
                    <div className='circle-green'></div>
                    <p style={{float:'right', marginLeft:'5px'}}>{numberRounder(e.viewers)}</p>
                  </div>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider/>
    <Footer/>
      </Box>
    </div>

  )
}

export default Drawer