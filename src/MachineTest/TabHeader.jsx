import React from "react";
import { FaUser, FaPhone, FaUserCheck } from "react-icons/fa";
import "./App.css";
import header from './header.png';

const TabHeader = ({ currentTab, setCurrentTab }) => {

  return (
    <>
      <header className="fixed-top">
        <img src={header} style={{ height: "300px", width: "100%" }} />
      </header>
      <div>
        <div className="tab-header">
          <button
            className={currentTab === "personal" ? "active" : ""}
            onClick={() => setCurrentTab("personal")}
          >
            <FaUser /> Personal Details
          </button>
          <button
            className={currentTab === "contact" ? "active" : ""}
            onClick={() => setCurrentTab("contact")}
          >
            <FaPhone /> Contact Details
          </button>
          <button
            className={currentTab === "otp" ? "active" : ""}
            onClick={() => setCurrentTab("otp")}
          >
            <FaUserCheck /> OTP Verification
          </button>
        </div>
      </div>
    </>
  );
};

export default TabHeader;
