import './App.scss'
import Announcment from './component/Announcment/Announcment'
import BestSellers from './component/BestSellers/BestSellers'
import Header from './component/Header/Header'
import Navbar from './component/Navbar/Navbar'

function App() {


  return (
    <div className='app'>
      <Announcment/>
      <Navbar/>
      <Header/>
      <BestSellers/>
    </div>
  )
}

export default App
