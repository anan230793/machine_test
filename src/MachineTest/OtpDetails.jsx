import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function hideMobileNumber(mobile) {
  if (!mobile) return "";
  return mobile.slice(0, 2) + "XXXXXX" + mobile.slice(-2);
}

function hideEmail(email) {
  if (!email) return "";
  const [user, domain] = email.split("@");
  const hideUser = user.slice(0, 3) + "X".repeat(Math.max(user.length - 3, 0));
  return hideUser + "@" + domain;
}

function OTPVerificationForm({ formData, token, onSubmit, setToken }) {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleOtpChange = (e) => {
    const { value } = e.target;
    setOtp(value);
  };

  const handleResendClick = () => {
    setError("");

    axios
      .post("http://learnachieveapi.dollopinfotech.com/user/register", formData)
      .then((response) => {
        console.log("Form data submitted:", response.data);
        setToken(response.data.token);
      })
      .catch((error) => {
        console.error("Error submitting form data:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setError("OTP must be 6 digits");
      return;
    }

    axios
      .post(
        "http://learnachieveapi.dollopinfotech.com/user/verify-otp-registration",
        { otp },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("OTP verified:", response.data);
        onSubmit();
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);
        setError("Invalid OTP");
      });
  };

  return (
    <main className="container-fluid overflow-scroll">
      <div className="form-container">
        <h2>OTP Verification</h2>
        <p>
          A One-Time Password has been sent to{" "}
          {hideMobileNumber(formData?.mobile)} and {hideEmail(formData?.email)}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="otp-inputs">
              <input
                type="text"
                maxLength="6"
                className="otp-input"
                value={otp}
                onChange={handleOtpChange}
                required
              />
            </div>
          </div>
          {error && (
            <div className="error-message" style={{ color: "red" }}>
              {error}
            </div>
          )}
          <div className="form-row mt-0">
            <span className="">03:00</span>
          </div>
          <button type="button" className="resend" onClick={handleResendClick}>
            Resend OTP
          </button>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default OTPVerificationForm;
