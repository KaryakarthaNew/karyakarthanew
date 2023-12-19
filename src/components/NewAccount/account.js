import React from "react";
import "./account.css";
import Header from "../Header";
import Footer from "../Footer";
import { TbEdit } from "react-icons/tb";
import { FaSuitcase } from "react-icons/fa6";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { useState } from "react";

const NewAccount = () => {
  const [isEditing, setIsediting] = useState(false);

  const onEditAccount = () => {
    alert("Form is editing----");
  };

  return (
    <>
      <Header />
      <div className="account-main-container">
        <h1>Account</h1>
        <form className="account-content-container">
          <div className="account-profile-img-container">
            <img
              src="https://ih1.redbubble.net/image.2603884932.3624/ur,pin_large_front,square,600x600.jpg"
              className="acount-profile-image"
            />
            <button
              type="button"
              onClick={onEditAccount}
              className="account-edit-button"
            >
              <TbEdit size={25} />
            </button>
          </div>
          <div className="left-and-right-containers">
            <div className="account-left-container">
              <h1 className="name-of-the-user-heading">Kalyan Gadela</h1>
              <h3 className="user-id-heading">ID :19H1156348</h3>
              <div className="ac-left-items-container">
                <FaSuitcase className="ac-left-icons" size={25} />
                <p className="m-0">
                  <b>Fresher</b>
                </p>
              </div>
              <div className="ac-left-items-container">
                <IoCallOutline className="ac-left-icons" size={25} />
                <p className="m-0">
                  <b>+91 784682736</b>
                </p>
              </div>
              <div className="ac-left-items-container">
                <IoMailOutline className="ac-left-icons" size={25} />
                <p className="m-0">
                  <b>mymailid@gmail.com</b>
                </p>
              </div>
              <div className="your-validity-container">
                <h4 className="your-validity-heading">Your Validity</h4>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style={{ width: "10%" }}>
                    10%
                  </div>
                </div>
                <p className="days-left-para">10 Days Left</p>
              </div>
              <button className="ac-subscribe-btn">
                <p className="m-0">Subscribe</p>
                <FaBell className="ac-sub-btn-bellicon" size={15} />
              </button>
              <div className="subscribe-9-text-container">
                <p className="m-0">
                  Subscribe at just <b> ₹ 9 </b> to get all at once
                </p>
              </div>
            </div>

            {/* <hr className="ac-hr" /> */}

            <div className="account-right-container">
              <div className="ac-resume-container right-container-boxes">
                <h4>Resume</h4>
                <div className="resume-input-and-btn-container">
                  <FaFileAlt size={30} />
                  <input type="file" />
                  <button type="button" className="resume-update-button">
                    Update
                  </button>
                </div>
                <div className="resume-download-delte-container">
                  <p>Download</p>
                  <p>Delete</p>
                </div>
              </div>

              <div className="ac-education-container right-container-boxes">
                <h4>Education Details</h4>
                <div className="ac-edu-icon-and-details-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    class="bi bi-mortarboard-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
                  </svg>
                  <p className="pb-0 m-0 ml-2">
                    Bachelor of Technology-B.Tech/B.E,
                    <br /> Random Engineering College, Gudur <br />
                    2023
                  </p>
                </div>
              </div>

              <div className="ac-skills-container right-container-boxes">
                <h4>Skills</h4>
                <p>Communication skills, HTML, CSS, PPT</p>
                <p>Positive thinking, Self-motivated, Team Player</p>
              </div>

              <div className="ac-personal-details-container right-container-boxes">
                <h4>Personal Details</h4>
                <div className="ac-personal-items-container">
                  <div className="ac-personal-items pb-0 m-0">
                    <p className="pb-0 m-0" width="10">
                      Gender
                    </p>
                    <p className="pb-0 m-0">Male</p>
                  </div>
                  <div className="ac-personal-items pb-0 m-0">
                    <p className="pb-0 m-0" width="20">
                      DOB
                    </p>
                    <p className="pb-0 m-0 pl-5">28-10-2001</p>
                  </div>
                  <div className="ac-personal-items ">
                    <p width="10" className="pb-0 m-0">
                      Nationality
                    </p>
                    <p className="pb-0 m-0">Indian</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default NewAccount;

// import React, { useState } from "react";

// const AccountForm = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     mobileNumber: "",
//     email: "",
//     profilePhoto: "",
//     resume: "",
//     location: "",
//     education: "",
//     skills: "",
//     personalDetails: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add logic to handle form submission, e.g., sending data to the server
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username:</label>
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Mobile Number:</label>
//         <input
//           type="text"
//           name="mobileNumber"
//           value={formData.mobileNumber}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Email ID:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Profile Photo URL:</label>
//         <input
//           type="text"
//           name="profilePhoto"
//           value={formData.profilePhoto}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Resume Uploader:</label>
//         <input
//           type="file"
//           accept=".pdf,.doc,.docx"
//           name="resume"
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Location:</label>
//         <input
//           type="text"
//           name="location"
//           value={formData.location}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Education:</label>
//         <input
//           type="text"
//           name="education"
//           value={formData.education}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Skills:</label>
//         <input
//           type="text"
//           name="skills"
//           value={formData.skills}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Personal Details:</label>
//         <textarea
//           name="personalDetails"
//           value={formData.personalDetails}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Update</button>
//     </form>
//   );
// };

// export default AccountForm;
