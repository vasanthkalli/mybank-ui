import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { AppBar, Button, Container, FormControlLabel, Toolbar, 
    Typography, MenuItem, Select, FormControl, InputLabel,Accordion,AccordionSummary,AccordionDetails, 
     } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { CheckBox } from '@mui/icons-material';

function Login() {


    return (
        <div>
            <AppBar position='static' style={{ backgroundColor: '#006A4D' }}>
                <Container maxWidth='xs'>
                    <Toolbar disableGutters >
                        <Typography variant='p' component='p'><img src='./lloydslogo.png' alt='lloyds logo' style={{ marginRight: 16 }}></img></Typography>
                        <Typography component='a' style={{ marginRight: 16 }} >Mobile</Typography>
                        <Typography component='a' >Cookie Policy</Typography>
                    </Toolbar>
                </Container>
            </AppBar>

            <Grid container id='topcontainer' flexDirection={'row'} spacing={2} style={{ marginLeft: 90, marginTop: 45, marginBottom: 10 }}>
                <Grid item xs={7}>
                    <Grid id='maincontainer' container alignItems='center' justifyContent='center' spacing={4}>
                        <Grid item xs={12}>
                            <Typography variant='h3' component='p'>Welcome to Internet Banking</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id='userid' name='userid' variant='outlined' label='username' required />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type='password' id='password' name='password' label='password' variant='outlined' required />
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
                            <Button variant='outlined'>Login</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                    <Grid container alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                        <Grid item style={{width: '50%'}}>
                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                    <Typography>Help&Support</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        <Typography>Contact Us</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;