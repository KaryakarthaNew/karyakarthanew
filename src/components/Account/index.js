import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
import { BiEdit, BiFile } from "react-icons/bi";
import { MdOutlineCall, MdOutlineMail } from "react-icons/md";
import { HiOutlineBell } from "react-icons/hi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { FaUser } from "react-icons/fa6";
// import { TiTickOutline } from "react-icons/ti";
import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import { LuCalendarDays } from "react-icons/lu";
import "react-datepicker/dist/react-datepicker.css";

import "./index.css";

const Account = () => {
  const [isEditing, setEditing] = useState(false);
  const [isNameEditing, setIsNameEDiting] = useState(false);
  const [isIdEditing, setIsIdEditig] = useState(false);
  const [isPhNoEditing, setIsPhNoEditing] = useState(false);
  const [isEmailEditing, setIsEmailEditing] = useState(false);
  const [showDatepicker, setShowDatepicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const fileInputRef = useRef(null);

  /*   const handleButtonClick = ()=>{
        fileInputRef.current.click()
    }
//    const [isExpEditing, setIsExpEditing] = useState(false)
//    const [selectedYear, setSelectedYear] = useState('')
//    const [showDropdown, setShowDropdown] = useState(false)

/*    const handleYearChange = (event) =>{
        setSelectedYear(event.target.value)
    }*/

  /*    const toggleDropdown =()=>{
        setShowDropdown(!showDropdown)
    } 

    const handleYearSelect=(year)=>{
//        setSelectedYear(year)
        setEditedDetails({
            ...editedDetails,
            'yop':year,
        })
        setShowDropdown(false)
    }

    const years = Array.from({length:10}, (_, index)=> new Date().getFullYear() - index) */

  const [editedDetails, setEditedDetails] = useState({
    name: "Kalyan Gadela",
    id: "19H115632",
    experience: "Fresher",
    educationType: "Bachelor of Technology(B.Tech/B.E)",
    collegeName: "Engineering college, Gudur",
    mobileNo: " 7893144096",
    email: "mynameis.kalyan@gmail.com",
    resume: null,
    dob: "25/12/2005",
    gender: "Male",
    nationality: "Indian",
    yop: "2023",
    skills:
      "Communication Skills Team Collaboration, Presentaion Skills, Positive Thinking, Self Motivated, Team Player",
  });

  const nationalitiess = [
    "",
    "American",
    "British",
    "Canadian",
    "Australian",
    "German",
    "French",
    "Italian",
    "Spanish",
    "Chinese",
    "Japanese",
    "Indian",
    "Brazilian",
    "Russian",
    "South African",
    "Mexican",
    "Dutch",
    "Swiss",
    "Swedish",
    "Norwegian",
    "Singaporean",
    "Argentinian",
    "Austrian",
    "Belgian",
    "Danish",
    "Finnish",
    "Greek",
    "Irish",
    "Israeli",
    "New Zealander",
    "Portuguese",
    "Turkish",
    "Polish",
    "Hungarian",
    "Czech",
    "Romanian",
    "Thai",
    "Malaysian",
    "Indonesian",
    "Filipino",
    "Vietnamese",
    "South Korean",
    "Egyptian",
    "Nigerian",
    "Kenyan",
    "Moroccan",
    "Saudi Arabian",
    "UAE",
    "Qatari",
    "Kuwaiti",
    "Omani",
    "Sri Lankan",
    "Bangladeshi",
    "Pakistani",
    "Afghan",
    "Albanian",
    "Algerian",
    "Angolan",
    "Armenian",
    "Azerbaijani",
    "Bahraini",
    "Barbadian",
    "Belarusian",
    "Beninese",
    "Bolivian",
    "Bosnian",
    "Botswanan",
    "Bulgarian",
    "Burkinabe",
    "Cambodian",
    "Cameroonian",
    "Chadian",
    "Colombian",
    "Costa Rican",
    "Croatian",
    "Cuban",
    "Cypriot",
    "Dominican",
    "Ecuadorian",
    "Estonian",
    "Ethiopian",
    "Fijian",
    "Ghanaian",
    "Guatemalan",
    "Honduran",
    "Icelandic",
    "Iranian",
    "Iraqi",
    "Jamaican",
    "Jordanian",
    "Kazakhstani",
    "Kyrgyz",
    "Latvian",
    "Lebanese",
    "Liberian",
    "Libyan",
    "Lithuanian",
    "Luxembourgish",
    "Macedonian",
    "Malagasy",
    "Malawian",
    "Malian",
    "Maltese",
    "Mauritanian",
    "Mauritian",
    "Moldovan",
    "Mongolian",
    "Mozambican",
    "Namibian",
    "Nepalese",
    "Nicaraguan",
    "Nigerien",
    "North Korean",
    "North Macedonian",
    "Norwegian",
    "Omani",
    "Palestinian",
    "Panamanian",
    "Papua New Guinean",
    "Paraguayan",
    "Peruvian",
    "Philippine",
    "Polish",
    "Romanian",
    "Russian",
    "Rwandan",
    "Salvadoran",
    "Sammarinese",
    "Samoan",
    "Senegalese",
    "Serbian",
    "Seychellois",
    "Sierra Leonean",
    "Singaporean",
    "Slovak",
    "Slovenian",
    "Solomon Islander",
    "Somali",
    "South African",
    "South Korean",
    "South Sudanese",
    "Spanish",
    "Sri Lankan",
    "Sudanese",
    "Surinamer",
    "Swazi",
    "Swedish",
    "Swiss",
    "Syrian",
    "Taiwanese",
    "Tajik",
    "Tanzanian",
    "Thai",
    "Togolese",
    "Tongan",
    "Trinidadian or Tobagonian",
    "Tunisian",
    "Turkish",
    "Tuvaluan",
    "Ugandan",
    "Ukrainian",
    "Uruguayan",
    "Uzbekistani",
    "Vanuatuan",
    "Vatican",
    "Venezuelan",
    "Vietnamese",
    "Yemeni",
    "Zambian",
    "Zimbabwean",
    "Antiguan",
    "Belizean",
    "Comoran",
    "Djiboutian",
    "Guyanese",
    "Kiribatian",
    "Maldivian",
    "Micronesian",
    "Palauan",
    "Saint Lucian",
    "Saint Vincentian",
    "Santomean",
    "Seychellois",
    "Surinamese",
    "Timorese",
    "Tuvaluan",
    "Vincentian",
  ];

  const nationalities = Array.from(new Set(nationalitiess));

  const handleNameEditClick = () => {
    setIsNameEDiting(true);
  };

  const handleIdEditClick = () => {
    setIsIdEditig(true);
  };

  const handlePhNoEditClick = () => {
    setIsPhNoEditing(true);
  };

  const handleEmailEditClick = () => {
    setIsEmailEditing(true);
  };

  const handleEditClick = () => {
    setEditing(true);
    console.log("edit is clicked");
  };

  const handleSaveClick = () => {
    setEditing(false);
    console.log("save clicked");
    setEditedDetails({
      ...editedDetails,
      name: editedDetails.name,
      id: editedDetails.id,
      experience: editedDetails.experience,
      educationType: editedDetails.educationType,
      collegeName: editedDetails.collegeName,
      mobileNo: editedDetails.mobileNo,
      email: editedDetails.email,
      dob: editedDetails.dob,
      gender: editedDetails.gender,
      nationality: editedDetails.nationality,
      yop: editedDetails.yop,
      skills: editedDetails.skills,
    });
  };

  const handelChange = (field, value) => {
    setEditedDetails({
      ...editedDetails,
      [field]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setEditedDetails({
      ...editedDetails,
      resume: file,
    });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatepicker(false);
    setEditedDetails({
      ...editedDetails,
      dob: date ? date.toLocaleDateString() : "",
    });
  };

  const toggleDatepicker = () => {
    setShowDatepicker(!showDatepicker);
  };

  const handleFileNameDisplay = () => {
    return editedDetails.resume ? (
      editedDetails.resume.name ? (
        <span style={{ fontSize: "10px" }}> {editedDetails.resume.name} </span>
      ) : (
        ""
      )
    ) : (
      <span id="resume-format">Browse Formats-Doc, Docx, Pdf</span>
    );
  };

  const handleResumeDownload = () => {
    if (editedDetails.resume) {
      const url = URL.createObjectURL(editedDetails.resume);
      const a = document.createElement("a");
      a.href = url;
      a.download = editedDetails.resume.name || "resume";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handleResumeDelete = () => {
    setEditedDetails({
      ...editedDetails,
      resume: null,
    });
  };

  return (
    <>
      <Header />
      <div className="bg-container">
        <div className="desktop-view">
          {isEditing ? (
            <h1 className="basic-details-heading">Basic Details</h1>
          ) : (
            <h1 className="heading">Account</h1>
          )}
          <div className="details-container">
            <div className="profile-edit-container">
              <FaUser className="profile-icon" />
              {isEditing ? (
                <button onClick={handleSaveClick} className="update-button">
                  Update
                </button>
              ) : (
                <button className="edit-button" onClick={handleEditClick}>
                  <BiEdit className="edit-icon" />
                </button>
              )}
            </div>
            <div className="name-resume-container">
              <div className="conts name-details-container">
                <div className="name-id-container">
                  {isNameEditing ? (
                    <input
                      className="editable-name"
                      onChange={(e) => handelChange("name", e.target.value)}
                      value={editedDetails.name}
                      type="text"
                    />
                  ) : (
                    <div className="edit-input-container">
                      <h2 className="name">{editedDetails.name}</h2>
                      {isEditing ? (
                        <button
                          className="edit-button"
                          onClick={handleNameEditClick}
                        >
                          <BiEdit className="edit" />
                        </button>
                      ) : null}
                    </div>
                  )}
                  {isIdEditing ? (
                    <div className="id-editable-container">
                      <p>ID:</p>
                      <input
                        className="editable-id"
                        onChange={(e) => handelChange("id", e.target.value)}
                        value={editedDetails.id}
                        type="text"
                      />
                    </div>
                  ) : (
                    <div className="edit-input-container id-container">
                      <p className="id">ID:{editedDetails.id}</p>
                      {isEditing && (
                        <button
                          className="edit-button"
                          onClick={handleIdEditClick}
                        >
                          <BiEdit className="edit" />
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {isEditing ? (
                  <div className="editable-container">
                    <PiSuitcaseSimpleThin className="experience-icon" />
                    <select
                      className="editable-experience"
                      onChange={(e) =>
                        handelChange("experience", e.target.value)
                      }
                      value={editedDetails.experience}
                    >
                      <option value="Fresher">Fresher</option>
                      <option value="0-1 Experience">0-1 Experience</option>
                      <option value="2-5 Experience">2-5 Experience</option>
                      <option value="Intern">Intern</option>
                    </select>
                  </div>
                ) : (
                  <div className="d-container">
                    <PiSuitcaseSimpleThin className="experience-icon" />
                    <p className="experience">{editedDetails.experience}</p>
                  </div>
                )}

                {isPhNoEditing ? (
                  <div className="editable-container">
                    <MdOutlineCall className="call-icon" />
                    <p className="+91-editable">+91</p>
                    <input
                      className="editable-mobile-no"
                      onChange={(e) => handelChange("mobileNo", e.target.value)}
                      value={editedDetails.mobileNo}
                      type="text"
                    />
                  </div>
                ) : (
                  <div className="d-container">
                    <MdOutlineCall className="call-icon" />
                    <p className="mobile-no">+91 {editedDetails.mobileNo}</p>
                    {isEditing ? (
                      <button
                        className="edit-button"
                        onClick={handlePhNoEditClick}
                      >
                        <BiEdit className="edit" />
                      </button>
                    ) : null}
                  </div>
                )}

                {isEmailEditing ? (
                  <div className="editable-container">
                    <MdOutlineMail className="email-icon" />
                    <input
                      className="editable-email"
                      onChange={(e) => handelChange("email", e.target.value)}
                      value={editedDetails.email}
                      type="text"
                    />
                  </div>
                ) : (
                  <div className="d-container">
                    <MdOutlineMail className="email-icon" />
                    <p className="mobile-no">{editedDetails.email}</p>
                    {isEditing ? (
                      <button
                        className="edit-button"
                        onClick={handleEmailEditClick}
                      >
                        <BiEdit className="edit" />
                      </button>
                    ) : null}
                  </div>
                )}
                <div className="validity-container">
                  <h2 className="your-validity">Your Validity</h2>
                  <div className="validity-input-container">
                    <div className="validity-box"></div>
                    <input type="text" className="validity-input" />
                  </div>
                  <p className="time-left">10 Days left</p>
                </div>
                <button className="subscribe-button">
                  Subscribe
                  <HiOutlineBell className="bell-icon" />
                </button>
                <p className="subscribe-des">
                  Subscribe at just{" "}
                  <span className="rupees">
                    <FaIndianRupeeSign className="rupees-icon" />9
                  </span>{" "}
                  to get all at once
                </p>
              </div>
              <div className="conts v-line"></div>
              <div className="h-line"></div>

              <div className="conts resume-details-container">
                <div className="container">
                  <h5 className="h resume">Resume</h5>
                  <div className="resume-update-btn-container">
                    <label
                      htmlFor="fileInput"
                      style={{
                        borderTopLeftRadius: "4px",
                        borderBottomLeftRadius: "4px",
                        border: "1px solid #ccc",
                        width: "70%",
                        backgroundColor: "lightgray",
                        boxSizing: "border-box",
                        cursor: "pointer",
                        height: "30px",
                      }}
                    >
                      <div className="file-icon-container">
                        <span style={{ fontSize: "8px" }}>
                          <BiFile style={{ height: "20px", width: "20px" }} />{" "}
                        </span>
                        {handleFileNameDisplay()}
                      </div>
                    </label>
                    <input
                      type="file"
                      className="file-input"
                      id="fileInput"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    <button
                      className="upload-button"
                      //  onClick={handleButtonClick}
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
                    >
                      Upload
                    </button>
                  </div>
                  <div className="download-delete-btn-container">
                    <button
                      className="download-button"
                      onClick={handleResumeDownload}
                    >
                      Download
                    </button>
                    <button
                      className="delete-button"
                      onClick={handleResumeDelete}
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <div className="container">
                  <h5 className="h education-details-heading">
                    Education Details
                  </h5>

                  <div className="education-editable-container">
                    <div>
                      <LiaGraduationCapSolid
                        className={
                          isEditing ? "editable-graduate-icon" : "graduate-icon"
                        }
                      />
                    </div>
                    <div className="education-inputs-container">
                      {isEditing ? (
                        <div className="editable-education-input-container">
                          <input
                            type="text"
                            className="ed-input"
                            placeholder="Education type"
                            onChange={(e) =>
                              handelChange("educationType", e.target.value)
                            }
                          />
                          <input
                            type="text"
                            className="ed-input"
                            placeholder="College name"
                            onChange={(e) =>
                              handelChange("collegeName", e.target.value)
                            }
                          />
                          <div className="yop-container">
                            <select
                              className="year-dropdown-input ed-input"
                              onChange={(e) =>
                                handelChange("yop", e.target.value)
                              }
                            >
                              <option value="Year of passed out">
                                Year of passed out
                              </option>
                              <option value={2024}>2024</option>
                              <option value={2023}>2023</option>
                              <option value={2022}>2022</option>
                              <option value={2021}>2021</option>
                              <option value={2020}>2020</option>
                              <option value={2019}>2019</option>
                              <option value={2018}>2018</option>
                              <option value={2017}>2017</option>
                              <option value={2016}>2016</option>
                              <option value={2015}>2015</option>
                              <option value={2014}>2014</option>
                            </select>
                          </div>
                        </div>
                      ) : (
                        <div className="education-icon-details-container">
                          <div className="yop-details-container">
                            <p className="p graduation-des">
                              {" "}
                              {editedDetails.educationType}{" "}
                            </p>
                            <p className="p graduation-des">
                              {" "}
                              {editedDetails.collegeName}{" "}
                            </p>
                            <p className="p graduation-des">
                              {" "}
                              {editedDetails.yop}{" "}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="container">
                  <h5 className="h skills-heading">Skills</h5>
                  {isEditing ? (
                    <div className="education-editable-container">
                      <input
                        className="ed-input skills-input"
                        onChange={(e) => handelChange("skills", e.target.value)}
                        placeholder="Enter your skills"
                      />
                    </div>
                  ) : (
                    <p className="p skills-des">{editedDetails.skills}</p>
                  )}
                </div>

                <div className="container">
                  <div className="personal-details-heading-edit-container">
                    <h5 className="h personal-details-heading">
                      Personal Details
                    </h5>
                  </div>
                  <div className="details">
                    <div className="personal-container">
                      <p className="p mr gender">Gender</p>
                      {isEditing ? (
                        <select
                          className="editable-gender ed-input ed"
                          value={editedDetails.gender}
                          onChange={(e) =>
                            handelChange("gender", e.target.value)
                          }
                        >
                          <option selected value=""></option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Others">Others</option>
                        </select>
                      ) : (
                        <p className="p m-of-f">{editedDetails.gender}</p>
                      )}
                    </div>
                    <div className="personal-container">
                      <p className="p mr dob">DOB</p>
                      {isEditing ? (
                        <div
                          className="date-picker-wrapper ed"
                          value={editedDetails.dob}
                        >
                          {showDatepicker && (
                            <DatePicker
                              className="datepicker"
                              selected={selectedDate}
                              onChange={(date) => handleDateChange(date)}
                              value={editedDetails.dob}
                              dateFormat="dd/MM/yyyy"
                              showMonthDropdown
                              showYearDropdown
                              dropdownMode="scroll"
                              scrollableYearDropdown
                              scrollableMonthYearDropdown
                              popperPlacement="bottom-start"
                              popperModifiers={{
                                offset: {
                                  enabled: true,
                                  offset: "0, 10", // Adjust the offset as needed
                                },
                              }}
                            />
                          )}
                          <button
                            className="calendar-button"
                            onClick={toggleDatepicker}
                          >
                            <LuCalendarDays className="calendar-icon" />
                          </button>
                        </div>
                      ) : (
                        <p className="p m-of-f">{editedDetails.dob}</p>
                      )}
                    </div>
                    <div className="personal-container">
                      <p className="p mr nationality">Nationality</p>
                      {isEditing ? (
                        <select
                          className="editable-gender ed-input ed"
                          value={editedDetails.nationality}
                          onChange={(e) =>
                            handelChange("nationality", e.target.value)
                          }
                        >
                          {nationalities.map((nationality) => (
                            <option
                              key={nationality}
                              value={nationality.toString()}
                            >
                              {nationality}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <p className="p m-of-f">{editedDetails.nationality}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <></>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
