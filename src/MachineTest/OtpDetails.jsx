import React from 'react';
import './App.css';

function OTPVerificationForm() {

  return (
    <main className="container-fluid overflow-scroll">
      <div className="form-container">
        <h2>OTP Verification</h2>
        <p>A One-Time Password has been sent to XXXXXXXX93 and leoXXXXXXXXXX@gmail.com</p>
        <form>
          <div className="form-row">
            <div className="otp-inputs">
              <input type="text" maxLength="6" className="otp-input" />
            </div>
          </div>
          <div className="form-row">
            <span className="timer">02:54</span>
            <span className="resend">Resend OTP</span>
          </div>
          <button type="button" className="submit-button">Submit</button>
        </form>
      </div>
    </main>
  );
}

export default OTPVerificationForm;
