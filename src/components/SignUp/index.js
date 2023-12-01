import React,{useState} from "react";
import './signup.css'
import Header from "../Header";
import {FcGoogle} from 'react-icons/fc'


const SignUp = () => {
    return(
        <>
            <Header/>
            <div className="sign-up-container">
                <div className="top-heading-signup">
                    <h4><span className="span-signup">Sign Up</span> get your dream job & excel in career</h4>
                </div>
                <h3 className="mobile-topheading-signup">Create Account</h3>
                <div className="signup-inputs-and-continuegoogle-container">
                    <div className="signup-form-container">
                        <div className="sp-fullname-input-container">
                            <label>Full Name</label>
                            <input type="text" placeholder="enter your name..."  />
                        </div>
                    </div>
                    <div className="horizontal-lines-container-sp">
                        <hr className="horizontal-line"/>
                        <span className="p-0">Or</span>
                        <hr className="horizontal-line"/>
                    </div>
                    <div className="continue-with-ggl-signup-container">
                        <h4 className="mt-2 mb-3 p-0 signup-continue-text">Continue with</h4>
                        <button className="google-button-container p-2">
                          <FcGoogle size={26}/>
                          <p className="p-0 m-0 google-para">Google</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;