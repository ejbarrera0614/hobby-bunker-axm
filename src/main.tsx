import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import Router from './hobby-bunker-ui/router/Router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
