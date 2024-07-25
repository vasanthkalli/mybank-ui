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
import Grid from '@mui/material/Grid';
import './sharedgoal.css'
import { TextField } from '@mui/material';
import MainHeader from '../mainheader/mainheader';

const pages = ['Fixed Deposits', 'Recurring Deposits', 'sharedgoals'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Sharedgoal() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [goalname, setgoalname] = React.useState('')
  const [targetamount, settargetamount] = React.useState(0)
  const [contribution, setContribution] = React.useState(0)



  const navigate = useNavigate();

  let sharedGoal = {};

  React.useEffect(()=>{
    //get goal details from server
    //axios.get
    sharedGoal = {
           goalname: 'goalA',
           targetamount: 10000,
           contributionTillNow: 0
    }
  },[])

  const [existinggoals, setExistinggoals] = React.useState([])



  const loggedInUser = useSelector(state => state.loginReducer.loggedInUser)
  const handleContribution = (event)=>{
    setContribution(event.target.value)
  }

  const submitContribution = () =>{

  }

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

    setTimeout(() => {
      navigate('/creategoal', 5000)
    })
  }

  return (
    <div>
      <MainHeader />
      <Grid id='sharedgoal-body' Container>
        {!loggedInUser.isMember ? (<Grid item>
          <Button onClick={createGoal} variant='contained'>
            Create Goal
          </Button>
        </Grid>) : (<Grid item style={{ margin: '20px' }}>

          <Grid container>
            <Grid item>
              <p>Shared Goals</p>
              <p>Shared goal Target Amount {sharedGoal.targetamount}</p>
              <p> your contribution till now {sharedGoal.contributionTillNow}</p>
            </Grid>
            <Grid item>
              <TextField type='number' vaue={contribution} onChange={handleContribution}></TextField>
            </Grid>
            <Grid item>
            <Button onClick={submitContribution}>Contribute</Button>
            </Grid>
          </Grid>
          </Grid>)
        }

      </Grid>
    </div>
  );
}

