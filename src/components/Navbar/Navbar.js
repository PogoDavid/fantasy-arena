import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

function Navbar() {
  const { t } = useTranslation();

  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar className="toolbar">
        <Button color="inherit" component={Link} to="/draft">
          {t('draft')}
        </Button>
        <Button color="inherit" component={Link} to="/profile">
          {t('profile')}
        </Button>
        <Button color="inherit" component={Link} to="/logout">
          {t('logout')}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
