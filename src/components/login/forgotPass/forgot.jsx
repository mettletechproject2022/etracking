import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export const Forgot = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailSent,setEmailSent]=useState(false);

  const checkEmail=(e)=>{
    e.preventDefault();
    if(email!=='' && setEmailError==''){
      setEmailSent(true)
      console.log("checkEmail")
    };
   

  };

  const handleEmailChange = (e) => {
    setEmailError("");
    if (e.target.value !== "") {
      //check some other condition
      const emailRegex =
        /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      if (emailRegex.test(e.target.value)) {
        setEmailError("");
        if (e.target.value === "raj@gmail.com") {
          setEmailError("");
        } else {
          setEmailError("Wrong Email");
        }
      } else {
        setEmailError("Invalid Email");
      }
    } else {
      setEmailError("Email Required");
    }

    setEmail(e.target.value);
  };

  const navigate = useNavigate();
  // const handleLogin=()=>{
  //   console.log('login clicked')
  //   navigate('/home')
  //  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("checkEmail")
    //check if email is empty

    if(email!=='' && emailError==''){
      setEmailSent(true)
    
    };
  
  };

  return (
    <div className="wrapper4">
      {/* <h3>Mettle Tech</h3><br></br> */}
      <img src={logo} className="logoo" alt="MettleTech--User/Admin" />

      <form
        className="form-group form"
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
        <div>
          <label className="mr-auto">Email</label>
        </div>
        <input
          type="text"
          className="form-control custom-input"
          placeholder="Enter your email address"
          onChange={handleEmailChange}
          value={email}
        />
        {emailError && <div className="error-msg">{emailError}</div>}
        {emailSent && <div className="success-msg"><p>Email Sent</p></div>}


        <br></br>

        <button
          type="submit"
          className="btn btn-primary btn-lg"
          style={{ width: 100 + "%" }}
         
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default Forgot;