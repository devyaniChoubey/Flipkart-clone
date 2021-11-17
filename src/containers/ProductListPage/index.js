import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByslug } from '../../actions';
import Layout from '../../components/Layout';
import { generatePublicUrl } from '../../urlConfig';

import './index.css';
/**
* @author
* @function ProductList
**/

const ProductListPage = (props) => {

    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        const { match } = props;
        dispatch(getProductsByslug(match.params.slug));
        console.log(props)
    }, [])

    return (
        <Layout>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <div className="card">
                            <div className="cardHeader">
                                <div>Samsung mobile under 10k</div>
                                <button>view all</button>
                            </div>
                            <div style={{display : 'flex'}}>
                                {
                                    product.productsByPrice[key].map(product => (
                                        <div className="productContainer">
                                            <div className="productImgContainer">
                                                <img src={generatePublicUrl(product.productPictures[0].img)} alt="samsung" />
                                            </div>
                                            <div className="productInfo">
                                                <div style={{margin: '5px 0'}}>{product.name}</div>
                                                <div>
                                                    <span>4.5</span>&nbsp;
                                                    <span>4567</span>
                                                </div>
                                                <div className="productPrice">{product.price}</div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                })
            }
        </Layout>
    )

}

export default ProductListPage;