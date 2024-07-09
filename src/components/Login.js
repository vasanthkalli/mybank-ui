import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
function Login(){


return (
<Grid container spacing={2}>
  <Grid item xs={8}>
    <TextField id='userid' name='userid' variant='outlined'  label='username'required/>
  </Grid>
  <Grid item xs={8}>
  <TextField  type ='password' id='password' name='password' label='password' variant='outlined' required/>
  </Grid>
  <Grid item xs={8}>
    <Button variant='outlined'>Login</Button>
  </Grid>
</Grid>
);
}

export default Login;