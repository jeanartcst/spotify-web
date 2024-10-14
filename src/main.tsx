import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './global.css'

// configuration to allow createRoot() not give error, inside of linter, on BIOME.

// "style": {
//       "noNonNullAssertion": "off"
//     }

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
