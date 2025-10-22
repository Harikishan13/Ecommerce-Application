import { useContext, useState } from 'react';
import './App.css';
import {Route,Routes} from "react-router-dom";
import Collection from './pages/Collection';
import Home from './pages/Home';
import Header from './components/Header';
import CategoryCollection from './pages/CategoryCollection';
import Productdetails from './pages/Productdetails';
import RelatedProducts from './components/RelatedProducts';
import UserExperiences from './pages/UserExperiences';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Login from './components/Login';
import { ShopContext } from './context/ShopContext';
import { ToastContainer } from 'react-toastify';
import PlaceOrder from './pages/PlaceOrder';
import MyOrders from './pages/Myorders';

function App() {
    const {showUserLogin} = useContext(ShopContext)
  return (
    <main className=' overflow-hidden bg-gray-200'>
      <Header/>
      <ToastContainer/>
      {showUserLogin && <Login/>}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/collection/:category' element={<CategoryCollection/>}/>
      <Route path='/collection/:categories/:id' element={<Productdetails/>}/>
      <Route path="/related/:category" element={<RelatedProducts />} />
      <Route path='/userExperiences' element={<UserExperiences/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/place-order' element={<PlaceOrder/>}/>
      <Route path='/my-orders' element={<MyOrders/>}/>
    </Routes>
      <Footer/>
    </main>
  )
}

export default App
