import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/nullstyle.css'
import './styles/globalstyle.css'
import { App } from './app/App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
