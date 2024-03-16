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
     <Choice/>
     <Footer/>
    
    </>
  )
}

export default App
