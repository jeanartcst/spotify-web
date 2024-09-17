import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// configuration to allow createRoot() not give error, inside of linter, on BIOME.

// "style": {
//       "noNonNullAssertion": "off"
//     }

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
