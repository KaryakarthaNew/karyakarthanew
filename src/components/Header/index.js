import React, {useState,useEffect} from "react"
import { useNavigate } from 'react-router-dom';
import {RiMenu3Fill} from "react-icons/ri"
import {FcGoogle} from 'react-icons/fc'
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import './index.css';

const Header = ({ isLoggedIn }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleCreateAccount = () => {
    navigate('/signup');
  };

  const headerDesktopView = () => {
    return(
      <>
      <div className="header-desktop">
        <div className="logo">
          <img src="https://res.cloudinary.com/dtnhhgwlo/image/upload/v1699167233/karyakartha_logo_houqn9.jpg" alt="LOGO OF KARYAKARTA" className='logo_image'/>
        </div>
      {!isLoggedIn ? (
        <div className="login-text">
          Already Registered? <button onClick={handleLoginClick}> Login </button>  here
        </div>
      ) : null}
      </div>
      {isPopupOpen && (
          <Popup
            open
            modal
            closeOnDocumentClick={false}
            closeOnEscape
          >
            <div className="popup-overlay">
            <div className="popup-content">
              <div className="pop-up-close-container">
                <button className="close" onClick={handleClosePopup}>
                  &times;
                </button>
              </div>
              <div className="popup-form-container">
                <button type="button" onClick={handleLogin} className="popup-login-button">
                  Login
                </button>
                <button type="button" onClick={handleCreateAccount} className="popup-create-account-btn">
                  Create Account
                </button>
                <div className="or-container">
                  <hr className="horizontal-line"/>
                  <span>Or</span>
                  <hr className="horizontal-line"/>
                </div>
                <div className="continue-container">
                  <h4>Continue with</h4>
                  <button className="google-button-container">
                    <FcGoogle size={26}/>
                    <p>Google</p>
                  </button>
                </div>
              </div>
            </div>
            </div> 
          </Popup>
        )}
      </>
    )
  }

  const headerMobileView = () => {
    return(
      <div className="header-mobile">
        <div className="logo">
          <img src="https://res.cloudinary.com/dtnhhgwlo/image/upload/v1699167233/karyakartha_logo_houqn9.jpg" alt="LOGO OF KARYAKARTA" className='logo_image'/>
        </div> 
        <div>
          <RiMenu3Fill className='RiMenu3Fill'/>
        </div>
      </div>
    )
  }

  return ( 
    <>
      {headerDesktopView()}
      {headerMobileView()}
    </>
  );
};

export default Header;