//React Imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
//Component Imports
import './index.css'
import store from '../Store.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      </BrowserRouter>
  </StrictMode>

)
