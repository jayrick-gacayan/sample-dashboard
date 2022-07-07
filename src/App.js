import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

import { Dashboard } from './components/Dashboard';
import AppBarSample from './AppBarSample';

function App() {
  const mdTheme = createTheme();

  return (
    <ThemeProvider theme={mdTheme}>
      <Routes>
        <Route 
          path="/"
          element={ <AppBarSample /> }/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
