import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './index.css'
// 
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux'
import store from './redux/store.jsx'

// 
const theme = createTheme();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
    <App />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
