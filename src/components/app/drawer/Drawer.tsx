import Box from '@mui/material/Box/Box';
import Divider from '@mui/material/Divider/Divider';
import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemButton from '@mui/material/ListItemButton/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import React from 'react';
import "./Drawer.css";
import Footer from '../footer/Footer';
import { Avatar } from '@mui/material';

function Drawer() {
  return (
    <div className='drawer-div'>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar>M</Avatar>
                </ListItemIcon>
                <ListItemText primary="Murat" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar>D</Avatar>
                </ListItemIcon>
                <ListItemText primary="Deniz Bozdağ" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </div>

  )
}

export default Drawer