import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom"

import  Footer  from './components/Footer'

import Slogin from './assets/student/components/Slogin'
import Choice from './components/Choice'

function App() {

  return (
    <>
    <Router>

    
    

    <Routes>
      <Route path='/' element={<Choice/>}/>
      <Route path='/slogin' element={<Slogin/>}/>
    </Routes>
    </Router>
  </>    
  )
}

export default App
