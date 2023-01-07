
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: ['Arial', 'sans-serif'].join(','),
  fontSize: 11,
  h1: {
    fontFamily: ['Arial', 'sans-serif'].join(','),
    fontSize: 48,
  },
  h2: {
    fontFamily: ['Arial', 'sans-serif'].join(','),
    fontSize: 36,
  },
  h3: {
    fontFamily: ['Arial', 'sans-serif'].join(','),
    fontSize: 20,
  },
  h4: {
    fontFamily: ['Arial', 'sans-serif'].join(','),
    fontSize: 14,
  },
});

