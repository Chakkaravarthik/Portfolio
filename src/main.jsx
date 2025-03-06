import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AboutMe from './assets/aboutme/aboutme.jsx'
import ShowCertificate from './assets/certification/certification.jsx'
import Project from './assets/Projects/projects.jsx'
import WorkExpskill from './assets/workexperiance/workexp.jsx'
import Workexp from './assets/workexp/workexp.jsx'
import Contact from './assets/contact/contact.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='*' element={
        <div>
          <App />
          <div>
            <Routes>
              <Route path='/' element={<AboutMe />} />
              <Route path='/certification' element={<ShowCertificate />} />
              <Route path='/skills' element={<WorkExpskill />} />
              <Route path='/projects' element={<Project />} />
              <Route path='/experiance' element={<Workexp />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </div>
        </div>
      } />
    </Routes>
  </BrowserRouter>,
)
