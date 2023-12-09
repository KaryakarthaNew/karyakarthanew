import React from "react";
import "./index.css";
import Header from "../Header";
import Footer from "../Footer";
import { FaCircle } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";

const isActiveImage =
  "https://res.cloudinary.com/dgupqp35x/image/upload/v1701572841/m9btenwp6kzvianlkfxz.png";

const saveddataArray = [
  {
    id: 1,
    companyName: "Google",
    companyLogo:
      "https://res.cloudinary.com/dgupqp35x/image/upload/v1701759062/rmidnv4em2aaobzx2nqs.png",
    ctc: "12",
    description:
      "We are looking for a young trained designer to help us create stunning websites and apps",
    role: "Java Developer",
    skills: "HTML, CSS, JAVA, C++",
    dateOfApplied: "20hrs ago",
    isActive: true,
    status: "Your resume shortlisted",
  },
  {
    id: 2,
    companyName: "Netflix",
    companyLogo:
      "https://cdn.vox-cdn.com/thumbor/SEEvZdiXcs0CS-YbPj2gm6AJ8qc=/0x0:3151x2048/1400x1400/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png",
    ctc: "15",
    description:
      "Join our dynamic team and contribute to building the future of streaming services",
    role: "Backend Developer",
    skills: "Python, Django, AWS",
    dateOfApplied: "18hrs ago",
    isActive: false,
    status: "new jobs are spotted check once",
  },
  {
    id: 3,
    companyName: "Microsoft",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    ctc: "14 LPA",
    description:
      "Exciting opportunity to work on cutting-edge technologies and shape the future of computing",
    role: "Full Stack Developer",
    skills: "JavaScript, React, Node.js, MongoDB",
    dateOfApplied: "1 day ago",
    isActive: true,
    status: "Your application is accepted",
  },
  {
    id: 4,
    companyName: "Amazon",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
    ctc: "18",
    description:
      "Be part of a global e-commerce giant and innovate in the world of online retail",
    role: "DevOps Engineer",
    skills: "AWS, Kubernetes, Jenkins",
    dateOfApplied: "2 days ago",
    isActive: true,
    status: "Several  internships are spotted check once",
  },
  {
    id: 5,
    companyName: "Apple",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/2048px-Apple_logo_black.svg.png",
    ctc: "20",
    description:
      "Join the innovation powerhouse and contribute to creating groundbreaking products",
    role: "iOS Developer",
    skills: "Swift, Objective-C, Xcode",
    dateOfApplied: "3 days ago",
    isActive: false,
    status: "Check more related jobs",
  },
  {
    id: 6,
    companyName: "Tesla",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1200px-Tesla_logo.png",
    ctc: "25",
    description:
      "Shape the future of electric vehicles and sustainable energy with a dynamic team",
    role: "Embedded Systems Engineer",
    skills: "C, C++, Python",
    dateOfApplied: "4 days ago",
    isActive: true,
    status: "More related jobs are available",
  },
  {
    id: 7,
    companyName: "Adobe",
    companyLogo:
      "https://logos-world.net/wp-content/uploads/2020/06/Adobe-Emblem.png",
    ctc: "16",
    description:
      "Create cutting-edge design and multimedia software with a creative and diverse team",
    role: "UI/UX Designer",
    skills: "Adobe Creative Suite, Sketch, Figma",
    dateOfApplied: "5 days ago",
    isActive: false,
    status: "",
  },
  {
    id: 8,
    companyName: "Uber",
    companyLogo:
      "https://res.cloudinary.com/dgupqp35x/image/upload/v1701759186/jcstywqr6mm4bwl9oabh.png",
    ctc: "22",
    description:
      "Join the future of transportation and contribute to revolutionizing the way people move",
    role: "Machine Learning Engineer",
    skills: "Python, TensorFlow, PyTorch",
    dateOfApplied: "1 week ago",
    isActive: false,
    status: "",
  },
  {
    id: 9,
    companyName: "SpaceX",
    companyLogo:
      "https://res.cloudinary.com/dgupqp35x/image/upload/v1701759487/ypa1pihmhi4fuucj0dab.png",
    ctc: "30",
    description:
      "Join the space exploration journey and work on cutting-edge space technologies",
    role: "Rocket Propulsion Engineer",
    skills: "Aerospace Engineering, Propulsion Systems",
    dateOfApplied: "1 week ago",
    isActive: true,
    status: "",
  },
  {
    id: 10,
    companyName: "Twitter",
    companyLogo:
      "https://res.cloudinary.com/dgupqp35x/image/upload/v1701759656/hbeuvl1vhyhrmbhioy76.png",
    ctc: "18",
    description:
      "Contribute to shaping social media and real-time communication with a global team",
    role: "Backend Engineer",
    skills: "Ruby on Rails, Redis, GraphQL",
    dateOfApplied: "1 week ago",
    isActive: false,
    status: "",
  },
  {
    id: 11,
    companyName: "Intel",
    companyLogo:
      "https://res.cloudinary.com/dgupqp35x/image/upload/v1701759765/k4psecdjiinlcxkmgg7t.png",
    ctc: "25",
    description:
      "Be part of the semiconductor innovation and work on advanced chip technologies",
    role: "Hardware Design Engineer",
    skills: "Verilog, SystemVerilog, ASIC Design",
    dateOfApplied: "2 weeks ago",
    isActive: false,
    status: "",
  },
  {
    id: 12,
    companyName: "Airbnb",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2048px-Airbnb_Logo_B%C3%A9lo.svg.png",
    ctc: "20",
    description:
      "Join the hospitality revolution and contribute to creating memorable travel experiences",
    role: "Front-End Developer",
    skills: "React, Vue.js, JavaScript",
    dateOfApplied: "2 weeks ago",
    isActive: true,
    status: "",
  },
];

const Notifications = () => {
  return (
    <>
      <Header />
      <div className="notifications-container">
        <h1 className="notifications-heading"> Notifications </h1>
        <ul className="notifications-ul-container">
          {saveddataArray.map((eachItem) => (
            <li className="notifications-card" key={eachItem.id}>
              <div className="notifi-logo-container">
                <img
                  src={eachItem.companyLogo}
                  className="notifi-company-logo"
                  alt={eachItem.companyName}
                />
              </div>
              <div className="noti-card-content-container">
                <div className="role-status-container">
                  <h1> {eachItem.role} </h1>
                  <p>{eachItem.status}</p>
                </div>
                <p className="notifications-companyName">
                  {eachItem.companyName}
                </p>
                <p className="jobPost-description">{eachItem.description}</p>
              </div>
              <div className="activeStatusContainer">
                {eachItem.isActive ? (
                  <FaCircle size={15} color="blue" />
                ) : (
                  <FaCircle size={15} color="white" />
                )}
                <p>{eachItem.dateOfApplied}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Notifications;
