
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


import Profile from './pages/profile'
import Post from './components/post'

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={<Profile/>}/>
          <Route path='/post' element={<Post/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App
