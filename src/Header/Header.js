import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase';



function Header() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    // logout from app and firebase
    const signOut = () =>{
        auth.signOut().then(() => //firebase
        {
            dispatch(logout()) //app
        })
        
    }

  return (
    <div className='header'>
        <div className='header_left'>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img src='https://logos-world.net/wp-content/uploads/2020/11/Gmail-Emblem.png'      alt='img'></img>
        </div>

        <div className='header_middle'>
            <SearchIcon />
            <input placeholder='Search mail' type='text' />
            <ArrowDropDownIcon className='header_inputCarnet' />
        </div>
        
        <div className='header_right'>
        <IconButton>
            <AppsIcon />
        </IconButton>
        
        <IconButton>
            <NotificationsIcon />
        </IconButton>

        <Avatar onClick={signOut} src={user?.photoUrl } />

        </div>

    </div>
  )
}

export default Header