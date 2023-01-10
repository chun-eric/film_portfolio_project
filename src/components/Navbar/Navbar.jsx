import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Button, Drawer, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Sidebar } from '..';

const Navbar = () => {
  const isAuthenticated = true;
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            height: '80px',
            display: 'flex',
            justifyContent: 'space-between',
            mr: '3px',
            marginLeft: { xs: { marginLeft: ' 0' }, sm: { marginLeft: ' 240' } },
            flexWrap: { xs: { flexWrap: 'wrap' } },

          }}
        >
          {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            style={{ outline: 'none', marginLeft: '0' }}
            onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            sx={{ ml: '0', flexWrap: 'wrap', justifyContent: 'flex-start' }}
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
                  style={{ width: 30, height: 30, ml: '12px' }}
                  alt="Profile"
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                />
              </Button>
            )}
          </div>
          {isMobile && 'Search...'}
        </Toolbar>
      </AppBar>

      <div>
        <nav style={{ xs: { display: 'none' }, width: '240px', flexShrink: 0, alignItems: 'center', justifyContent: 'center' }}>
          {isMobile ? (
            <Drawer variant="temporary" anchor="right" open={mobileOpen} onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)} ModalProps={{ keepMounted: true }} sx={{ paper: { width: '240px' } }}>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (<Drawer sx={{ paper: { width: '240px' } }} variant="permanent" open><Sidebar setMobileOpen={setMobileOpen} /></Drawer>)}
        </nav>
      </div>
    </>

  );
};

export default Navbar;
