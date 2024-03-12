import './App.css'
import './components/footer'
import { Footer } from './components/footer'

function App() {

  return (
    <>
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
