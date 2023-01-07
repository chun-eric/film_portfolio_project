import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from '@emotion/react';
import { Actors, MovieInformation, Movies, Navbar, Profile } from '.';

const App = () => (

  <BrowserRouter>
    <Box sx={{ backgroundColor: '#fff', display: 'flex', height: '100%' }}>
      <CssBaseline />
      <Navbar />
      <Box sx={{ padding: '2em', flexGrow: 1 }}>
        <Box sx={{ height: '70px' }}>
          <Routes>
            <Route exact path="/" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieInformation />} />
            <Route path="/actor/:id" element={<Actors />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </Box>
      </Box>

    </Box>
  </BrowserRouter>

);

export default App;
