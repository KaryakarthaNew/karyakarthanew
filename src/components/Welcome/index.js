import React from "react";
import "./welcome.css"
import Header from "../Header";


const Welcome = () => {

    return(
        <>
            <Header />
            <div className="d-welcome-container">
                <div className="top-image-container">
                    <img className="top-image" src="https://res.cloudinary.com/dtnhhgwlo/image/upload/v1699466062/welcome-big-vector_gnfpjw.png" alt="desktop logo image"/>
                </div>
                <div className="d-content-container">
                    <h1> Welcome to </h1>
                    <img className="desktop-logo-img" src="https://res.cloudinary.com/dtnhhgwlo/image/upload/v1699470424/karyakartha-high-resolution-logo-transparent_3_bqen3w.png" alt="desktop logo image"/>
                </div>
                <div className="bottom-image-container">
                    <img className="top-image" src="https://res.cloudinary.com/dtnhhgwlo/image/upload/v1699466062/welcome-big-vector_gnfpjw.png" alt="desktop logo image"/>
                </div>
            </div>
        </>
    )
}

export default Welcome;