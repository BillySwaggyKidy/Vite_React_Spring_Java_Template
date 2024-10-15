import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx';
import './global.css';
import './tailwindcssglobal.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
