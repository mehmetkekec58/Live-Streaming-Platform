import React from 'react';
import "./Main.css";
import { ImageList } from '@mui/material';
import MyVideoPhotoAndUserComponent from '../../../utilities/my-video-photo-and-user-component/MyVideoPhotoAndUserComponent';



const live: string = "Canlı";
const viewer = "izleyici";

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
    id: 4,
    videoThumbnail: 'https://iasbh.tmgrup.com.tr/6276d9/650/344/0/24/678/381?u=https://isbh.tmgrup.com.tr/sbh/2020/08/13/minecraft-nasil-indirilir-minecraft-ucretsiz-olarak-nasil-yuklenir-1597277661556.jpg',
    title: 'Minecraft sahibinden satılık ev yapıyoruz',
    username: '@duvarkesen',
    viewers: 2300,
    fullName: "Deniz Keser",
  },
  {
    id: 5,
    videoThumbnail: 'https://cdn.karar.com/news/1400401.jpg',
    title: 'Kafa dağıtalım',
    username: '@bybarbie',
    photoUrl: 'https://images.squarespace-cdn.com/content/v1/5b99048f55b02ce496ffeb2d/1605942960996-08KLJEDCFQCVJV29F6XL/Winter+Drawing_Dec20-01.png?format=1500w',
    viewers: 157,
    fullName: "Binnaz Elmalı",
  },
  {
    id: 6,
    videoThumbnail: 'https://i.ytimg.com/vi/tGcpReulmxw/maxresdefault.jpg',
    title: 'Araba yarıştırıyoruz | Çekiliş var!',
    username: '@kıralcı',
    viewers: 10400,
    fullName: "Mete Kırçakır",
  },
  {
    id: 7,
    videoThumbnail: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/6456/production/_102668652_overcooked.jpg',
    title: 'Yemek pişirmece game play',
    username: '@ahbedostum',
    photoUrl: null,
    viewers: 2000,
    fullName: "Sinem Sakarya",
  },
  {
    id: 8,
    videoThumbnail: 'https://iasbh.tmgrup.com.tr/9f638c/487/254/0/0/487/254?u=https://isbh.tmgrup.com.tr/sbh/2015/10/14/487x254/1444809885153.jpg',
    title: 'Su ve Ateş || Bol bol sohbet',
    username: '@elmas',
    photoUrl: 'https://coffeemag.com.tr/wp-content/uploads/2017/09/resim-yapma-teknikleri-1-1024x715.jpg',
    viewers: 64000,
    fullName: "Sinan Zeki",
  },
  {
    id: 9,
    videoThumbnail: 'https://cdn.webtekno.com/media/cache/content_detail_v2/article/95761/steam-yaz-indirimleri-dusuk-sistem-gereksinimli-oyunlar-1593219350.jpg',
    title: 'Savaşarak buralara geldim',
    username: '@mynamesavas',
    viewers: 1540000,
    fullName: "Savaş Özkök",
  },
  {
    id: 10,
    videoThumbnail: 'https://thegamerstation.com/wp-content/uploads/2022/05/8daacd38-9ca5-48c0-815a-ffb4115f97e0_2560x1440-b9e61a40d59cea7da47706ad1727d515.jpg',
    title: 'Valorant canlı yayını',
    username: '@nagehanuzun',
    photoUrl: 'https://i0.wp.com/thegeyik.com/wp-content/uploads/2016/12/IMG_6214.jpg',
    viewers: 55,
    fullName: "Kasım Ekrem Demir",
  },
];
function screenHeight():number {
  return screen.height;
  
}

function Main() {
  return (
    <div style={{width:'100%', height:`${screenHeight()}`}}>
      <ImageList cols={3} rowHeight={230} className="image-list" sx={{ width: '100%', height: `${screenHeight()}` }}>
        {itemData.map((item) => (
           <MyVideoPhotoAndUserComponent item={item}></MyVideoPhotoAndUserComponent>
        ))}
      </ImageList></div>
  )
}

export default Main