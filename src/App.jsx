import './App.css'
import  Footer  from './components/Footer'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link
} from "react-router-dom"


import Slogin from './assets/student/components/Slogin'

function App() {

  return (
    <Router>

      <div className='main-container'>

        <ul className="box">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <div className='title'>
          <h1>Parikchitra</h1>
        </div>

        <div className='choice-container'>

        <div className='choice'>
          <Link to="/slogin">
            <button>Student</button>
            </Link>
          <button>Teacher</button>
        </div>

        </div>

      </div>

      <Footer/>

    <Routes>
      <Route path="/slogin" element={<Slogin/>}/>
    </Routes>

    </Router>
  )
}

export default App
