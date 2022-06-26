import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [cpassword, setcPassword] = useState("");
  const [cpasswordError, setcPasswordError] = useState("");

  const handlePasswordChange = (e) => {
    setPasswordError("");

    if (e.target.value !== "") {
      const passwordRegex =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
      if (passwordRegex.test(e.target.value)) {
        setPasswordError("");
      } else {
        setPasswordError(
          "Password must be between 8 to 16 and must in one upper case,one lower case,one special charecter,one numerical"
        );
      }
    } else {
      setPasswordError("Passsword Required");
    }
    setPassword(e.target.value);
  };

  const handleCPasswordChange = (e) => {
    setcPasswordError("");

 
    if (e.target.value !== "") {
      setcPasswordError("");
      if (password === e.target.value) {
        setcPasswordError("");
      } else {
        setcPasswordError("Password Mismatched");
      }
    } else {
      setcPasswordError("Confirm Passsword Required");
    }
    setcPassword(e.target.value);
  };

  const navigate = useNavigate();
  // const handleLogin=()=>{
  //   console.log('login clicked')
  //   navigate('/home')
  //  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(password!==''&& cpasswordError==''){
      alert(' Reset Password succesfully');
          navigate('/')
    }

    //check if password is empty
  };

  return (
    <div className="wrapper3">
      {/* <h3>Mettle Tech</h3><br></br> */}
      <img src={logo} className="logoo" alt="MettleTech--User/Admin" />

      <form
        className="form-group form"
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
        <label>New Password</label>
        <input
          type="password"
          className="form-control custom-input"
          placeholder="Enter your new password"
          onChange={handlePasswordChange}
          value={password}
        />
        {passwordError && <div className="error-msg">{passwordError}</div>}

        <br></br>

        <label>Confirm Password</label>
        <input
          type="password"
          className="form-control custom-input"
          placeholder="Confirm your password"
          onChange={handleCPasswordChange}
          value={cpassword}
        />
        {cpasswordError && <div className="error-msg">{cpasswordError}</div>}

        <br></br>

        <button
          type="submit"
          className="btn btn-info btn-lg"
          style={{ width: 100 + "%" }}
          onClick={ handleFormSubmit}
        >
          CHANGE PASSWORD
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
