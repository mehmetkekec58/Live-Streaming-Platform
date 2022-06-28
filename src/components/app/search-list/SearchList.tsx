import React from 'react'
import "./SearchList.css"
import AccountSearchList from '../account-search-list/AccountSearchList'
import VideoSearchList from '../video-search-list/VideoSearchList'

function SearchList() {
    return (
        <div className='search-list'>
            <AccountSearchList />
            <VideoSearchList />
            <AccountSearchList />
            <AccountSearchList />
            <AccountSearchList />
            <AccountSearchList />
            <VideoSearchList />
            <VideoSearchList />
            <VideoSearchList />
        </div>
    )
}

export default SearchList