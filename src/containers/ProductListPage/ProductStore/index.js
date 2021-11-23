import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getProductsByslug } from '../../../actions';
import Card from '../../../components/UI/Card';
import { generatePublicUrl } from '../../../urlConfig';
import './index.css';

const ProductStore = (props) => {
    const product = useSelector(state => state.product);
    const [priceRange, setPriceRange] = useState({
        under5k: 5000,
        under10k: 10000,
        under15k: 15000,
        under20k: 20000,
        under25k: 25000,
        under30k: 30000
    })
    const dispatch = useDispatch();
    let { slug } = useParams();

    useEffect(() => {
        dispatch(getProductsByslug(slug));
        console.log(props)
    }, [])
    return (
        <>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <Card headerLeft={`${slug} mobile under ${priceRange[key]}`} headerRight={<button>view all</button>} style={{width :'calc(100% - 50px)',margin:'20px'}}>
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
                                                    <span>4.5</span>&nbsp;
                                                    <span>4567</span>
                                                </div>
                                                <div className="productPrice">{product.price}</div>
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


