import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getProductsByslug } from '../../../actions';
import Card from '../../../components/UI/Card';
import { generatePublicUrl } from '../../../urlConfig';
import './index.css';
import { MaterialButton } from '../../../components/MaterialUI';
import Rating from '../../../components/UI/Rating';
import Price from '../../../components/UI/price';

const ProductStore = (props) => {
    const product = useSelector(state => state.product);
    const priceRange = product.priceRange;
    const dispatch = useDispatch();
    let { slug } = useParams();

    useEffect(() => {
        dispatch(getProductsByslug(slug));
     
    }, [])
    
    return (
        <>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        
                        <Card headerLeft={`${slug.split("-")[0]} mobile under ${priceRange[key]}`} headerRight={<MaterialButton title="view all" style={{width : "90px",padding:"2px 3px"}}/>} style={{width :'calc(100% - 50px)',margin:'20px'}}>
                            <div style={{ display: 'flex' }}>
                                {
                                    product.productsByPrice[key].map(product => (
                                        <Link to={`/${product.slug}/${product._id}/p`} style={{display:'block'}} className="productContainer">
                                            <div className="productImgContainer">
                                                <img src={generatePublicUrl(product.productPictures[0].img)} alt="samsung" />
                                            </div>
                                            <div className="productInfo">
                                                <div style={{ margin: '5px 0' }}>{product.name}</div>
                                                <div>
                                                    <Rating value={4.3}/>&nbsp;
    
                                                </div>
                                                <Price value={product.price}/>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </Card>
                    )
                })
            }
        </>
    )

}
export default ProductStore;


