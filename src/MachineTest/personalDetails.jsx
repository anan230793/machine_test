import React, { useState } from "react";
import "./App.css";

function PersonalDetails({ onNext, formData, setFormData }) {
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    } else if (!/^[A-Z][a-z]+$/.test(formData.firstName)) {
      newErrors.firstName =
        "First name must start with a capital letter and contain only letters";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    } else if (!/^[A-Z][a-z]+$/.test(formData.lastName)) {
      newErrors.lastName =
        "Last name must start with a capital letter and contain only letters";
      isValid = false;
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
      isValid = false;
    } else {
      const today = new Date();
      const dob = new Date(formData.dateOfBirth);
      if (dob >= today) {
        newErrors.dateOfBirth = "Date of birth must be before today";
        isValid = false;
      }
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
      isValid = false;
    }

    if (!formData.schoolName.trim()) {
      newErrors.schoolName = "School name is required";
      isValid = false;
    }

    if (!formData.medium) {
      newErrors.medium = "Medium is required";
      isValid = false;
    }

    if (!formData.class) {
      newErrors.class = "Class is required";
      isValid = false;
    }

    if (!formData.registerBy) {
      newErrors.registerBy = "Registered by is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      onNext();
    }
  };

  return (
    <>
      <main className="container-fluid overflow-scroll">
        <div className="form-container">
          <h2>Personal Details</h2>
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                {errors.firstName && (
                  <div className="error-message" style={{ color: "red" }}>
                    {errors.firstName}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label>Middle Name</label>
                <input
                  type="text"
                  name="middleName"
                  placeholder="Enter your middle name"
                  value={formData.middleName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
                {errors.lastName && (
                  <div className="error-message" style={{ color: "red" }}>
                    {errors.lastName}
                  </div>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Date Of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  placeholder="Enter your DOB"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                />
                {errors.dateOfBirth && (
                  <div className="error-message">{errors.dateOfBirth}</div>
                )}
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && (
                  <div className="error-message">{errors.gender}</div>
                )}
              </div>
              <div className="form-group">
                <label>School Name</label>
                <input
                  type="text"
                  name="schoolName"
                  placeholder="Enter your School Name"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  required
                />
                {errors.schoolName && (
                  <div className="error-message">{errors.schoolName}</div>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Medium</label>
                <select
                  name="medium"
                  value={formData.medium}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Medium</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </select>
                {errors.medium && (
                  <div className="error-message">{errors.medium}</div>
                )}
              </div>
              <div className="form-group">
                <label>Class</label>
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Class</option>
                  <option value="10">10</option>
                </select>
                {errors.class && (
                  <div className="error-message">{errors.class}</div>
                )}
              </div>
              <div className="form-group">
                <label>Register By</label>
                <select
                  name="registerBy"
                  value={formData.registerBy}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Register By</option>
                  <option value="Student">Student</option>
                  <option value="Faculty">Faculty</option>
                </select>
                {errors.registerBy && (
                  <div className="error-message">{errors.registerBy}</div>
                )}
              </div>
            </div>
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default PersonalDetails;
