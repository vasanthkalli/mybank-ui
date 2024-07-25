import { AppBar, IconButton, Toolbar, Typography, Button, Menu, Box, Autocomplete} from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Login from '../components/login/Login';
import lloydslogo from './lloydslogo.png';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import SavingsSharpIcon from '@mui/icons-material/SavingsSharp';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(0, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar disableGutters >
            <IconButton onClick={() => window.open('/')} target="_blank" rel="noopener noreferrer">
              <SavingsSharpIcon />
            </IconButton>
    
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyBank
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button color="inherit" href="Login">Logon</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar


