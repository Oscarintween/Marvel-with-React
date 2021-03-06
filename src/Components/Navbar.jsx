import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from 'react-router-dom'
import '../index.css'

export default function Navbar() {
   
  return (
    <div>
    <Box sx={{flexGrow: 1}}>
      <AppBar sx={{backgroundColor:'#EC1D24'}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography id='navTitle' variant="h5" component="div" sx={{ flexGrow: 1 }}>
            MARVEL
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
