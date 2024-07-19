import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {
     Button, FormControlLabel, Toolbar,
    Typography, MenuItem, Select, FormControl, InputLabel, Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { CheckBox } from '@mui/icons-material';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {setLoggedInUser,setLoginStatus, setLoginSubmitted} from './loginSlice'
import { useNavigate } from 'react-router-dom';

function Login(props) {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const loginStatus = useSelector(state => state.loginReducer.loginSuccess)

    const loginSubmitted = useSelector(state => state.loginReducer.loginSubmitted)

    const [username, setusername] = React.useState('');
    const [password, setpassword] = React.useState('');

     const handleUsername = (e) => {
      setusername(e.target.value);
      }

      const handlePassword = (e) => {
        setpassword(e.target.value);
      }

    const handleLogin = () => {
       let  user ;
       user  =  {
        username: 'vasanth',
        token:'',
        expiryToken: ''
      }
       dispatch(setLoginSubmitted(true))
       if(username === 'vasanth' && password == 'vasanth') {
        dispatch(setLoginStatus(true))
        dispatch(setLoggedInUser(user))
       setTimeout(navigate('/dashboard'), 5000)
       } else {
        dispatch(setLoginStatus(false))
       }
     
   
    }

    return (
        <div>
        <Header/>
            <Grid container id='topcontainer' flexDirection={'row'} spacing={0} style={{marginTop: 45, marginBottom: 10 }}>
                <Grid item xs={8} style={{paddingLeft: '10%'}}>
                    <Grid id='maincontainer' container alignItems='center' justifyContent='center' spacing={4}>
                        <Grid item xs={12}>
                            <Typography variant='h3' component='p'>Welcome to Internet Banking</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id='userid' name='userid' variant='outlined' label='username' required style={{width:'50%'}}
                              onChange={handleUsername} value={username}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type='password' id='password' name='password' label='password' variant='outlined' required style={{width:'50%'}}
                            onChange={handlePassword} value={password}
                            />
                        </Grid>
                        <Grid item xs={12} style={{ marginBottom: 2, paddingBottom: 2 }}>
                            <FormControlLabel
                                label='Remember UserId'
                                control={
                                    <CheckBox
                                        checked={false}
                                    />
                                }
                            />
                        </Grid>
                        <Grid item xs={12} style={{ paddingTop: 2 }}>
                            <Typography>Warning: Don’t tick this box if you’re using a public or shared computer</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant={loginSubmitted ? 'outlined' :'contained' } onClick={handleLogin}>Login</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4} >
                    <Grid container  justifyContent={'center'} flexDirection={'column'}>
                        <Grid item style={{ width: '50%' }}>
                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography variant="h6" style={{ color: '#006A4D' }}>Help&Support</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontWeight: 'bold', marginBottom: 5 }}>
                                            What is a User ID?
                                        </Typography>
                                        <Typography style={{ fontWeight: 'inherit', }}>
                                            This is the unique number you’ve been given to run your Internet Banking account. You will need both your user id and your password to log into your online account.
                                        </Typography>
                                        <Typography style={{ fontWeight: 'bold', marginBottom: 5 }}>
                                            How do I reset my password and/or memorable information?
                                        </Typography>
                                        <Typography style={{ fontWeight: 'inherit', }} variant='p' component={'p'}>
                                            First, go to the Internet Banking log on screen and click on the 'Forgotten your logon details?' link. You'll need to enter a few details. On the next screen you’ll be asked if you want to reset your password or reset both your password and memorable information. Select the option which applies to you.

                                            If you choose to reset your password and/or memorable information, you’ll need to enter and confirm your new details and select a phone number for us to call you on. You’ll then receive a call from our automated system. Follow the instructions and your password and/or memorable information will be reset immediately.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        <Typography variant='h6' style={{ color: '#006A4D' }}>Contact Us</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontWeight: 'bold', marginBottom: 5 }}>
                                            General banking & account queries
                                        </Typography>
                                        <Typography style={{ fontWeight: 'inherit', }}>
                                            0345 300 0000
                                        </Typography>
                                        <Typography style={{ fontWeight: 'bold', margin: 5 }}>
                                            Savings account queries
                                        </Typography>
                                        <Typography style={{ fontWeight: 'inherit' }}>
                                            0345 300 0000
                                        </Typography>
                                        <Typography>
                                            Open 8am - 6pm, seven days a week and closed on Bank Holidays.

                                            Calls may be monitored and recorded in case we need to check we have carried out your instructions correctly and to help us improve our quality of service.

                                            Not all Telephone Banking services are available 24 hours a day, seven days a week. Please speak to an adviser for more information.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
            <Footer/>
        </div>
    );
}

export default Login;