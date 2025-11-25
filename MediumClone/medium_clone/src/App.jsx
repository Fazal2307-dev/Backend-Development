import React from 'react'
import Navbar from './Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Write from './pages/Write'
import Topics from './pages/Topics'
import SignIn from './pages/SignIn'
import SignUp from './pages/Sign_Up'
import Support from './pages/Support'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </div>
  )
}

export default App
