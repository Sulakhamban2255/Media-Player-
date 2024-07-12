import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import History from './Pages/History'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header/>
<Routes>
  <Route path='/' element={<Landing/>} />
  <Route path='/home' element={<Home/>} />
  <Route path='/his' element={<History/>} />
</Routes>
<Footer/>
    </>
  )
}

export default App
