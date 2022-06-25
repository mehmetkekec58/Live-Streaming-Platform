import React from 'react';
import "./Main.css";
import { Avatar, ImageList, ImageListItem } from '@mui/material';


const live: string = "Canlı";
const viewer = "izleyici";
let colorList: string[] = ["red", "blue", "green", "purple", "pink", "orange", "brown"];

const itemData = [
  {
    id: 1,
    img: 'https://thegamerstation.com/wp-content/uploads/2022/05/8daacd38-9ca5-48c0-815a-ffb4115f97e0_2560x1440-b9e61a40d59cea7da47706ad1727d515.jpg',
    title: 'Valorant canlı yayını',
    username: '@nagehanuzun',
    userImage: 'https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc',
    viewers: 35,
    fullName: "Nagehan Uzun",
  },
  {
    id: 2,
    img: 'https://i4.hurimg.com/i/hurriyet/75/750x422/5f9fff007152d818a4d68266.jpg',
    title: 'PUBG çetin çatışma',
    username: '@nawnaw',
    userImage: 'https://pbs.twimg.com/profile_images/1382786125752905734/WlpEv8Z__400x400.jpg',
    viewers: 50,
    fullName: "Adil Tekyürek",
  },
  {
    id: 3,
    img: 'https://cdn.akamai.steamstatic.com/steam/apps/42700/capsule_616x353.jpg?t=1654809667',
    title: 'Call Of Duty Oynayalım!',
    username: '@serlik',
    userImage: 'https://i1.imgiz.com/listeler/MY57UMVEUFEG827W7DFPMC564BMD3K8F_1481720543.jpeg',
    viewers: 2,
    fullName: "Serkan Serlik",
  },
  {
    id: 4,
    img: 'https://iasbh.tmgrup.com.tr/6276d9/650/344/0/24/678/381?u=https://isbh.tmgrup.com.tr/sbh/2020/08/13/minecraft-nasil-indirilir-minecraft-ucretsiz-olarak-nasil-yuklenir-1597277661556.jpg',
    title: 'Minecraft sahibinden satılık ev yapıyoruz',
    username: '@duvarkesen',
    viewers: 28,
    fullName: "Deniz Keser",
  },
  {
    id: 5,
    img: 'https://cdn.karar.com/news/1400401.jpg',
    title: 'Kafa dağıtalım',
    username: '@bybarbie',
    userImage: 'https://images.squarespace-cdn.com/content/v1/5b99048f55b02ce496ffeb2d/1605942960996-08KLJEDCFQCVJV29F6XL/Winter+Drawing_Dec20-01.png?format=1500w',
    viewers: 157,
    fullName: "Binnaz Elmalı",
  },
  {
    id: 6,
    img: 'https://i.ytimg.com/vi/tGcpReulmxw/maxresdefault.jpg',
    title: 'Araba yarıştırıyoruz | Çekiliş var!',
    username: '@kıralcı',
    viewers: 14,
    fullName: "Mete Kırçakır",
  },
  {
    id: 7,
    img: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/6456/production/_102668652_overcooked.jpg',
    title: 'Yemek pişirmece game play',
    username: '@ahbedostum',
    userImage: null,
    viewers: 8,
    fullName: "Sinem Sakarya",
  },
  {
    id: 8,
    img: 'https://iasbh.tmgrup.com.tr/9f638c/487/254/0/0/487/254?u=https://isbh.tmgrup.com.tr/sbh/2015/10/14/487x254/1444809885153.jpg',
    title: 'Su ve Ateş || Bol bol sohbet',
    username: '@elmas',
    userImage: 'https://coffeemag.com.tr/wp-content/uploads/2017/09/resim-yapma-teknikleri-1-1024x715.jpg',
    viewers: 64,
    fullName: "Sinan Zeki",
  },
  {
    id: 9,
    img: 'https://cdn.webtekno.com/media/cache/content_detail_v2/article/95761/steam-yaz-indirimleri-dusuk-sistem-gereksinimli-oyunlar-1593219350.jpg',
    title: 'Savaşarak buralara geldim',
    username: '@mynamesavas',
    viewers: 45,
    fullName: "Savaş Özkök",
  },
  {
    id: 10,
    img: 'https://thegamerstation.com/wp-content/uploads/2022/05/8daacd38-9ca5-48c0-815a-ffb4115f97e0_2560x1440-b9e61a40d59cea7da47706ad1727d515.jpg',
    title: 'Valorant canlı yayını',
    username: '@nagehanuzun',
    userImage: 'https://i0.wp.com/thegeyik.com/wp-content/uploads/2016/12/IMG_6214.jpg',
    viewers: 55,
    fullName: "Kasım Ekrem Demir",
  },
];

function randomColor(): string {
  return colorList[(Math.floor(Math.random() * colorList.length))];
}

function Main() {
  return (
    <div className='main'>
      <ImageList cols={3} rowHeight={230} sx={{ width: '100%', height: 625 }}>
        {itemData.map((item) => (
          <ImageListItem rows={1} key={item.id}>
            <img
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
              className="image"
            />

            <div className='viewers'>
              <p className='viewer'>{`${item.viewers} ${viewer}`}</p>
            </div>

            <div className='user-info'>
              {item.userImage != null ? <Avatar style={{ opacity: '100%', float: 'left' }} alt={item.username} src={item.userImage}></Avatar> :
                <Avatar style={{ opacity: '100%', float: 'left', backgroundColor: `${randomColor()}` }}>{item.fullName.trim().substring(0, 1).toLocaleUpperCase()}</Avatar>}
              <div style={{ float: 'left', alignItems: 'left', marginLeft: '10px', width: '260px', height: '40px' }}>
                <h6 style={{ color: 'white', fontWeight: 'bold' }}>{item.title.substring(0, 28)}{item.title.length > 30 ? "..." : ""}</h6>
                <p style={{ color: 'white', fontSize: '10px' }}>{item.fullName}</p>
              </div>
              <div style={{ float: 'right', backgroundColor: 'red', borderRadius: '2px', paddingLeft: '5px' }} >
                <p style={{ color: 'white', marginTop: '15px', fontWeight: 'bold', marginRight: '5px' }}>{live}</p></div>
            </div>
          </ImageListItem>
        ))}
      </ImageList></div>
  )
}

export default Main