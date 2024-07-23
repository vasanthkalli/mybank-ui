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
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import  Grid  from '@mui/material/Grid';
import './sharedgoal.css'
import { TextField } from '@mui/material';
import MainHeader from '../mainheader/mainheader';

const pages = ['Fixed Deposits', 'Recurring Deposits', 'sharedgoals'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Sharedgoal(){
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [goalname, setgoalname] = React.useState('')
    const [targetamount, settargetamount] = React.useState(0)

    const navigate = useNavigate();

    const goal = {
      name: 'goalname',
      targetAmount: 10000,

    }

    const [existinggoals, setExistinggoals] = React.useState([])



    const loggedInUser = useSelector(state => state.loginReducer.loggedInUser)

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = (page) => {
       navigate(`/${page}`)
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const createGoal = () => {
         
        setTimeout(()=>{
          navigate('/creategoal', 5000)
        })
    }
  
    return (
        <div>
          <MainHeader/>
            <Grid id='sharedgoal-body' Container>
              <Grid item style={{margin: '20px'}}>
               Existing Goals
              </Grid>
                <Grid item>
                    <Button onClick={createGoal} variant='contained'>
                       Create Goal
                    </Button>
                </Grid>

              </Grid>
      </div>
    );
}

