import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getProductDetailsById } from '../../actions';
import Layout from '../../components/Layout';
import {useParams,useNavigate} from 'react-router'
import { 
  IoIosArrowForward, 
  IoIosStar, 
  IoMdCart 
} from 'react-icons/io';
import { BiRupee } from 'react-icons/bi';
import { AiFillThunderbolt } from 'react-icons/ai';
import { MaterialButton } from '../../components/MaterialUI';
import { generatePublicUrl } from '../../urlConfig';
import './index.css'; 

const ProductDetailsPage = (props) => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product)
    let {productId} =useParams()
    let navigate = useNavigate();

    useEffect(()  =>{
        const payload = {
            params :{
                productId 
            }
        } 
        
        dispatch(getProductDetailsById(payload))
    },[])


    if(Object.keys(product.productDetails).length === 0){
        return null;
    }

    return (
        <Layout>
        {/* <div>{product.productDetails.name}</div> */}
        <div className="productDescriptionContainer">
          <div className="flexRow" >
            <div className="verticalImageStack">
              {
                product.productDetails.productPictures.map((thumb, index) => 
                <div className="thumbnail">
                  <img src={generatePublicUrl(thumb.img)} alt={thumb.img} />
                </div>
                )
              }
              {/* <div className="thumbnail active">
                {
                  product.productDetails.productPictures.map((thumb, index) => 
                  <img src={generatePublicUrl(thumb.img)} alt={thumb.img} />)
                }
              </div> */}
            </div>
            <div className="productDescContainer">
              <div className="productDescImgContainer">
                <img src={generatePublicUrl(product.productDetails.productPictures[0].img)} alt={`${product.productDetails.productPictures[0].img}`} />
              </div>
  
              {/* action buttons */}
              <div className="flexRow">
                <MaterialButton
                  title="ADD TO CART"
                  bgColor="#cd6deb"
                  textColor="#ffffff"
                  style={{
                    marginRight: '5px'
                  }}
                  onClick={
                   () =>{
                    const {_id,name,price} = product.productDetails;
                    const img = product.productDetails.productPictures[0].img;
                    dispatch(addToCart({_id, name,price,img}));
                    navigate('/cart')
                   }
                  }
                  icon={<IoMdCart />}
                />
                <MaterialButton
                  title="BUY NOW"
                  bgColor="#f093c6"
                  textColor="#ffffff"
                  style={{
                    marginLeft: '5px'
                  }}
                  onClick={() => {
                    const {_id,name,price} = product.productDetails;
                    const img = product.productDetails.productPictures[0].img;
                    const qty = 1;
                    const cartItems = { _id, name,img,price,qty}
                    navigate('/checkout', { state: {cartItems,isBuyTrue : true} });
                  }}
                  icon={<AiFillThunderbolt />}
                />
              </div>
            </div>
          </div>
          <div style={{lineHeight:"35px", fontSize:"50px"}}>
  
            {/* home > category > subCategory > productName */}
            <div className="breed">
              <ul>
                <li><a href="#">Home</a><IoIosArrowForward /></li>
                <li><a href="#">Mobiles</a><IoIosArrowForward /></li>
                <li><a href="#">Samsung</a><IoIosArrowForward /></li>
                <li><a href="#">{product.productDetails.name}</a></li>
              </ul>
            </div>
            {/* product description */}
            <div className="productDetails" style={{  textAlign: "left"}}>
                <p className="productTitle">{product.productDetails.name}</p>
              <div>
                <span className="ratingCount">4.3 <IoIosStar /></span>
                <span className="ratingNumbersReviews">72,234 Ratings & 8,140 Reviews</span>
              </div>
              <div className="extraOffer">Extra <BiRupee />4500 off </div>
              <div className="flexRow priceContainer">
                <span className="price"><BiRupee />{product.productDetails.price}</span>
                <span className="discount" style={{ margin: '0 10px' }}>22% off</span>
                {/* <span>i</span> */}
                </div>
              <div>
                <p style={{ 
                  color: '#212121', 
                  fontSize: '15px',
                  fontWeight: '600' 
                  }}>Available Offers</p>
                <p style={{ display: 'flex' }}>
                  <span style={{
                    width: '100px',
                    fontSize: '15px',
                    color: '#878787',
                    fontWeight: '600',
                    marginRight: '20px'
                }}>Description</span>
                <span style={{
                  fontSize: '15px',
                  color: '#212121',
                }}>{product.productDetails.description}</span>
                </p>
              </div>
            </div>
  
  
          </div>
        </div>
      </Layout>
    )
  
  }



export default ProductDetailsPage;

