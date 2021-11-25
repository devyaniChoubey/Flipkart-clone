import { useSelector } from 'react-redux'
import Layout from '../../components/Layout';
import "./assets/css/style.css"
import logo10 from "./assets/images/carousel/slide1.jpg"
import logo11 from "./assets/images/carousel/slide2.jpg"
import logo12 from "./assets/images/carousel/slide3.jpg"
import { Carousel } from 'react-responsive-carousel';
import Card from '../../components/UI/Card';
import { generatePublicUrl } from '../../urlConfig';
import { Link } from 'react-router-dom';
import { BiRupee } from 'react-icons/bi';
import { 
    IoIosArrowForward, 
    IoIosStar, 
    IoMdCart 
  } from 'react-icons/io';

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
    const product = useSelector(state => state.product);
    const category = useSelector(state => state.category);

    return (
        <Layout>
            <div className="container">
                <div className="menuHeader1">
                
                    <ul className="header-images-ul">
                  
                        {category.categories.map(category => <li><a href="#"><img src={category.categoryImage} className="header-images" /></a></li>)}
    
                    </ul>

                    <ul className="header-items-ul">
                    
                        {category.categories.map(category => <li><a href="#" className="header-items">{category.name}</a></li>)}
                       
                    </ul>
                </div>

                <Carousel renderThumbs={() => { }} interval={1500} autoPlay={true} autoFocus={true} infiniteLoop={true}>
                    <div>
                        <div className="numbertext">1 / 3</div>
                        <img src={logo10} style={{ width: "100%" }} />
                    </div>

                    <div>
                        <div className="numbertext">2 / 3</div>
                        <img src={logo11} style={{ width: "100%" }} />
                    </div>

                    <div>
                        <div className="numbertext">3 / 3</div>
                        <img src={logo12} style={{ width: "100%" }} />
                    </div>
                </Carousel>
                {
                    <Card headerLeft={'Deals of the day'}>
                        <div style={{ display: 'flex', overflow: "hidden" }}>
                            {product.products.map((product, key) => (
                                <Link to={`/${product.slug}/${product._id}/p`} style={{display:'block'}} className="productContainer">
                                    <div className="productImgContainer" style={{ display: 'block' }}>
                                        <img src={generatePublicUrl(product.productPictures[0].img)} alt="samsung" />
                                    </div>
                                    <div className="productInfo">
                                        <div style={{ margin: '5px 0' }}>{product.name}</div>
                                        <div className="extraOffer">Extra <BiRupee />{product.price/100} off </div>
                                        
                                        <div>
                                        
                                        <span className="ratingCount">4.3 <IoIosStar /></span>&nbsp;
                                                    <span>{product.price}</span>
                                                </div>
                                        <div className="productPrice"><BiRupee />{product.price}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Card>
                }



            </div>
            <div className="footer" style={{ background: "#cd6deb" }}>
                <ul>
                    <div className="footer-items">
                        <li><a href="#" className="footer-sellonbtn"><i className="mdi mdi-briefcase-check"></i>seller</a></li>
                        <li><a href="#" className="footer-advertisebtn"><i className="mdi mdi-star-circle"></i>advertise</a></li>
                        <li><a href="#" className="footer-helpbtn"><i className="mdi mdi-help-circle"></i>help</a></li>
                        <li><a href="#" className="footer-contactbtn"><i className="mdi mdi-headphones"></i>contact</a></li>
                    </div>
                </ul>
            </div>


        </Layout>
    )
}




export default HomePage;




