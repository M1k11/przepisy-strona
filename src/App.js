import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import { AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <AppBar position="static" style={{ background: 'linear-gradient(to right, #56ab2f, #a8e063)' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Recipe Finder
          </Typography>
        </Toolbar>
      </AppBar>
      <LandingPage />
    </div>
  );
}

export default App;