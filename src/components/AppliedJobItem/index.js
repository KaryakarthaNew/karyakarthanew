import React, { Component } from "react";
import "./appliedjobitem.css";

class CreateJobCard extends Component {
  render() {
    const { jobFullDetails } = this.props;
    const {
      id,
      role,
      companyName,
      companyLogo,
      description,
      salary,
      appliedDate,
      jobType,
    } = jobFullDetails;

    console.log(
      id,
      role,
      companyName,
      companyLogo,
      description,
      salary,
      appliedDate,
      jobType
    );
    return (
      <li className="job-card">
        <div className="status-container">
          <p className="status-text">Accept</p>
        </div>
        <img src={companyLogo} alt="logo" className="logo-image" />
        <div className="content-container">
          <div className="company-role-name-save-share-container">
            <div className="share-option-container">
              <h3 className="role-para pb-2">{role}</h3>
              <h5 className="companyname-para pb-2">{companyName}</h5>
            </div>
            <div className="share-options-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-bookmark"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-share"
                viewBox="0 0 16 16"
              >
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
              </svg>
            </div>
          </div>
          <div className="comapny-description-type-of-joblpa-container">
            <p className="description-para">{description}</p>
            <div className="job-type-and-lpa">
              <p className="jobType-para mt-2">{jobType}</p>
              <p className="lpa-para mt-2">{salary} LPA</p>
            </div>
          </div>
          <div className="applied-date-hours">
            <p className="appliedDate-para">Applied at {appliedDate}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default CreateJobCard;
