import React, {useState,useEffect} from "react"
import Header from "../Header"


const Login = () => {

    const renderLoginDesktop = () => {
        
    }

    return(
        <div className="Login-container">
            <Header/>
            <div className="login-content-container">
                {renderLoginDesktop()}
            </div>
        </div>
    )
}

export default Login
