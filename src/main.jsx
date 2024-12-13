import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AboutMe from './assets/aboutme/aboutme.jsx'
import ShowCertificate from './assets/certification/certification.jsx'
import Project from './assets/Projects/projects.jsx'
import WorkExpskill from './assets/workexperiance/workexp.jsx'
import Workexp from './assets/workexp/workexp.jsx'
import Contact from './assets/contact/contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AboutMe />
    <ShowCertificate />
    <WorkExpskill />
    
    <Project />
    <Workexp  />
    <Contact  />
  </StrictMode>,
)
