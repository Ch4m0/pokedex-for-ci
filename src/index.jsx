import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom'
import App from './App'
import './styles.css'

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
