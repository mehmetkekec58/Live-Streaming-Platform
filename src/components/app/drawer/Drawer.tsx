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
  }
]

function Drawer() {
  return (
    <div className='drawer-div'>
      <Box sx={{ width: '100%', bgcolor: 'white' }}>
        <nav aria-label="main">
          <List>
            {data.map((e) => (
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <MyAvatarComponent fullName={e.fullName} />
                  </ListItemIcon>
                  <ListItemText primary={e.fullName} />
                  <div className=''>
                    <div className='circle'></div>
                    <p>{numberRounder(e.viewers)}</p>
                  </div>
                </ListItemButton>
              </ListItem>

            ))}

          </List>
        </nav>

      </Box>
    </div>

  )
}

export default Drawer