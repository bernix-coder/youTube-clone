import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import NotificationsIcon from '@material-ui/icons/Notifications';
import logo from './logo.jpg'
import { Avatar } from '@material-ui/core';
import userpic from './myimg.jpg'
import './header.css'

function Header() {
    return (
        <div className="header">
            <div className='header__left'>
                <MenuIcon />
                <img src={logo} alt='youTube logo' />
            </div>

            <div className='header__search'>
                <input placeholder='Search' type='text' />
                <SearchIcon className='header__inputBut' />
            </div>

            <div className='header__icons'>
                <VideoCallIcon  className='header__icon'/>
                <ViewModuleIcon className='header__icon'/>
                <NotificationsIcon className='header__icon'/>
                <Avatar alt='userpic' src={userpic} />
            </div>


        </div>
    )
}

export default Header
