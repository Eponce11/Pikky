
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


import Profile from './pages/profile'

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={<Profile/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App
