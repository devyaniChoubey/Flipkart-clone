import { useEffect, useState } from 'react'
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
/**
* @author
* @function 
**/
import Logo from '../../images/logo/lets_shop.jpeg';
import goldenStar from '../../images/logo/golden-star.png';
import { IoIosArrowDown, IoIosCart, IoIosSearch } from 'react-icons/io';
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu
} from '../MaterialUI';
import { login,signout } from '../../actions/auth.action';
const Header = (props) => {

  const [loginModal, setLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const userlogin = () => {
    dispatch(login({ email, password }))
  }

  useEffect(() => {
    if(auth.authenticate){
    setLoginModal(false)
    }
  }, [auth.authenticate])


 const logout = () =>{
   dispatch(signout());
 }





  const renderLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <a className="fullName">
            {auth.user.fullName}
            <IoIosArrowDown />
          </a>
          
        }
        menus={[
          { label: 'My Profile', href: '', icon: null },
          { label: 'Orders', href: '/account/orders', icon: null },
          { label: 'Wishlist', href: '', icon: null },
          { label: 'Logout', href: '', icon: null,onClick:logout }
        ]}
        
      />
    )
  }
  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <a className="loginButton" onClick={() => setLoginModal(true)}>
            {/* <IoIosArrowDown /> */}
            Login
          </a>
        }
        menus={[
          { label: 'My Profile', href: '', icon: null },
          { label: 'Flipkart Plus Zone', href: '', icon: null },
          {
            label: "Orders",
            href: `/account/orders`,
            icon: null,
            onClick: () => {
              !auth.authenticate && setLoginModal(true);
            },
          },
          { label: 'Wishlist', href: '', icon: null },
          { label: 'Rewards', href: '', icon: null },
          { label: 'Gift Cards', href: '', icon: null },
        ]}
        firstMenu={
          <div className="firstmenu">
            <span>New Customer?</span>
            <a style={{ color: '#2874f0' }}>Sign Up</a>
          </div>
        }
      />
    )
  }

  return (
    <div className="header">
      <Modal
        visible={loginModal}
        onClose={() => setLoginModal(false)}
      >
        <div className="authContainer">
          <div className="row">
            <div className="leftspace">
              <h2>Login</h2>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="rightspace">
              <div className="loginInputContainer">

              <MaterialInput
                  type="text"
                  label="Enter Email/Enter Mobile Number"
                  placeholder="Enter Email/Enter Mobile Number"
                  value={email}
                 
                  onChange={(e) => setEmail(e.target.value)}

                />

               

                <MaterialInput
                  type="password"
                  label="Enter Password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                // rightElement={<a href="#">Forgot?</a>}
                />
                <MaterialButton
                  title="Login"
                  bgColor="#cd6deb"
                  textColor="#ffffff"
                  style={{

                    margin: ' 20px 40px 19px 18px'
           
                  }}
                  onClick={userlogin}
                />
                <p style={{ textAlign: "center" }}>OR</p>

                

                <MaterialButton
                  title="Request OTP"
                  bgColor="#ffffff"
                  textColor="#cd6deb"
                  className="inputElemment"
                  style={{
                    margin: ' 20px 40px 19px 18px'
                  }}
                />
              </div>


            </div>
          </div>
        </div>
      </Modal>
      <div className="subHeader">
        <div className="logo">
          <a href="">
            <img src={Logo} className="logoimage" alt="" />
          </a>
          {/* <a style={{ marginTop: '-10px' }}>
            <span className="exploreText">D</span>
            <span className="plusText">Mart</span>
            <img src={goldenStar} className="goldenStar" alt="" />
          </a> */}
        </div>
        <div style={{
          padding: '0 10px'
        }}>
          <div className="searchInputContainer">
            <input
              className="searchInput"
              placeholder={'search for products, brands and more'}
            />
            <div className="searchIconContainer">
              <IoIosSearch style={{
                color: '#cd6deb'
              }} />
            </div>

          </div>
        </div>
        <div className="rightMenu">
          {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
          <DropdownMenu
            menu={
              <a className="more">
                <span>More</span>
                <IoIosArrowDown />
              </a>
            }
            menus={[
              { label: 'Notification Preference', href: '', icon: null },
              { label: 'Sell on flipkart', href: '', icon: null },
              { label: '24x7 Customer Care', href: '', icon: null },
              { label: 'Advertise', href: '', icon: null },
              { label: 'Download App', href: '', icon: null }
            ]}
          />
          <div>
            <a href={`/cart`} style={{textDecoration :"none"}} className="cart">
              <IoIosCart />
              <span style={{ margin: '0 10px' }}>Cart</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  )

}


export default Header;