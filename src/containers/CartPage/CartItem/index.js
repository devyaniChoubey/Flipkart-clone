import './index.css';
import { useState } from 'react';
import { generatePublicUrl } from '../../../urlConfig';
import PriceDetails from '../../../components/PriceDetails';
import { useSelector } from 'react-redux';


/**
* @author
* @function CartItem
**/

const CartItem = (props) => {

    const { _id, name, price, img } = props.cartItem;
    const [qty, setQty] = useState(props.cartItem.qty);

    const onQuantityIncrement = () => {
        setQty(qty + 1);
        props.onQuantityInc(_id, qty + 1)
    }

    const onQuantityDecrement = () => {
        if (qty <= 1) return;
        setQty(qty - 1);
        props.onQuantityDec(_id, qty - 1);
    }
    const cart = useSelector(state => state.cart)


    return (
        <div className="cartItemContainer">
            <div className="flexRow">

                <div className="cartProImgContainer">
                    <img src={generatePublicUrl(img)} alt={''} />
                </div>
                <div className="cartItemDetails">
                    <div>
                        <p>{name}</p>
                        <p>Rs. {price}</p>
                    </div>
                    <div>Delivery in 3 - 5 days</div>
                </div>

            </div>
            <div style={{
                display: 'flex',
                margin: '5px 0'
            }}>
                {/* quantity control */}
                <div className="quantityControl">
                    <button onClick={onQuantityDecrement}>-</button>
                    <input value={qty} readOnly />
                    <button onClick={onQuantityIncrement}>+</button>
                </div>
                <button className="cartActionBtn">save for later</button>
                <button className="cartActionBtn">Remove</button>
            </div>
            <PriceDetails
                totalItem={Object.keys(cart.cartItems).reduce(function (qty, key) {
                    return qty + cart.cartItems[key].qty;
                }, 0)}
                totalPrice={Object.keys(cart.cartItems).reduce((totalPrice, key) => {
                    const { price, qty } = cart.cartItems[key];
                    return totalPrice + price * qty;
                }, 0)}
            />
        </div>
    )

}

export default CartItem;

// let sum = numbers.reduce(function (accumulator, current) {
//     return accumulator + current;
// });