import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Cart from './pages/Cart/Cart'
import MyOrder from './pages/MyOrder/MyOrder'
import PlaceOder from "./pages/PlaceOder/PlaceOder"
import Footer from './components/Footer/Footer'
import MobileApp from './components/MobileApp/MobileApp'
import Login from './components/Login/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [showLogin, setShowLogin] = useState(false)



  return (
    <>
    {showLogin?<Login setShowLogin = {setShowLogin}/>:<></>}
      <div className="py-4 px-5 md:px-28 md:py-5 md:m-auto">
        <Navbar  setShowLogin ={setShowLogin}/>
        <ToastContainer/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/place-order' element={<PlaceOder />} />
          <Route path = '/my-orders' element={<MyOrder/>}/>
        </Routes>
      </div>
      <MobileApp/>
      <Footer/>

    </>
  )
}

export default App
