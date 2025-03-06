import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {


  const navigate = useNavigate();
  const routehandle = (str) =>{
    navigate(str);
  }

  return (
    <>
      <div >
        <ul class="nav nav-tabs d-flex justify-content-center m-4   shadow-lg rounded ">
          <li class="px-4 m-2">
            <a class="navbar text-decoration-none fs-4 fonthead " onClick={()=>routehandle("/")}>Home</a>
          </li>
          <li class="px-4 m-2">
            <a class="navbar text-decoration-none fs-4 fonthead" onClick={()=>routehandle("/certification")}>Certification</a>
          </li>
          <li class="px-4 m-2">
            <a class="navbar text-decoration-none fs-4 fonthead" onClick={()=>routehandle("/skills")}>Skills</a>
          </li>
          <li class=" px-4 m-2">
            <a class="navbar text-decoration-none fs-4 fonthead" onClick={()=>routehandle("/projects")}>Projects</a>
          </li>
          <li class=" px-4 m-2">
            <a class="navbar text-decoration-none fs-4 fonthead" onClick={()=>routehandle("/experiance")}>Experiance</a>
          </li>
          <li class=" px-4 m-2">
            <a class="navbar text-decoration-none fs-4 fonthead" onClick={()=>routehandle("/contact")}>Contact</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
