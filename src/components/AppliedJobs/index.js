// NANDHINI DONE THIS PAGE

import React from "react";
import "./applied.css";
import Header from "../Header";

import { HiMiniShare } from "react-icons/hi2";
const Save =
  "https://res.cloudinary.com/dtnhhgwlo/image/upload/v1701440294/SaveiconBlue_ntaomj.png";
const Save2 =
  "https://res.cloudinary.com/dtnhhgwlo/image/upload/v1701440294/SaveiconBlue_ntaomj.png";

const Google =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png";
const Twitter =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png";
const Amazon =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png";
const LinkedIn =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png";

const Applied = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="container">
          <div className="Title-text">
            <h1 className="TitleText">Applied Jobs</h1>
          </div>
          <div className="Content">
            <div className="Card">
              <div className="Acc">
                <h3>Accepted</h3>
              </div>
              <div className="Logo-img">
                <img src={Google} width={70} />
              </div>
              <div className="card_content">
                <div className="jobdetails">
                  <h3>Senior UI Designer</h3>
                  <h4 className="CompanyName">Google</h4>
                  <p className="JobRole">
                    We are looking for a young trained designer to help us to
                    create stunning websites and apps
                  </p>
                  <div className="buttons">
                    <button>Fresher</button>
                    <button>Full-Time</button>
                    <button>Remote</button>
                    <button className="Salary">4 - 5 LPA</button>
                  </div>
                  <div className="Date">
                    <h3>Applied at 12 Nov 2023</h3>
                  </div>
                </div>
                <div className="Right_Content">
                  <div className="Icons">
                    <img src={Save} width={50} />
                    <HiMiniShare size={50} />
                  </div>
                  <div className="Time">
                    <h3 className="Time">20hrs ago</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="Card">
              <div className="Acc">
                <h3>Accepted</h3>
              </div>
              <div className="Logo-img">
                <img src={Twitter} width={300} />
              </div>
              <div className="card_content">
                <div className="jobdetails">
                  <h3>UI/UX Designer</h3>
                  <h4 className="CompanyName">Twitter</h4>
                  <p className="JobRole">
                    We are looking for a young trained designer to help us to
                    create stunning websites and apps
                  </p>
                  <div className="buttons">
                    <button>Fresher</button>
                    <button>Full-time</button>
                    <button>Onsite</button>
                    <button className="Salary">3 - 4 LPA</button>
                  </div>
                  <div className="Date">
                    <h3>Applied at 20 Nov 2023</h3>
                  </div>
                </div>
                <div className="Right_Content">
                  <div className="Icons">
                    <img src={Save} width={50} />
                    <HiMiniShare size={50} />
                  </div>
                  <div className="Time">
                    <h3 className="Time">4 Days Ago</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="Card">
              <div className="Pen">
                <h3>Pending</h3>
              </div>
              <div className="Logo-img">
                <img src={Amazon} width={300} />
              </div>
              <div className="card_content">
                <div className="jobdetails">
                  <h3>Junior UI/UX Desiner</h3>
                  <h4 className="CompanyName">Amazon</h4>
                  <p className="JobRole">
                    We are looking for a young trained designer to help us to
                    create stunning websites and apps
                  </p>
                  <div className="buttons">
                    <button>Fresher</button>
                    <button>Internship</button>
                    <button>Remote</button>
                    <button className="Salary"> 5 LPA</button>
                  </div>
                  <div className="Date">
                    <h3>Applied at 17 Oct 2023</h3>
                  </div>
                </div>
                <div className="Right_Content">
                  <div className="Icons">
                    <img src={Save2} width={30} height={38} />
                    <HiMiniShare size={50} />
                  </div>
                  <div className="Time">
                    <h3 className="Time">20hrs ago</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="Card">
              <div className="Rej">
                <h3>Rejected</h3>
              </div>
              <div className="Logo-img">
                <img src={LinkedIn} width={220} />
              </div>
              <div className="card_content">
                <div className="jobdetails">
                  <h3>UI Developer</h3>
                  <h4 className="CompanyName">Linkedin</h4>
                  <p className="JobRole">
                    We are looking for a young trained designer to help us to
                    create stunning websites and apps
                  </p>
                  <div className="buttons">
                    <button>Fresher</button>
                    <button>Full-Time</button>
                    <button>Onsite</button>
                    <button className="Salary"> 4 LPA</button>
                  </div>
                  <div className="Date">
                    <h3>Applied at 17 Oct 2023</h3>
                  </div>
                </div>
                <div className="Right_Content">
                  <div className="Icons">
                    <img src={Save} width={50} height={50} />
                    <HiMiniShare size={50} />
                  </div>
                  <div className="Time">
                    <h3 className="Time">18hrs ago</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Applied;
