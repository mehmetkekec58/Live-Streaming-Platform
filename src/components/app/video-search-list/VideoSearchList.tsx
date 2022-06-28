import React from 'react';
import MyVideoPhotoAndUserComponent from '../../../utilities/my-video-photo-and-user-component/MyVideoPhotoAndUserComponent';
import './VideoSearchList.css';

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
        viewers: 2,
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

function VideoSearchList() {
  return (
    <div className='video-search-list'>
          {itemData.map((item) => (
          <MyVideoPhotoAndUserComponent key={item.id} item={item}></MyVideoPhotoAndUserComponent>
        ))}
        {/* <img className='search-image-list' width="150px" height="100px" src='https://thumbs.dreamstime.com/b/melbourne-night-view-docklands-i-took-phot-harbor-golden-time-sky-color-bridge-was-amazing-beautiful-thx-220751777.jpg'/>
       <div className='search-image-list-info'>
        <span className='search-list-span video-search-list-title'>Video Başlığı</span>
        <br/>
        <span className='search-list-span'>Valorant</span>
        <br/>
        <span className='search-list-span'>Mehmet Kekeç</span>
        <br/>
        <span className='search-list-span'>170 izleyici</span>
       </div> */}
         </div>
  )
}

export default VideoSearchList