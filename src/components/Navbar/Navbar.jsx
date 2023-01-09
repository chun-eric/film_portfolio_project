import React from 'react';
import { AppBar, IconButton, Toolbar, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const isAuthenticated = true;
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();

  return (

    <AppBar position="fixed">
      <Toolbar sx={{
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '240px' }}
      >
        {isMobile && (
        <IconButton
          color="inherit"
          edge="start"
          style={{ outline: 'none', xs: { marginLeft: '0', flexWrap: 'wrap' } }}
          onClick={() => ({})}
          sx={{ xs: { marginLeft: '0', flexWrap: 'wrap' } }}
        >
          <Menu />
        </IconButton>
        )}
        <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => ({})}>
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        {!isMobile && 'Search...'}
        <div>
          {!isAuthenticated ? (
            <Button color="inherit" onClick={() => ({})}>
              Login &nbsp; <AccountCircle />
            </Button>
          ) : (
            <Button
              color="inherit"
              component={Link}
              to="/profile/:id"
              sx={{ '&:hover': { color: 'white !important', textDecoration: 'none' } }}
              onClick={() => ({})}
            >
              {!isMobile && <>My Movies &nbsp;</>}
              <Avatar
                style={{ width: 30, height: 30 }}
                alt="Profile"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              />
            </Button>
          )}
        </div>
        {isMobile && 'Search...'}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
