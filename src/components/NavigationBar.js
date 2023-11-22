// NavigationBar.js
import React from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography, Container } from '@mui/material';

const NavigationBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" color='error'>
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BookScape
          </Typography>
          <Tabs value={value} onChange={handleChange} textColor="inherit">
            <Tab label="Home" />
            <Tab label="New Arrivals" />
            <Tab label="Genres" />
            <Tab label="Orders" />
            <Tab label="Profile" />
          </Tabs>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;