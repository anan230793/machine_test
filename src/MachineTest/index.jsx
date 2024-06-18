import React, { useState } from "react";
import PersonalDetails from "./personalDetails";
import ContactDetails from "./contactDetails";
import OTPVerificationForm from "./OtpDetails";
import TabHeader from "./TabHeader";

const initialFormData = {
  firstName: "",
  middleName: "",
  lastName: "",
  dateOfBirth: "",
  gender: "",
  schoolName: "",
  medium: "",
  class: "",
  registerBy: "",
  email: "",
  mobile: "",
  addressLineOne: "",
  addressLineTwo: "",
  state: "",
};

const FormContainer = () => {
  const [currentTab, setCurrentTab] = useState("personal");
  const [token, setToken] = useState("");
  const [formData, setFormData] = useState(initialFormData);

  const renderContent = () => {
    switch (currentTab) {
      case "personal":
        return (
          <PersonalDetails
            onNext={() => setCurrentTab("contact")}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case "contact":
        return (
          <ContactDetails
            onNext={() => setCurrentTab("otp")}
            formData={formData}
            setFormData={setFormData}
            setToken={setToken}
          />
        );
      case "otp":
        return (
          <OTPVerificationForm
            formData={formData}
            token={token}
            setToken={setToken}
            onSubmit={() => {
              setFormData(initialFormData);
              setCurrentTab("personal");
            }}
          />
        );
      default:
        return (
          <PersonalDetails
            onNext={() => setCurrentTab("contact")}
            formData={formData}
            setFormData={setFormData}
          />
        );
    }
  };

  return (
    <div>
      <TabHeader
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        token={token}
      />
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default FormContainer;
