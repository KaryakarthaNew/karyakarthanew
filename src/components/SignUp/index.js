import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./signup.css";
import Header from "../Header";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [number, setNumber] = useState();
  const [isLoading, setLoading] = useState(false);

  const Navigate = useNavigate();

  const handleSignupForm = async (event) => {
    event.preventDefault();
    if (name !== "" && email !== "" && password !== "" && number !== "") {
      console.log("Started");
      setLoading(true);
      const apiUrl = "https://karyakartha-t18z.onrender.com/register";
      const userData = {
        UserName: name,
        Password: password,
        MobileNumber: number,
        email: email,
        uid: uuid(),
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      };
      const result = await fetch(apiUrl, options);
      console.log(result);
      const resutData = await result.json();
      console.log(resutData);
      setLoading(false);
      // alert("Signup Successfull. Please Login... :)")
      Navigate("/login");
    } else {
      alert("Please fill all mentioned Details");
    }
  };

  const onClickFullname = (event) => {
    setName(event.target.value);
  };

  const onClickEmail = (event) => {
    setEmail(event.target.value);
  };

  const onClickPassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickMobileNo = (event) => {
    setNumber(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="sign-Up-container">
        <div className="sign-up-card-container">
          <div className="top-heading-signup">
            <h4>
              <span className="span-signup">Sign Up</span> get your dream job &
              excel in career
            </h4>
          </div>
          {isLoading && <p>Loading....</p>}
          <h3 className="mobile-topheading-signup">Create Account</h3>
          <div className="signup-inputs-and-continuegoogle-container">
            <form className="signup-form-container" onSubmit={handleSignupForm}>
              <div className="sp-fullname-input-container">
                <label className="signup-lables">Full Name</label>
                <input
                  type="text"
                  className="signup-inputs"
                  value={name}
                  placeholder="enter your name..."
                  onChange={onClickFullname}
                />
              </div>
              <div className="sp-email-input-container">
                <label className="signup-lables">Email ID</label>
                <div className="signup-email-input-and-ptag">
                  <input
                    className="signup-inputs"
                    value={email}
                    type="email"
                    placeholder="enter your email id..."
                    onChange={onClickEmail}
                  />
                  <p className="signup-inputs-p-tags">
                    We'll send you job notifications
                  </p>
                </div>
              </div>
              <div className="sp-password-input-container">
                <label className="signup-lables">Password</label>
                <div className="signup-email-input-and-ptag">
                  <input
                    className="signup-inputs"
                    value={password}
                    type="password"
                    placeholder="enter your password..."
                    onChange={onClickPassword}
                  />
                  <p className="signup-inputs-p-tags">
                    Minimum 6 characters required
                  </p>
                </div>
              </div>
              <div className="sp-mobile-input-container">
                <label className="signup-lables">Mobile No</label>
                <input
                  className="signup-inputs"
                  value={number}
                  type="text"
                  placeholder="+91 Mobile Number"
                  onChange={onClickMobileNo}
                />
              </div>
              <p className="terms-text-signup">
                By Clicking Sign Up, you agree to the
                <span className="terms-and-conditions-text">
                  Terms and Conditions Policy of
                </span>
                Karyakartha
              </p>
              <button type="submit" className="sign-up-button">
                Sign Up
              </button>
            </form>
            <div className="horizontal-lines-container-sp">
              <hr className="horizontal-line-sp" />
              <span className="p-0">Or</span>
              <hr className="horizontal-line-sp" />
            </div>
            <div className="continue-with-ggl-signup-container">
              <h4 className="mt-2 mb-3 p-0 signup-continue-text">
                Continue with
              </h4>
              <button className="google-button-container-sp p-2">
                <FcGoogle size={26} className="signup-google-icon" />
                <p className="p-0 m-0 desktop-text-google">Google</p>
                <p className="p-0 m-0 mobile-text-google">
                  Continue with google
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
