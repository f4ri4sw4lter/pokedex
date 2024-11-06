import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#ef5350' }}>
      <Toolbar>
        <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Pokedex
        </Typography>
        <Button color="inherit">Inicio</Button>
        <Button color="inherit">Acerca de</Button>
        <Button color="inherit">Contacto</Button>
      </Toolbar>
    </AppBar>
  );
}
