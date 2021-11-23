import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,getCartItems } from '../../actions';
import Layout from '../../components/Layout'
import Card from '../../components/UI/Card';
import CartItem from './CartItem';

import './index.css';

/**
* @author
* @function CartPage
**/

/*
Before Login
Add product to cart
save in localStorage
when try to checkout ask for credentials and 
if logged in then add products to users cart database from localStorage
*/

const CartPage = (props) => {

    const cart = useSelector(state => state.cart);
    const auth = useSelector(state => state.auth);
   // const cartItems = cart.cartItems;
    const [cartItems, setCartItems] = useState(cart.cartItems);
    const dispatch= useDispatch();

    useEffect(() => {
        setCartItems(cart.cartItems)
    },[cart.cartItems]);


    useEffect(() => {
      if(auth.authenticate){
          dispatch(getCartItems())
      }
    },[auth.authenticate])

    const onQuantityIncrement = (_id,qty) => {
        console.log({_id, qty});
        const { name,price, img} = cartItems[_id];
        dispatch(addToCart({_id, name,price,img},+1))
    }

    const onQuantityDecrement = (_id,qty) => {
        const { name,price, img} = cartItems[_id];
        dispatch(addToCart({_id, name,price,img},-1))
    }

    return (
        <Layout>
            <div className="cartContainer"  style={{alignItems :"flex-start"}}>
                <Card
                    headerLeft={`My Cart`}
                    headerRight={<div>Deliver to</div>}
                >
                    {
                        Object.keys(cartItems).map((key,index) => (
                            <CartItem key={index} cartItem={cartItems[key]} onQuantityInc={onQuantityIncrement} onQuantityDec={onQuantityDecrement}/>
                        ))
                    }
                    </Card>
                <Card style={{
                    width: '500px'
                }} headerLeft="Price"></Card>
            </div>
        </Layout>
    )

}

export default CartPage; 