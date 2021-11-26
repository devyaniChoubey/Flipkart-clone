import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getProductPage } from '../../../actions';
import getParams from '../../../utils/getParams';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from '../../../components/UI/Card';
import { Link } from 'react-router-dom';


const ProductPage = (props) => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const { page } = product;
    let location = useLocation();

    useEffect(() => {
        const params = getParams(location.search);
        console.log({ para : params });
        const payload = {
            params
        }
        dispatch(getProductPage(payload));
    }, [])

    return (

     

        <div style={{ margin: '0 10px' }}>
            <h3 style={{textAlign:"center"}}>{page.title} Store</h3>
            <Carousel renderThumbs={() => { }}>
                {
                    page.banners && page.banners.map((banner, index) => (
                        <Link key={index}
                            style={{ display: 'block' }}
                            to={banner.navigateTo}>
                            <img src={banner.img} alt="" />
                        </Link>
                    ))
                }
            </Carousel>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                margin: '10px 0'
            }}>
                {
                    page.products && page.products.map((product, index) => (
                        <Card key={index} style={{
                            width: '400px',
                            height: '200px',
                            margin: '5px'
                        }}>
                            <Link to={product.navigateTo}>
                            <img style={{
                                width: '100%',
                                height: '100%',
                                objectFit:'contain'
                            }} src={product.img} alt="" />
                            </Link>
                        </Card>
                    ))
                }
            </div>
        </div>





    )

}

export default ProductPage;