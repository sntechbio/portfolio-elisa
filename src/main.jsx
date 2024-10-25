import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Pack from './pack1/index.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pack />
  </StrictMode>,
)
