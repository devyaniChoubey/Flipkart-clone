import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../components/UI/Card";
import { generatePublicUrl } from "../../../urlConfig";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useLocation, useParams } from 'react-router';
import { 
  IoIosArrowForward, 
  IoIosStar, 
  IoMdCart 
} from 'react-icons/io';

import "./index.css";
import { getProductsBycategory, getProductsByslug } from "../../../actions";
import getParams from "../../../utils/getParams";


/**
 * @author
 * @function ClothingAndAccessories
 **/

const ClothingAndAccessories = (props) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  let { slug } = useParams();
  let location = useLocation();
  const params = getParams(location.search);
 

  useEffect(async () => {
  
    if(slug === 'bannerClicked'  || slug === 'productClicked'){
      dispatch(getProductsBycategory(params.categoryId))
    }else{
      dispatch(getProductsByslug(slug));
    }
    
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      <Card
          headerLeft={product.categoryName}
      >
        <div style={{display:"flex"}}>
        {product.product.map((product) => (
          <div className="caContainer">
            <Link
              className="caImgContainer"
              to={`/${product.slug}/${product._id}/p`}
            >
              <img src={generatePublicUrl(product.productPictures[0].img)} />
            </Link>
            <div>
              <div className="caProductName">{product.name}</div>
              <div className="extraOffer">Extra <BiRupee />{product.price / 100} off </div>
              <div>

                <span className="ratingCount">4.3 <IoIosStar /></span>&nbsp;
                <span><BiRupee/>{product.price}</span>
              </div>
              
            </div>
          </div>
        ))}
        </div>
      </Card>
    </div>


  );
};

export default ClothingAndAccessories;




