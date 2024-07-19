import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
// import NavBar from './NavBar';
import backgroundimage  from './BackgroundImage.png';
import { autocompleteClasses, Card, CardMedia } from '@mui/material';
import { AspectRatio, Padding, Style } from '@mui/icons-material';

const myStyle = {
  backgroundImage:
      "url('./BackgroundImage.png')",
  height: "91vh",
  position: "center",
  marginTop: "-7px",
  fontSize: "50px",
  padding: "0",
  width: 'auto',
  display: 'flex',
  maxwidth: '600',
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
};

function Home() {

    return (
          <Box >
            {/* <NavBar /> */}
            <Box sx={{ width: '100%', overflowX: 'hidden' }}>
            <Card>
              <div style={{ position: "relative" }}>
              <CardMedia style={myStyle}   component="img" image={backgroundimage} title="Background" alt="Lloyds Background"/>
              <div style={{position: "absolute", color: "#FFFAFA",top: 10,left: "10%",transform: "translateX(-50%)", paddingLeft: '50%', paddingTop: '10%'}}> 
                <Typography variant='h3' fontWeight='bold'>Welcome to Club Lloyds</Typography>
                <Typography variant='h5' >The inclusive current account with exclusive benefits.</Typography>
              </div>
              </div>
            </Card>
            </Box>
          </Box>
        )
}

export default Home;