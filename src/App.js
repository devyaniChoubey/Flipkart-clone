import './App.css';
import HomePage from './containers/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductListPage from './containers/ProductListPage';
import CartPage from './containers/CartPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isUserLoggedIn, updateCart } from './actions';
import ProductDetailsPage from './containers/ProductdetailsPage';

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

  return (
    <div className="App">
      <Routes>
        <Route path="/" 
          element={<HomePage/>}
        />
        <Route path="/:productSlug/:productId/p" element={<ProductDetailsPage/>} />
        <Route path="/:slug" element={<ProductListPage/>} />
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
