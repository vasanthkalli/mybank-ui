import {
    AppBar, Container, IconButton, Toolbar,
    Typography, 
} from '@mui/material';
import SavingsSharpIcon from '@mui/icons-material/SavingsSharp';


function Header(){

    return(
        <div>
     <AppBar position='static'>
                    <Toolbar disableGutters >
           
                            {/* <Typography class="d-flex align-items-center" variant='p' component='p'><SavingsSharpIcon />
                              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>MyBank</Typography>
                           </Typography> */}
                           <IconButton onClick={() => window.open('/')} target="_blank" rel="noopener noreferrer">
                               <SavingsSharpIcon />
                            </IconButton>
                    
                        
    
                           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                               MyBank
                          </Typography>
                        <Typography component='a' style={{ marginRight: 16 }} >Mobile</Typography>
                        <Typography component='a' >Cookie Policy</Typography>
                    </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;