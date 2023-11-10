import React, {useState,useEffect,useNavigate} from "react-router-dom"
import {HiArrowLongRight} from 'react-icons/hi2'
import Header from "../Header"
import './index.css'

const Welcome = () => {
    const navigate = useNavigate();

    const handleNextClick = () => {
        // Navigate to the login page when the "Next" button is clicked
        navigate('/login');
    };

    const renderWelcomeMobileView = () => {
        return(
            <div className="m-welcome-container">
                {/* <div className="top-design-vector-container">
                    <div className="top-small-vector-design">

                    </div>
                </div> */}

                <div className="logo-container">    
                    <img className="logo-image" src="https://res.cloudinary.com/dtnhhgwlo/image/upload/v1699167233/karyakartha_logo_houqn9.jpg" alt="karyakarta logo image"/> 
                </div>
                <div className="next-button-container">
                    <button className="next-button" type="button" onClick={handleNextClick}>
                        <p>Next</p> 
                        <HiArrowLongRight size={20} className="fa-arrow-icon"/>
                    </button>
                </div>
            </div>
        )
    }

    const renderWelcomeDesktopView = () => {
        return(
            <>
            <Header/>
            <div className="d-welcome-container"> 
                <div className="d-content-container">
                    <h1> Welcome to </h1>
                    <img className="desktop-logo-img" src="https://res.cloudinary.com/dtnhhgwlo/image/upload/v1699470424/karyakartha-high-resolution-logo-transparent_3_bqen3w.png" alt="desktop logo image"/>
                </div>
            </div>
            </>
        )
    }

    return(
        <div className="Welcome-container">
            {renderWelcomeMobileView()}
            {renderWelcomeDesktopView()}
        </div>
    )
}

export default Welcome;