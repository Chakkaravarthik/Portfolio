import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AboutMe from './assets/aboutme/aboutme.jsx'
import ShowCertificate from './assets/certification/certification.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AboutMe />
    <ShowCertificate />
  </StrictMode>,
)
