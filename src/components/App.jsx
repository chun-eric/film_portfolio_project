import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Actors, MovieInformation, Movies, Navbar, Profile } from '.';

const App = () => (

  <BrowserRouter>
    <div style={{ backgroundColor: '#fff', display: 'flex', height: '100%' }}>
      <CssBaseline />
      <Navbar />
      <main style={{ padding: '2em', flexGrow: 1 }}>
        <div style={{ height: '70px' }}>
          <Routes>
            <Route exact path="/" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieInformation />} />
            <Route path="/actor/:id" element={<Actors />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </div>
      </main>

    </div>
  </BrowserRouter>

);

export default App;
