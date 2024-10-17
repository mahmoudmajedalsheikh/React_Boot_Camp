import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store';
import {Provider} from 'react-redux'

// store.dispatch({type:"account/deposit",payload:250})
// console.log(store.getState());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>

  </StrictMode>,
)
