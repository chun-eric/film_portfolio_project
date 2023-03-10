import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemButton, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const blueLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const redLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const demoCategories = [
  { label: 'Comedy', value: 'comedy' },
  { label: 'Action', value: 'action' },
  { label: 'Horror', value: 'horror' },
  { label: 'Animation', value: 'animation' },
];

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();

  return (
    <>
      <Link to="/" sx={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
        <img width="70%" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', padding: '20px 0' }} src={theme.palette.mode === 'light' ? blueLogo : redLogo} alt="Filmpire" />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} style={{ color: theme.palette.text.primary, textDecoration: 'none' }} to="/">
            <ListItem onClick={() => {}} ListItemButton>
              {/* <ListItemIcon>
                <img src={redLogo} style={{ filter: theme.palette.mode === 'dark' ? 'dark ' : 'invert(1)' }} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link key={value} style={{ color: theme.palette.text.primary, textDecoration: 'none' }} to="/">
            <ListItem onClick={() => {}} listitembutton>
              {/* <ListItemIcon>
                <img src={redLogo} style={{ filter: theme.palette.mode === 'dark' ? 'dark ' : 'invert(1)' }} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
