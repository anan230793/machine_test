import React, { useState, useEffect } from "react";
import axios from "axios";

function ContactDetails({ onNext, formData, setFormData, setToken }) {
  const [errors, setErrors] = useState({});
  const [states, setStates] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStateChange = (e) => {
    const { value } = e.target;
    const selectedState = states.find((state) => state._id === value);
    setFormData((prevData) => ({
      ...prevData,
      state: selectedState ? selectedState._id : "",
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email";
      isValid = false;
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
      isValid = false;
    } else if (formData.mobile.length > 10) {
      newErrors.mobile = "Mobile number should not be more than 10 digits";
      isValid = false;
    } else if (!/^[0-9]+$/.test(formData.mobile)) {
      newErrors.mobile = "Invalid mobile number";
      isValid = false;
    }

    if (!formData.addressLineOne.trim()) {
      newErrors.addressLineOne = "Address line 1 is required";
      isValid = false;
    }

    if (!formData.state) {
      newErrors.state = "State is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  useEffect(() => {
    axios
      .get("http://learnachieveapi.dollopinfotech.com/state/all")
      .then((response) => {
        setStates(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleNext = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post(
          "http://learnachieveapi.dollopinfotech.com/user/register",
          formData
        )
        .then((response) => {
          console.log("Form data submitted:", response.data);
          setToken(response.data.token);
          onNext();
        })
        .catch((error) => {
          console.error("Error submitting form data:", error);
        });
    }
  };

  return (
    <main className="container-fluid overflow-scroll">
      <div className="form-container">
        <h2>Contact Details</h2>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email id"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && (
                <div className="error-message" style={{ color: "red" }}>
                  {errors.email}
                </div>
              )}
            </div>
            <div className="form-group">
              <label>Mobile</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter your mobile no"
                value={formData.mobile}
                onChange={handleInputChange}
                required
              />
              {errors.mobile && (
                <div className="error-message" style={{ color: "red" }}>
                  {errors.mobile}
                </div>
              )}
            </div>
            <div className="form-group">
              <label>Address Line-1</label>
              <input
                type="text"
                name="addressLineOne"
                placeholder="Enter your address"
                value={formData.addressLineOne}
                onChange={handleInputChange}
                required
              />
              {errors.addressLineOne && (
                <div className="error-message" style={{ color: "red" }}>
                  {errors.addressLineOne}
                </div>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Address Line-2</label>
              <input
                type="text"
                name="addressLineTwo"
                placeholder="Enter your address"
                value={formData.addressLineTwo}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleStateChange}
                required
              >
                <option value="">Select state</option>
                {states.map((state) => (
                  <option key={state._id} value={state._id}>
                    {state.name}
                  </option>
                ))}
              </select>
              {errors.state && (
                <div className="error-message" style={{ color: "red" }}>
                  {errors.state}
                </div>
              )}
            </div>
          </div>
          <div className="terms">
            <input type="checkbox" required />
            <label>I agree to these Terms and Conditions.</label>
          </div>
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        </form>
      </div>
    </main>
  );
}

export default ContactDetails;
