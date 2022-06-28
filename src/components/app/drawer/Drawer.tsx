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
    id:1,
    fullName: "Murat kiraz",
    viewers: 15000,
    liveStreamingEnable: true
  },
  {
    id:2,
    fullName: "Deniz Bozdağ",
    liveStreamingEnable: false,
  },
  {
    id:3,
    fullName: "Ceren Aksal",
    viewers: 852,
    liveStreamingEnable: true
  },
  {
    id:4,
    fullName: "Murat kiraz",
    liveStreamingEnable: false,
  },
  {
    id:5,
    fullName: "Deniz Bozdağ",
    viewers: 1241112,
    liveStreamingEnable: true
  },
  {
    id:6,
    fullName: "Ceren Aksal",
    viewers: 852,
    liveStreamingEnable: true
  },
  {
    id:7,
    fullName: "Murat kiraz",
    viewers: 15000,
    liveStreamingEnable: true,
  },
  {
    id:8,
    fullName: "Deniz Bozdağ",
    liveStreamingEnable: false,
  },
  {
    id:9,
    fullName: "Ceren Aksal",
    liveStreamingEnable: false,
  },
  {
    id:10,
    fullName: "Murat kiraz",
    viewers: 15000,
    liveStreamingEnable: true
  },
  {
    id:11,
    fullName: "Deniz Bozdağ",
    liveStreamingEnable: false,
  },
  {
    id:12,
    fullName: "Ceren Aksal",
    liveStreamingEnable: false,
  },
  {
    id:13,
    fullName: "Murat kiraz",
    viewers: 15000,
    liveStreamingEnable: true
  },
  {
    id:14,
    fullName: "Deniz Bozdağ",
    liveStreamingEnable: false,
  },
  {
    id:15,
    fullName: "Ceren Aksal",
    viewers: 852,
    liveStreamingEnable: true
  },
  {
    id:16,
    fullName: "Murat kiraz",
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
            <ListItem disablePadding key={e.id}>
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