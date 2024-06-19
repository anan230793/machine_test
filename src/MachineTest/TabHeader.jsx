import React from "react";
import { FaUser, FaPhone, FaUserCheck } from "react-icons/fa";
import "./App.css";
import header from "./header.png";

const TabHeader = ({ currentTab, setCurrentTab, token }) => {
  const handleOtpClick = () => {
    if (token) {
      setCurrentTab("otp");
    } else {
      alert("Fill Form Fields to proceed with OTP verification.");
    }
  };

  return (
    <>
      <header className="fixed-top">
        <img src={header} className="header-image" alt="Header" />
      </header>
      <div>
        <div className="tab-header">
          <button
            className={currentTab === "personal" ? "active" : ""}
            onClick={() => setCurrentTab("personal")}
          >
            <FaUser />
            <span>Personal Details</span>
          </button>
          <button
            className={currentTab === "contact" ? "active" : ""}
            onClick={() => setCurrentTab("contact")}
          >
            <FaPhone />
            <span>Contact Details</span>
          </button>
          <button
            className={currentTab === "otp" ? "active" : ""}
            onClick={handleOtpClick}
          >
            <FaUserCheck />
            <span>OTP Verification</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default TabHeader;
