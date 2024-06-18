import React, { useState } from "react";
import "./MachineTest/App.css";
import PersonalDetails from "./MachineTest/personalDetails";
import ContactDetails from "./MachineTest/contactDetails";
import OTPVerificationForm from "./MachineTest/OtpDetails";
import TabHeader from "./MachineTest/TabHeader";

function App() {
  const [currentTab, setCurrentTab] = useState("personal");

  const renderContent = () => {
    switch (currentTab) {
      case "personal":
        return <PersonalDetails onNext={() => setCurrentTab("contact")} />;
      case "contact":
        return <ContactDetails onNext={() => setCurrentTab("otp")} />;
      case "otp":
        return <OTPVerificationForm />;
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
