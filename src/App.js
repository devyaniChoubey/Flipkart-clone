import './App.css';
import HomePage from './containers/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductListPage from './containers/ProductListPage';
import CartPage from './containers/CartPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts, isUserLoggedIn, updateCart } from './actions';
import ProductDetailsPage from './containers/ProductdetailsPage';
import CheckOutPage from './containers/CheckoutPage/index';
import OrderPage from './containers/OrderPage';
import OrderDetailsPage from './containers/OrderDetailsPage';

function App() {
  const dispatch =useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() =>{
      if(!auth.authenticate){
        dispatch(isUserLoggedIn())
      }
  },[auth.authenticate])


  useEffect(() =>{
    console.log('App.js - updateCart')
    dispatch(updateCart())
  },[auth.authenticate])

  useEffect(() =>{
    dispatch(getAllProducts());
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/" 
          element={<HomePage/>}
        />
        <Route path="/:productSlug/:productId/p" element={<ProductDetailsPage/>} />
        <Route path="/:slug" element={<ProductListPage/>} />
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/account/orders" element={<OrderPage/>} />
        <Route path="/order_details/:orderId" element={<OrderDetailsPage/>} />
        <Route path="/checkout" element={<CheckOutPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
