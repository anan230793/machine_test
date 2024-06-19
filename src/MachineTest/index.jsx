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





// import React, { useState } from 'react';
// import { Modal } from 'react-bootstrap';
// import OtpInput from 'react-otp-input';
// import { useDispatch, useSelector } from 'react-redux';
// import { Loader } from 'components/Loader/Loader';
// import { RootState } from 'redux/store';
// import ApiHandler from 'api/ApiHandler';
// import { loader } from 'redux/reducer/Loader';
// import { None, Varify } from './Login';


// const ForgotOTPModal = (props: forgotType) => {
//   const dispatch = useDispatch();
//   const [otp, setOtp] = useState('');
//   const [counter, setCounter] = React.useState(180);
//   const load = useSelector((state: RootState) => state?.loader.loader);
//   const email = props.OtpData;

//   const handleVerify = async () => {
//     dispatch(loader(true));
//     const paylaod = {
//       email: email,
//       userEnteredOtp: otp,
//     };
//     try {
//       const response = await ApiHandler.post('user/check-otp', paylaod);
//       if (response.status === 200) {
//         dispatch(loader(false));
//         setOtp('');
//         setCounter(0);
//         props.onClose(Varify);
//       } else {
//         dispatch(loader(false));
//       }
//     } catch (error) {
//       dispatch(loader(false));
//     }
//   };

//   const HandleResendOtp = async () => {
//     dispatch(loader(true));
//     const paylaod = {
//       email: email,
//     };
//     try {
//       const response = await ApiHandler.post('user/send-mail-otp', paylaod);
//       if (response.status === 200) {
//         dispatch(loader(false));
//         setCounter(180);
//       } else {
//         dispatch(loader(false));
//       }
//     } catch (error) {
//       dispatch(loader(false));
//     }
//   };

//   React.useEffect(() => {
//     if (counter === 0) {
//       setCounter(0);
//     }
//     counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
//   }, [counter]);

//   return (
//     <>
//       <Modal
//         show={props.show}
//         onHide={() => props.onClose(None)}
//         dialogClassName="modal-md"
//         backdrop="static"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title></Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="row justify-content-center">
//             <Loader open={load} />
//             <div
//               className="col-12 col-md-6 col-lg-4"
//               style={{ minWidth: '500px' }}
//             >
//               <div
//                 className="card bg-white mb-5 mt-4 border-0"
//                 style={{ boxShadow: '0 12px 15px rgba(0, 0, 0, 0.02)' }}
//               >
//                 <div className="card-body p-5 text-center">
//                   <h4>Verify</h4>
//                   <p>Your code was sent to you via email</p>
//                   <div className="otp-field mb-4">
//                     <OtpInput
//                       value={otp}
//                       onChange={setOtp}
//                       numInputs={6}
//                       renderSeparator={<span>&nbsp;</span>}
//                       renderInput={(props, index) => (
//                         <input {...props} style={{ width: '40px' }} />
//                       )}
//                     />
//                   </div>
//                   <button
//                     className="btn btn-custom mb-3"
//                     onClick={handleVerify}
//                     disabled={counter === 0}
//                   >
//                     Verify
//                   </button>
//                   {counter && counter ? (
//                     <p className="resend text-muted mb-0">
//                       Resend OTP{' '}
//                       <span style={{ color: 'red' }}>{${counter} Sec}</span>
//                     </p>
//                   ) : (
//                     <p className="resend text-muted mb-0">
//                       Didn't receive code?{' '}
//                       <a className="resend" onClick={() => HandleResendOtp()}>
//                         Request again
//                       </a>
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };

// export default ForgotOTPModal;