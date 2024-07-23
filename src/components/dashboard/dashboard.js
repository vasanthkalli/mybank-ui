import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoginStatus, setLoggedInUser, setLoginSubmitted

 } from '../login/loginSlice';
 import MainHeader from '../mainheader/mainheader';


const pages = ['Fixed Deposits', 'Recurring Deposits', 'sharedgoals'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Dashboard(){
 
      return (
        <div>
           <MainHeader/>
        </div>
      );
      
    
}