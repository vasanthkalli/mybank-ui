import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
 import NavBar from './NavBar';
import backgroundimage  from '../images/home-banner.jpg';
import { autocompleteClasses, Card, CardMedia } from '@mui/material';
import { AspectRatio, Diversity1Rounded, Padding, Style } from '@mui/icons-material';

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

function Home() {

    return (
          <Box >
            <NavBar /> 
            <Box sx={{ width: '100%', overflowX: 'hidden' }}>
            <Card>
              <div style={{ position: "relative" }}>
              <CardMedia style={myStyle}   component="img" image={backgroundimage} title="Background" alt="Lloyds Background"/>
              <div style={{position: "absolute", color: "#FFFAFA",top: 10,left: "10%",transform: "translateX(-50%)", paddingLeft: '50%', paddingTop: '10%'}}> 
                <Typography variant='h3' fontWeight='bold'>Welcome to My Bank</Typography>
                <Typography variant='h5' >where dreams come true!!</Typography>
              </div>
              </div>
            </Card>
            </Box>
          </Box>
        )
}

export default Home;