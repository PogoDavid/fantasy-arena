import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar className="toolbar">
        <Button color="inherit" component={Link} to="/draft">Draft</Button>
        <Button color="inherit" component={Link} to="/profile">Profile</Button>
        <Button color="inherit" component={Link} to="/logout">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
