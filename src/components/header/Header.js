import {
    AppBar, Container, Toolbar,
    Typography, 
} from '@mui/material';
function Header(){

    return(
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
        </div>
    );
}

export default Header;