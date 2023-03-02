
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import PrivateRoutes from './components/privateRoutes'
import Profile from './pages/profile'
import Post from './components/post'
import Followers from './components/followers'
import Following from './components/following'
import Login from './pages/login'
import Home from './pages/home'
import Search from './components/search'
import EditProfile from './components/editProfile'
import Register from './pages/register'

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>

          <Route element={<PrivateRoutes/>}>
            <Route path='/home' element={<Home/>}/>
            <Route path='/post' element={<Post/>}/>
            <Route path='/user/followers' element={<Followers/>}/>
            <Route path='/user' element={<Profile/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/edit' element={<EditProfile/>}/>
            <Route path='/user/following' element={<Following/>} />
          </Route>

          <Route path='/register' element={<Register/>} />

          <Route path='/' element={<Login/>}/>
          
        </Routes>
      </Router>
    </div>
  )
}

export default App
