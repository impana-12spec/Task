import React from 'react'
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import HeadTail from './pages/HeadTail';
import About from './pages/About';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

const App = () => {
  return (
   <>
   <div>
     <Router>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/HeadTail' element={<HeadTail/>} />
      <Route path='/About' element={<About/>} />
     </Routes>
     </Router>
   </div>
   </>
  )
}

export default App

