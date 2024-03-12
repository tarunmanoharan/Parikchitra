import './App.css'
import  Footer  from './components/Footer'

import Bg from './components/Bg'

function App() {

  return (
    <>
     <Bg/>
      <div className='choice-container'>
         
        <div className='title'>
          <h1>Parikchitra</h1>
        </div>
        
        <ul className='choice'>
          <li>Student</li>
          <li>Teacher</li>
        </ul>
      </div>

      <Footer/>
    </>
  )
}

export default App
