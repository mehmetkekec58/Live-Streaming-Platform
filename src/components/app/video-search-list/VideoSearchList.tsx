import React from 'react';
import { LIVE, VIEWER } from '../../../contains/containText';
import './VideoSearchList.css';
import { numberRounder } from '../../../helper/numberRounder';
import { Divider } from '@mui/material';
const itemData = [
  {
    id: 1,
    videoThumbnail: 'https://thegamerstation.com/wp-content/uploads/2022/05/8daacd38-9ca5-48c0-815a-ffb4115f97e0_2560x1440-b9e61a40d59cea7da47706ad1727d515.jpg',
    title: 'Valorant canlı yayını',
    username: '@nagehanuzun',
    photoUrl: 'https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc',
    viewers: 35,
    fullName: "Nagehan Uzun",
  },
  {
    id: 2,
    videoThumbnail: 'https://i4.hurimg.com/i/hurriyet/75/750x422/5f9fff007152d818a4d68266.jpg',
    title: 'PUBG çetin çatışma',
    username: '@nawnaw',
    photoUrl: 'https://pbs.twimg.com/profile_images/1382786125752905734/WlpEv8Z__400x400.jpg',
    viewers: 50,
    fullName: "Adil Tekyürek",
  },
  {
    id: 3,
    videoThumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/42700/capsule_616x353.jpg?t=1654809667',
    title: 'Call Of Duty Oynayalım!',
    username: '@serlik',
    photoUrl: 'https://i1.imgiz.com/listeler/MY57UMVEUFEG827W7DFPMC564BMD3K8F_1481720543.jpeg',
    viewers: 2,
    fullName: "Serkan Serlik",
  },
  {
    id: 1,
    videoThumbnail: 'https://thegamerstation.com/wp-content/uploads/2022/05/8daacd38-9ca5-48c0-815a-ffb4115f97e0_2560x1440-b9e61a40d59cea7da47706ad1727d515.jpg',
    title: 'Valorant canlı yayını',
    username: '@nagehanuzun',
    photoUrl: 'https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc',
    viewers: 35,
    fullName: "Nagehan Uzun",
  },
  {
    id: 2,
    videoThumbnail: 'https://i4.hurimg.com/i/hurriyet/75/750x422/5f9fff007152d818a4d68266.jpg',
    title: 'PUBG çetin çatışma',
    username: '@nawnaw',
    photoUrl: 'https://pbs.twimg.com/profile_images/1382786125752905734/WlpEv8Z__400x400.jpg',
    viewers: 50,
    fullName: "Adil Tekyürek",
  },
  {
    id: 3,
    videoThumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/42700/capsule_616x353.jpg?t=1654809667',
    title: 'Call Of Duty Oynayalım!',
    username: '@serlik',
    photoUrl: 'https://i1.imgiz.com/listeler/MY57UMVEUFEG827W7DFPMC564BMD3K8F_1481720543.jpeg',
    viewers: 2,
    fullName: "Serkan Serlik",
  },
  {
    id: 1,
    videoThumbnail: 'https://thegamerstation.com/wp-content/uploads/2022/05/8daacd38-9ca5-48c0-815a-ffb4115f97e0_2560x1440-b9e61a40d59cea7da47706ad1727d515.jpg',
    title: 'Valorant canlı yayını',
    username: '@nagehanuzun',
    photoUrl: 'https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc',
    viewers: 35,
    fullName: "Nagehan Uzun",
  },
  {
    id: 2,
    videoThumbnail: 'https://i4.hurimg.com/i/hurriyet/75/750x422/5f9fff007152d818a4d68266.jpg',
    title: 'PUBG çetin çatışma',
    username: '@nawnaw',
    photoUrl: 'https://pbs.twimg.com/profile_images/1382786125752905734/WlpEv8Z__400x400.jpg',
    viewers: 50,
    fullName: "Adil Tekyürek",
  },
  {
    id: 3,
    videoThumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/42700/capsule_616x353.jpg?t=1654809667',
    title: 'Call Of Duty Oynayalım!',
    username: '@serlik',
    photoUrl: 'https://i1.imgiz.com/listeler/MY57UMVEUFEG827W7DFPMC564BMD3K8F_1481720543.jpeg',
    viewers: 2020,
    fullName: "Serkan Serlik",
  },
  {
    id: 3,
    videoThumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/42700/capsule_616x353.jpg?t=1654809667',
    title: 'Call Of Duty Oynayalım!',
    username: '@serlik',
    photoUrl: 'https://i1.imgiz.com/listeler/MY57UMVEUFEG827W7DFPMC564BMD3K8F_1481720543.jpeg',
    viewers: 2,
    fullName: "Serkan Serlik",
  },
]
const item = itemData[0];

function VideoSearchList() {
  return (
<div>
  <span style={{textAlign:'left',fontFamily:'Ubuntu'}}>Canlı Yayınlar</span>
<div className='video-search-list-div'>
{itemData.map((item) =>(

<div className='general-div'>
<div className='video-image-and-live'>
<img className='video-img-style' src={item.videoThumbnail} width="250px" height="150px"/>
<div className='video-search-live-background-color'><span className='search-list-live-text'>{LIVE}</span></div>
</div>
<div className='video-search-list-card-info'>
  <ul>
<li className='video-search-list-title'>{item.title}</li>
<li className='video-search-list-category'>VALORANT</li>
<li className='video-search-list-fullName'>{item.fullName}</li>
<li className='video-search-list-viewers'>{numberRounder(item.viewers)} {VIEWER}</li>
</ul>
</div>
  </div>

))}

  

 </div>
 </div>

//     <div className='video-search-list'>
//       {/* {itemData.map((item) => (
//           <MyVideoPhotoAndUserComponent key={item.id} item={item}></MyVideoPhotoAndUserComponent>
//         ))} */}
// {itemData.map((item) =>(
//   <div className='video-search-margin'>
//         <div className='search-image-list-div'>
//           <img className='search-image-list' width="150px" height="100px" src={item.videoThumbnail} />
//           <div className='live-background-color'><span className='live-span'>{LIVE}</span></div>
//         </div><div className='search-image-list-info'>
//             <span className='search-list-span video-search-list-title'>{item.title}</span>
//             <br />
//             <span className='search-list-span'>Valorant</span>
//             <br />
//             <span className='search-list-span'>{item.fullName}</span>
//             <br />
//             <span className='search-list-span'>{numberRounder(item.viewers)} {VIEWER}</span>
//           </div>
//           </div>


// ))}


//     </div>
  )
}

export default VideoSearchList