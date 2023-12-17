import React from "react";
import "./account.css";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";

const NewAccount = () => {
  const [isEditing, setIsediting] = useState(false);

  return (
    <>
      <Header />
      <div className="account-main-container">
        <h1>Account</h1>
        <div className="account-content-container">
          <div>
            <h1>left container</h1>
          </div>
          <hr />
          <div>
            <h1>right container</h1>
          </div>
        </div>
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
