import './App.css';
import Home from './Pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import ProductPage from './Pages/ProductPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import UserProfile from './Pages/UserProfile';
import { user_details } from './Redux/Actions/userLoginAction';
import { getCart } from './Redux/Actions/cartAction';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './Pages/Contact';
import Order from './Pages/Order';


function App() {
  const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem("userInfo")) {
          const token = localStorage.getItem("userInfo").split('"')[3]
          dispatch(user_details(token))
          dispatch(getCart(token))
        }
      }, [])
  return (
    <>
    <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart />}/>
              <Route path="/product/:id" element={<Product />} />    
              <Route path="/products/page" element ={<ProductPage/>}/>
              <Route path="/login" element ={<Login/>}/>
              <Route path="/register" element ={<Register/>}/>
              <Route path="/user/:id" element={<UserProfile/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/myOrder" element={<Order/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
