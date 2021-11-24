import { useSelector } from 'react-redux'
import Layout from '../../components/Layout';
import "./assets/css/style.css"
import logo1 from "./assets/images/header/top-offers.png"
import logo2 from "./assets/images/header/grocery.png"
import logo3 from "./assets/images/header/mobiles.png"
import logo4 from "./assets/images/header/fashion.png"
import logo5 from "./assets/images/header/electronics.png"
import logo6 from "./assets/images/header/home.jpg"
import logo7 from "./assets/images/header/appliances.png"
import logo8 from "./assets/images/header/travel.png"
import logo9 from "./assets/images/header/beauty-toys.png"
import logo10 from "./assets/images/carousel/slide1.jpg"
import logo11 from "./assets/images/carousel/slide2.jpg"
import logo12 from "./assets/images/carousel/slide3.jpg"
import logo13 from "./assets/images/carousel/slide4.jpg"
import { Carousel } from 'react-responsive-carousel';
import Card from '../../components/UI/Card';
import { generatePublicUrl } from '../../urlConfig';
import { Link } from 'react-router-dom';

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
    const product = useSelector(state => state.product)
    return (
        <Layout>
            <div className="container">
                <div className="menuHeader1">

                    <ul className="header-images-ul">
                        <li><a href="#"><img src={logo1} className="header-images" /></a></li>
                        <li><a href="#"><img src={logo2} className="header-images" /></a></li>
                        <li><a href="#"><img src={logo3} className="header-images" /></a></li>
                        <li><a href="#"><img src={logo4} className="header-images" /></a></li>
                        <li><a href="#"><img src={logo5} className="header-images" /></a></li>
                        <li><a href="#"><img src={logo6} className="header-images" /></a></li>
                        <li><a href="#"><img src={logo7} className="header-images" /></a></li>
                        <li><a href="#"><img src={logo8} className="header-images" /></a></li>
                        <li><a href="#"><img src={logo9} className="header-images" /></a></li>
                    </ul>

                    <ul className="header-items-ul">
                        <li><a href="#" className="header-items">Top Offers</a></li>
                        <li><a href="#" className="header-items">Grocery</a></li>
                        <li><a href="#" className="header-items">Mobiles</a></li>
                        <li><a href="#" className="header-items">Fashion</a></li>
                        <li><a href="#" className="header-items">Electronics</a></li>
                        <li><a href="#" className="header-items">Home</a></li>
                        <li><a href="#" className="header-items">Appliances</a></li>
                        <li><a href="#" className="header-items">Travel</a></li>
                        <li><a href="#" className="header-items">Toys & more</a></li>
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
                    <Card headerLeft={"Shop for mobiles"}>
                        <div style={{ display: 'flex', overflow: "hidden" }}>
                            {product.products.map((product, key) => (
                                <Link to={`/${product.slug}/${product._id}/p`} style={{display:'block'}} className="productContainer">
                                    <div className="productImgContainer" style={{ display: 'block' }}>
                                        <img src={generatePublicUrl(product.productPictures[0].img)} alt="samsung" />
                                    </div>
                                    <div className="productInfo">
                                        <div style={{ margin: '5px 0' }}>{product.name}</div>
                                        {/* <div>
                                                    <span>4.5</span>&nbsp;
                                                    <span>4567</span>
                                                </div> */}
                                        <div className="productPrice">{product.price}</div>
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




