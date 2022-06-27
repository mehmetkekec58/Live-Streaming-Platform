import React from 'react';
import ImageListItem from '@mui/material/ImageListItem/ImageListItem';
import MyAvatarComponent from '../avatar-component/MyAvatarComponent';
import './MyVideoPhotoAndUserComponent.css';
import { LIVE, VIEWER, MILLION, THOUSAND } from '../../contains/containText';
import { numberRounder } from '../../helper/numberRounder';


function selectLetters(text: string): string {
    return text.length > 29 ? text.substring(0, 28) + "..." : text.substring(0, 28);
}

interface Props {
    item: {
        id: number;
        username: string;
        photoUrl?: string | undefined | null;
        videoThumbnail: string;
        fullName: string;
        viewers: number;
        title: string;
    }
}
const MyVideoPhotoAndUserComponent: React.FC<Props> = ({ item }: Props) => {

    return (
        <ImageListItem sx={{ marginTop: '10px', marginLeft: '10px', height: '100px', width: '390px' }} rows={1} key={item.id}>
            <img
                src={`${item.videoThumbnail}`}
                alt={item.title}
                loading="lazy"
                className="image"
            />

            <div className='viewers'>
                <p className='viewer'>{`${numberRounder(item.viewers)} ${VIEWER}`}</p>
            </div>

            <div className='user-info'>
                <MyAvatarComponent photoUrl={item.photoUrl} fullName={item.fullName} style={{ float: 'left' }}></MyAvatarComponent>
                <div style={{ float: 'left', alignItems: 'left', marginLeft: '10px', width: '250px', height: '40px' }}>
                    <h6 style={{ color: 'white', fontWeight: 'bold' }}>{selectLetters(item.title)}</h6>
                    <p style={{ color: 'white', fontSize: '10px' }}>{item.fullName}</p>
                </div>
                <div style={{ float: 'right', backgroundColor: 'red', borderRadius: '2px', paddingLeft: '5px' }} >
                    <p style={{ color: 'white', marginTop: '15px', fontWeight: 'bold', marginRight: '5px' }}>{LIVE}</p></div>
            </div>
        </ImageListItem>
    )
}

export default MyVideoPhotoAndUserComponent