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
        <div className="cartItemContainer" style={{padding : "20px 0 20px 0",borderBottom:"1px solid #f0f0f0"}}>
            <div className="flexRow" style={{margin:"0 20px 0 20px"}}>
                <div className="cartProImgContainer">
                    <img src={generatePublicUrl(img)} alt={''} />
                </div>
                <div className="cartItemDetails">
                    <div>
                        <p style={{marginBottom:"10px"}}>{name}</p>
                        <p>Rs. {price}</p>
                    </div>
                </div>
                <div className="right">Delivery in 3 - 5 days</div>
                

            </div>
            <div style={{
                display: 'flex',
                margin:"10px 20px 0 20px"
            }}>
                {/* quantity control */}
                <div className="quantityControl">
                    <button onClick={onQuantityDecrement}>-</button>
                    <input value={qty} readOnly />
                    <button onClick={onQuantityIncrement}>+</button>
                </div>
                <button className="cartActionBtn">save for later</button>
                <button className="cartActionBtn" onClick={() => props.onRemoveCartItems(_id)}>Remove</button>
            </div>
           
        </div>
    )

}

export default CartItem;
