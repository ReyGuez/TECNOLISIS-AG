import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './screens/Dashboard';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './themes';

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Dashboard />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
