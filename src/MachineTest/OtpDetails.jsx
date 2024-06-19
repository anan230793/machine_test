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
  const [timer, setTimer] = useState(180); // Timer state for 3 minutes
  const [isResendEnabled, setIsResendEnabled] = useState(false); // Resend button state

  useEffect(() => {
    if (token) {
      setTimer(180); // Reset timer to 3 minutes when token is set
      setIsResendEnabled(false); // Disable resend button when token is set
      const countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev > 1) return prev - 1;
          clearInterval(countdown);
          setIsResendEnabled(true);
          return 0;
        });
      }, 1000);
    }
  }, [token]);

  const handleOtpChange = (e) => {
    const { value } = e.target;
    setOtp(value);
  };

  const handleResendClick = () => {
    setError("");
    setIsResendEnabled(false); // Disable resend button
    setTimer(180); // Reset timer to 3 minutes

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

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
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
            <span className="">{formatTime(timer)}</span>
          </div>
          <button
            type="button"
            className="resend"
            onClick={handleResendClick}
            disabled={!isResendEnabled}
          >
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
