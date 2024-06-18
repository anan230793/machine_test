import React, { useState } from "react";
import "./MachineTest/App.css";
import PersonalDetails from "./MachineTest/personalDetails";
import ContactDetails from "./MachineTest/contactDetails";
import OTPVerificationForm from "./MachineTest/OtpDetails";
import TabHeader from "./MachineTest/TabHeader";

function App() {
  const [currentTab, setCurrentTab] = useState("personal");
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    schoolName: "",
    medium: "",
    class: "",
    registeredBy: "",
    email: "",
    mobile: "",
    addressLine1: "",
    addressLine2: "",
    state: "",
  });


  const renderContent = () => {
    switch (currentTab) {
      case "personal":
        return <PersonalDetails onNext={() => setCurrentTab("contact")} formData={formData} setFormData={setFormData}/>;
      case "contact":
        return <ContactDetails onNext={() => setCurrentTab("otp")} formData={formData} setFormData={setFormData}/>;
      case "otp":
        return <OTPVerificationForm formData={formData}/>;
      default:
        return <PersonalDetails onNext={() => setCurrentTab("contact")} />;
    }
  };

  return (
    <div>
      <TabHeader currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
}

export default App;
