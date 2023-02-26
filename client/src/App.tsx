
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


import Profile from './pages/profile'
import Post from './components/post'
import Follow from './components/follow'
import Login from './pages/login'
import Home from './pages/home'
import Search from './components/search'
import EditProfile from './components/editProfile'

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/post' element={<Post/>}/>
          <Route path='/followers' element={<Follow/>}/>
          <Route path='/user' element={<Profile/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/edit' element={<EditProfile/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
