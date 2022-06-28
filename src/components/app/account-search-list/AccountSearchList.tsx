import { Avatar } from '@mui/material';
import React from 'react';
import MyAvatarComponent from '../../../utilities/avatar-component/MyAvatarComponent';
import './AccountSearchList.css';

function AccountSearchList() {
    return (

        <div className='account-list'>
            <div className="image-div">
                <img className='image-profile-search' width="120px" height="120px" src="https://www.mobiluygulama.com/wp-content/uploads/resim-cizmeyi-sevenlere-en-iyi-5-cizim-uygulamasi.jpg" />
            </div>
            <div className='info'>
                <span className='full-name'>Deniz Keskin</span>
                <br />
                <span className='followers'>50 B takipçi</span>
                <br />
                <span className='about-me'>Merhaba Ben Deniz.</span>
            </div>
        </div>
    )
}

export default AccountSearchList