import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { AppBar, Button, Container, FormControlLabel, Toolbar, Typography } from '@mui/material';
import { CheckBox } from '@mui/icons-material';
function Login(){


return (
    <div>
    <AppBar position='static'>
     <Container maxWidth='xs'>
        <Toolbar disableGutters >
         <Typography variant='p' component='p'><img src='./lloydslogo.png' alt='lloyds logo' style={{marginRight: 16}}></img></Typography>
         <Typography component='a' style={{marginRight: 16}} >Mobile</Typography>
         <Typography component='a' >Cookie Policy</Typography>
      </Toolbar>
     </Container>
    </AppBar>

    
<Grid id='maincontainer' container alignItems='center' justifyContent='center' style={{marginLeft: 90}} spacing={4}>
<Grid item xs={12}>
<Typography variant='h3' style={{marginTop: 45, marginBottom: 10}} component='div'>Welcome to Internet Banking</Typography>
</Grid>
  <Grid item xs={12}>
    <TextField id='userid' name='userid' variant='outlined'  label='username'required/>
  </Grid>
  <Grid item xs={12}>
  <TextField  type ='password' id='password' name='password' label='password' variant='outlined' required/>
  </Grid>
  <Grid item xs={12} style={{marginBottom: 2, paddingBottom: 2}}>
  <FormControlLabel
   label='Remember UserId'
   control={
      <CheckBox 
        checked = {false}
      />
   }
   />
 </Grid>
 <Grid item xs={12} style={{paddingTop: 2}}>
    <Typography>Warning: Don’t tick this box if you’re using a public or shared computer</Typography>
 </Grid>
  <Grid item xs={12}>
    <Button variant='outlined'>Login</Button>
  </Grid>

</Grid>
</div>
);
}

export default Login;