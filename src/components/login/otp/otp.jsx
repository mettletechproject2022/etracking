import React, { useState } from "react";
import logo2 from "../assets/logo2.png";
import "../login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export const OTP = () => {
  const [Otp, setOtp] = useState("");
  const [OtpError, setOtpError] = useState("");

  const [Mob, setMob] = useState(
    JSON.parse(localStorage.getItem("data")).phone
  );
  const [MobError, setMobError] = useState("");
  const [otpSent, setotpSent] = useState(false);

  const checkMob = (e) => {
    e.preventDefault();

    if (Mob !== "") {
      setDis(false);
      setotpSent(true);
    }
  };

  const [Dis, setDis] = useState(true);

  const handleOtpChange = (e) => {
    setOtpError("");
    setOtp(e.target.value);
    if (Otp !== "") {
      const OtpRegex = /^[0-9]/;
      if (OtpRegex.test(Otp)) {
        setOtpError("");
      } else {
        setOtpError("Invalid Otp");
      }
    } else {
      setOtpError("Otp Required");
    }
  };

  const handleMobChange = (e) => {
    setMobError("");
    setMob(e.target.value);
  };

  const navigate = useNavigate();
  // const handleLogin=()=>{
  //   console.log('login clicked')
  //   navigate('/home')
  //  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (Mob !== "" && OtpError == "") {
      alert("redirecting you to resetpassword page..");
      navigate("/changePass");
    }
  };

  return (
    <div className="wrapper2">
      {/* <h3>Mettle Tech</h3><br></br> */}
      <img src={logo2} className="logoo2" alt="MettleTech--User/Admin" />

      <form className="form-group form" autoComplete="off">
        <div>
          <h3 className="">Enter Your Mobile Number</h3>
        </div>
        <input
          type="text"
          className="form-control custom-input "
          placeholder="Enter your Mobile number"
          onChange={handleMobChange}
          value={Mob}
        />
        {MobError && <div className="error-msg">{MobError}</div>}
        {otpSent && (
          <div className="success-msg">
            <p>Otp Sent</p>
          </div>
        )}

        <button
          type="submit"
          className="btn btn-success btn-sm"
          style={{ width: 50 + "%" }}
          onClick={(e) => checkMob(e)}
        >
          SEND OTP
        </button>
        <br></br>

        <br></br>

        <div>
          <h3 className="">Enter OTP</h3>
        </div>
        <input
          type="text"
          className="form-control custom-input "
          placeholder="Enter your OTP"
          onChange={handleOtpChange}
          value={Otp}
          disabled={Dis}
        />
        {OtpError && <div className="error-msg">{OtpError}</div>}

        <br></br>

        <button
          type="submit"
          className="btn btn-success btn-lg"
          style={{ width: 100 + "%" }}
          onClick={(e) => handleFormSubmit(e)}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default OTP;