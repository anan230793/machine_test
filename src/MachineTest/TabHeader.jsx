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
        <img
          src={header}
          style={{ height: "300px", width: "100%" }}
          alt="Header"
        />
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
            onClick={handleOtpClick}
          >
            <FaUserCheck /> OTP Verification
          </button>
        </div>
      </div>
    </>
  );
};

export default TabHeader;
