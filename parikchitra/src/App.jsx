import './App.css'
import  Footer  from './components/Footer'


function App() {

  return (
    <>

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

        <ul className='choice'>
          <li>Student</li>
          <li>Teacher</li>
        </ul>

        </div>

      </div>



      <Footer/>
    </>
  )
}

export default App
