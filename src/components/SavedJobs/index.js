import React,{useState} from "react";
import Header from '../Header'
import { BsFillSaveFill } from "react-icons/bs";
import { HiMiniShare } from "react-icons/hi2";
import './index.css'


const savedJobsData = [
    {
        id:1,
        companyName:"Google",
        companyLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
        ctc:"12",
        description:"We are looking for a young trained designer to help us to create stunning websites and app",
        role:"Java Developer",
        skills:"HTML,CSS,JAVA,C++",
        dateOfApplied:"20hrs ago"
     },
     {
        id:1,
        companyName:"NetFlix",
        companyLogo:"https://cdn.vox-cdn.com/thumbor/SEEvZdiXcs0CS-YbPj2gm6AJ8qc=/0x0:3151x2048/1400x1400/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png",
        ctc:"12",
        description:"We are looking for a young trained designer to help us to create stunning websites and app",
        role:"Front-End Developer",
        skills:"HTML,CSS,JAVA,C++",
        dateOfApplied:"20hrs ago"
     },
     {
        id:1,
        companyName:"Swiggy",
        companyLogo:"https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png",
        ctc:"12",
        description:"We are looking for a young trained designer to help us to create stunning websites and app",
        role:"Junior UI/UX Designer",
        skills:"HTML,CSS,JAVA,C++",
        dateOfApplied:"20hrs ago"
     },
     {
        id:1,
        companyName:"Google",
        companyLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
        ctc:"12",
        description:"We are looking for a young trained designer to help us to create stunning websites and app",
        role:"Junior UI/UX Designer",
        skills:"HTML,CSS,JAVA,C++",
        dateOfApplied:"20hrs ago"
     },
     {
        id:1,
        companyName:"Google",
        companyLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
        ctc:"12",
        description:"We are looking for a young trained designer to help us to create stunning websites and app",
        role:"Junior UI/UX Designer",
        skills:"HTML,CSS,JAVA,C++",
        dateOfApplied:"20hrs ago"
     },
     {
        id:1,
        companyName:"FaceBook",
        companyLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png",
        ctc:"12",
        description:"We are looking for a young trained designer to help us to create stunning websites and app",
        role:"Junior UI/UX Designer",
        skills:"HTML,CSS,JAVA,C++",
        dateOfApplied:"20hrs ago"
     }
     ,{
        id:1,
        companyName:"Google",
        companyLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
        ctc:"12",
        description:"We are looking for a young trained designer to help us to create stunning websites and app",
        role:"Junior UI/UX Designer",
        skills:"HTML,CSS,JAVA,C++",
        dateOfApplied:"20hrs ago"
     }
]

const savedJobsNewData = [
    {
        id: 1,
        companyName: "Google",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
        ctc: "12",
        description: "We are looking for a young trained designer to help us create stunning websites and apps",
        role: "Java Developer",
        skills: "HTML, CSS, JAVA, C++",
        dateOfApplied: "20hrs ago"
    },
    {
        id: 2,
        companyName: "Netflix",
        companyLogo: "https://cdn.vox-cdn.com/thumbor/SEEvZdiXcs0CS-YbPj2gm6AJ8qc=/0x0:3151x2048/1400x1400/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png",
        ctc: "15",
        description: "Join our dynamic team and contribute to building the future of streaming services",
        role: "Backend Developer",
        skills: "Python, Django, AWS",
        dateOfApplied: "18hrs ago"
    },
    {
        id: 3,
        companyName: "Microsoft",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
        ctc: "14",
        description: "Exciting opportunity to work on cutting-edge technologies and shape the future of computing",
        role: "Full Stack Developer",
        skills: "JavaScript, React, Node.js, MongoDB",
        dateOfApplied: "1 day ago"
    },
    {
        id: 4,
        companyName: "Amazon",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
        ctc: "18",
        description: "Be part of a global e-commerce giant and innovate in the world of online retail",
        role: "DevOps Engineer",
        skills: "AWS, Kubernetes, Jenkins",
        dateOfApplied: "2 days ago"
    },
    {
        id: 5,
        companyName: "Apple",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/2048px-Apple_logo_black.svg.png",
        ctc: "20",
        description: "Join the innovation powerhouse and contribute to creating groundbreaking products",
        role: "iOS Developer",
        skills: "Swift, Objective-C, Xcode",
        dateOfApplied: "3 days ago"
    },
    {
        id: 6,
        companyName: "Tesla",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1200px-Tesla_logo.png",
        ctc: "25",
        description: "Shape the future of electric vehicles and sustainable energy with a dynamic team",
        role: "Embedded Systems Engineer",
        skills: "C, C++, Python",
        dateOfApplied: "4 days ago"
    },
    {
        id: 7,
        companyName: "Adobe",
        companyLogo: "https://logos-world.net/wp-content/uploads/2020/06/Adobe-Emblem.png",
        ctc: "16",
        description: "Create cutting-edge design and multimedia software with a creative and diverse team",
        role: "UI/UX Designer",
        skills: "Adobe Creative Suite, Sketch, Figma",
        dateOfApplied: "5 days ago"
    },
    {
        id: 8,
        companyName: "Uber",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Uber_App_Icon.svg/2048px-Uber_App_Icon.svg.png",
        ctc: "22",
        description: "Join the future of transportation and contribute to revolutionizing the way people move",
        role: "Machine Learning Engineer",
        skills: "Python, TensorFlow, PyTorch",
        dateOfApplied: "1 week ago"
    },
    {
        id: 9,
        companyName: "SpaceX",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/SpaceX_logo_black.svg/2048px-SpaceX_logo_black.svg.png",
        ctc: "30",
        description: "Join the space exploration journey and work on cutting-edge space technologies",
        role: "Rocket Propulsion Engineer",
        skills: "Aerospace Engineering, Propulsion Systems",
        dateOfApplied: "1 week ago"
    },
    {
        id: 10,
        companyName: "Twitter",
        companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/2048px-Twitter_bird_logo_2012.svg.png",
        ctc: "18",
        description: "Contribute to shaping social media and real-time communication with a global team",
        role: "Backend Engineer",
        skills: "Ruby on Rails, Redis, GraphQL",
        dateOfApplied: "1 week ago"
    },
    {
        id: 11,
        companyName: "Intel",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/2048px-Intel-logo.svg.png",
        ctc: "25",
        description: "Be part of the semiconductor innovation and work on advanced chip technologies",
        role: "Hardware Design Engineer",
        skills: "Verilog, SystemVerilog, ASIC Design",
        dateOfApplied: "2 weeks ago"
    },
    {
        id: 12,
        companyName: "Airbnb",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2048px-Airbnb_Logo_B%C3%A9lo.svg.png",
        ctc: "20",
        description: "Join the hospitality revolution and contribute to creating memorable travel experiences",
        role: "Front-End Developer",
        skills: "React, Vue.js, JavaScript",
        dateOfApplied: "2 weeks ago"
    },
];



const SavedJobs = () => {
    return (
        <>
            <Header/>
            <div className="saved-jobs-container">
                <h1>Saved</h1>
                <ul className="saved-jobs-ul-container">
                    {savedJobsNewData.map(each => {
                        return (<li key={each.id} className="saved-jobs-card-container">
                            <img src={each.companyLogo} alt="saved job logo image" className="saved-job-company-logo"/>
                            <div className="saved-jobcard-details-container">
                                <h3> {each.role} </h3>
                                <h5> {each.companyName} </h5>
                                <p> {each.description} </p>
                                <div className="saved-jobcard-btn-savedicon">
                                    <button type="button" className="saved-apply-button">
                                        Apply Now
                                    </button>
                                    {/* <BsFillSaveFill size={28} color="blue"/> */}
                                    <img src="https://res.cloudinary.com/dtnhhgwlo/image/upload/v1701440294/SaveiconBlue_ntaomj.png" className="save-icon-blue" />
                                </div>
                            </div>
                            <div className="saved-jobcard-shareicon-n-time">
                              <HiMiniShare size={25} />  
                              <p> {each.dateOfApplied}</p>
                            </div>
                        </li>)
                    })}

                </ul>
            </div>
        </>
    )
}

export default SavedJobs;