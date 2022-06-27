import React from 'react';
import "./Footer.css";
import Box from '@mui/material/Box/Box';
import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemButton from '@mui/material/ListItemButton/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import TrendingIcon from '@mui/icons-material/TrendingUp';
import { Divider } from '@mui/material';

const data =[
  {
   text:"Gizlilik Sözleşmesi",
   link:"#",
  },
  {
    text:"Çerezler",
    link:"#",
   },
   {
    text:"Reklam Ver",
    link:"#",
   },

   {
    text:"Bize Ulaşın",
    link:"#",
   },
   {
    text:"Geri Bildirim",
    link:"#",
   },

]

function Footer() {
  return (
    <footer>  
        <Box sx={{ bgcolor: 'white' }}>
    <List>
      {data.map((e) =>(

<ListItem disablePadding>
<ListItemButton>
  <ListItemText  primary={e.text} />
</ListItemButton>
</ListItem>
      ))}
     
  </List>
      </Box>
     
      <span style={{fontSize:'12px'}}>Canlı Yayın Platformu 2022</span>
      </footer>
  )
}

export default Footer