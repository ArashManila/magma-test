import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../public/styles/main.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
