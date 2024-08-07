import { Outlet } from 'react-router-dom'
import './App.css'
import Navabr from './component/Navabr'
import Footer from './component/Footer'
function App() {

  return (
    <>
    <Navabr/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
