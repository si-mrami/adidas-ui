import { useState } from 'react'
import './App.scss'
import Announcment from './component/Announcment/Announcment'
import Navbar from './component/Navbar/Navbar'

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='app'>
      <Announcment menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Navbar/>
    </div>
  )
}

export default App
