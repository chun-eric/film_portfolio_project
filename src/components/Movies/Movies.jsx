import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';

export const Movies = () => {
  const { data } = useGetMoviesQuery();
  console.log(data);
  return (
    <div>Movies</div>
  );
};

export default Movies;
