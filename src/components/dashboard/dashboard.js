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
 import { autocompleteClasses, Card, CardMedia } from '@mui/material';
 import MainHeader from '../mainheader/mainheader';
 import sharedgoalImage  from '../../images/SharedGoal.jpg'


const pages = ['Fixed Deposits', 'Recurring Deposits', 'sharedgoals'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const myStyle = {
  backgroundImage:
      "url('../images/home-banner.jpg)",
  height: "93.5vh",
  position: "center",
  fontSize: "50px",
  padding: "0",
  width: '100%',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function Dashboard(){
 
      return (
        <div>
           <MainHeader/>
           <Box sx={{ width: '100%', overflowX: 'hidden' }}>
            <Card>
              <div style={{ position: "relative" }}>
              <CardMedia style={myStyle}   component="img" image={sharedgoalImage}  alt="Shared Goal"/>
              {/* <div style={{position: "absolute", color: "#FFFAFA",top: 10,left: "10%",transform: "translateX(-50%)", paddingLeft: '50%', paddingTop: '10%'}}> 
                <Typography variant='h3' fontWeight='bold'>Welcome to My Bank</Typography>
              </div> */}
              </div>
            </Card>
            </Box>
        </div>
      );
      
    
}