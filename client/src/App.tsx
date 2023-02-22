
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


import Profile from './pages/profile'
import Post from './components/post'
import Follow from './components/follow'

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={<Profile/>}/>
          <Route path='/post' element={<Post/>}/>
          <Route path='/followers' element={<Follow/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App
