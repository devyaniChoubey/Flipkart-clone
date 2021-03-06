import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getCartItems, removeCartItems } from '../../actions';
import Layout from '../../components/Layout'
import { MaterialButton } from '../../components/MaterialUI';
import Card from '../../components/UI/Card';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom'
import Logo from '../../images/logo/f.png'

import './index.css';
import PriceDetails from '../../components/PriceDetails';

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
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const auth = useSelector(state => state.auth);
    const [cartItems, setCartItems] = useState(cart.cartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        setCartItems(cart.cartItems)
    }, [cart.cartItems]);


    useEffect(() => {
        if (auth.authenticate) {
            dispatch(getCartItems())
        }
    }, [auth.authenticate])

    const onQuantityIncrement = (_id, qty) => {
      
        const { name, price, img } = cartItems[_id];
        dispatch(addToCart({ _id, name, price, img }, +1))
    }

    const onQuantityDecrement = (_id, qty) => {
        const { name, price, img } = cartItems[_id];
        dispatch(addToCart({ _id, name, price, img }, -1))
    }

    const onRemoveCartItems = (id) => {

        const payload = {
            productId: id
        }

        dispatch(removeCartItems(payload))

    }

    if (props.onlyCartItems) {
        return (
            <>
                {Object.keys(cartItems).map((key, index) => (
                    <CartItem
                        key={index}
                        cartItem={cartItems[key]}
                        onQuantityInc={onQuantityIncrement}
                        onQuantityDec={onQuantityDecrement}
                        onRemoveCartItems={onRemoveCartItems}
                    />
                ))}
            </>
        );
    }

    return (
        <Layout>
            <div className="cartContainer" style={{ alignItems: "flex-start" }}>
                {
                    Object.keys(cartItems).length == 0 ? (
                        <Card
                            headerLeft={`My Cart`}

                        >
                            <div style={{ overflow: 'hidden', textAlign: "center", padding: "30px 0 36px" }}>
                                <img src={Logo} style={{ width: "222px", height: "162px" }} />
                                <div style={{
                                    display: "block",
                                    fontSize: "18px",
                                    marginTop: "24px"
                                }}>Your cart is empty!</div>
                                <div style={{
                                    display: "block",
                                    fontSize: "12px",
                                    marginTop: "10px"
                                }}>It's a good day to buy the items you saved for later!</div>
                            </div>
                        </Card>

                    ) : (
                        <>
                            <Card
                                headerLeft={`My Cart`}
                                headerRight={<div>Deliver to</div>}
                                style={{ width: 'calc(100% - 400px)', overflow: 'hidden',margin:"0px" }}
                            >
                                {
                                    Object.keys(cartItems).map((key, index) => (
                                        <CartItem key={index} cartItem={cartItems[key]} onQuantityInc={onQuantityIncrement} onQuantityDec={onQuantityDecrement} onRemoveCartItems={onRemoveCartItems} />
                                    ))
                                }
                                <div style={{
                                    width: '100%',
                                    display: 'flex',
                                    background: '#ffffff',
                                    justifyContent: 'flex-end',
                                    // boxShadow: '0 0 10px 10px #eee',
                                    borderColor: 'black',
                                    padding: '10px 0',
                                    boxSizing: 'border-box',
                                    marginTop: '10px'
                                }}>
                                    <div style={{ width: '250px' }}>
                                        <MaterialButton title="PLACE ORDER" bgColor="#cd6deb" onClick={() => navigate('/checkout')} />
                                    </div>
                                </div>
                            </Card>
                            <PriceDetails
                                totalItem={Object.keys(cart.cartItems).reduce(function (qty, key) {
                                    return qty + cart.cartItems[key].qty;
                                }, 0)}
                                totalPrice={Object.keys(cart.cartItems).reduce(function (accumulator, key) {
                                    return accumulator + (cart.cartItems[key].qty) * (cart.cartItems[key].price);
                                }, 0)}
                            />
                        </>
                    )
                }

            </div>
        </Layout>
    )

}

export default CartPage;
