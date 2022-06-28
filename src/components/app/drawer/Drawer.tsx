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
    liveStreamingEnable: true
  },
  {
    fullName: "Deniz Bozdağ",
    liveStreamingEnable: false,
  },
  {
    fullName: "Ceren Aksal",
    viewers: 852,
    liveStreamingEnable: true
  },
  {
    fullName: "Murat kiraz",
    liveStreamingEnable: false,
  },
  {
    fullName: "Deniz Bozdağ",
    viewers: 1241112,
    liveStreamingEnable: true
  },
  {
    fullName: "Ceren Aksal",
    viewers: 852,
    liveStreamingEnable: true
  },
  {
    fullName: "Murat kiraz",
    viewers: 15000,
    liveStreamingEnable: true,
  },
  {
    fullName: "Deniz Bozdağ",
    liveStreamingEnable: false,
  },
  {
    fullName: "Ceren Aksal",
    liveStreamingEnable: false,
  },
  {
    fullName: "Murat kiraz",
    viewers: 15000,
    liveStreamingEnable: true
  },
  {
    fullName: "Deniz Bozdağ",
    liveStreamingEnable: false,
  },
  {
    fullName: "Ceren Aksal",
    liveStreamingEnable: false,
  },
  {
    fullName: "Murat kiraz",
    viewers: 15000,
    liveStreamingEnable: true
  },
  {
    fullName: "Deniz Bozdağ",
    liveStreamingEnable: false,
  },
  {
    fullName: "Ceren Aksal",
    viewers: 852,
    liveStreamingEnable: true
  },
  {
    fullName: "Murat kiraz",
    liveStreamingEnable: false,
  },
  {
    fullName: "Deniz Bozdağ",
    liveStreamingEnable: false,
  },
  {
    fullName: "Ceren Aksal",
    viewers: 852,
    liveStreamingEnable: true
  },
  {
    fullName: "Murat kiraz",
    liveStreamingEnable: false,
  },
  {
    fullName: "Deniz Bozdağ",
    viewers: 2351,
    liveStreamingEnable: true
  },
  {
    fullName: "Ceren Aksal",
    liveStreamingEnable: false,
  },
]
function SubscriberList(data: any[]) {
  let activeList = [];
  let passiveList = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].liveStreamingEnable) {
      activeList[activeList.length] = data[i]
    } else {
      passiveList[passiveList.length] = data[i]
    }
  }

  activeList.sort(function (a, b) {
    return b.viewers - a.viewers;
  })
  return activeList.concat(passiveList);
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
              <ListItemText primary="Ana Sayfa" />
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
          {SubscriberList(data).map((e) => (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MyAvatarComponent fullName={e.fullName} />
                </ListItemIcon>
                <ListItemText primary={e.fullName} />
                <div className=''>
                  <div className={e.liveStreamingEnable ? "circle-green" : "circle-red"}></div>
                  <p style={{ float: 'right', marginLeft: '5px' }}>{e.viewers != null && e.viewers != undefined ? numberRounder(e.viewers) : ""}</p>
                </div>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Footer />
      </Box>
    </div>

  )
}

export default Drawer