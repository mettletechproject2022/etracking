import React, { useState } from "react";
import logo from "./assets/logo.png";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import jsonData from "../../yo.json";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  const popUpWindow = () => {
    let params = `width=600,height=600,left=100,top=100,scrollbars=yes`;
    window.open("/popupbutt", "test", params);
  };

  const emailChecker = (email) => {
    const data = jsonData.find((item) => item.email === email);
    const localData = JSON.parse(localStorage.getItem("data"));

    if (data === undefined) return false;
    else if (localData && JSON.parse(localData.email === email))
      return localData;
    else {
      localStorage.setItem("data", JSON.stringify(data));
      return data;
    }
  };

  const handleEmailChange = (e) => {
    setSuccessMsg("");
    setEmailError("");
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setSuccessMsg("");
    setPasswordError("");
    setPassword(e.target.value);
  };
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email !== "") {
      const emailRegex =
        /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      if (emailRegex.test(email)) {
        setEmailError("");
        if (emailChecker(email)) {
          setEmailError("");
          if (JSON.parse(localStorage.getItem("data")).password === password) {
            setSuccessMsg("You are successfully logged in");
            navigate("/profile");
          } else
            setPasswordError("password does not match with the email address");
        } else setEmailError("email does not match with our database");
      } else setEmailError("Invalid Email");
    } else setEmailError("Email Required");

    if (password == "") setPasswordError("Passsword Required");
  };

  return (
    <div className="wrapper">
      {/* <h3>Mettle Tech</h3><br></br> */}
      <img src={logo} className="logoo" alt="MettleTech--User/Admin" />

      <form
        className="form-group form"
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
        {successMsg && (
          <>
            <div className="success-msg">{successMsg}</div>
            <br></br>
          </>
        )}

        <div>
          <label className="mr-auto">Email</label>
        </div>
        <i className="login-icon fas fa-user"></i>
        <input
          type="text"
          className="form-control custom-input "
          placeholder="Enter your email address"
          onChange={handleEmailChange}
          value={email}
        />
        {emailError && <div className="error-msg">{emailError}</div>}

        <br></br>

        <div>
          <label>Password</label>
        </div>
        <input
          type="password"
          className="form-control custom-input"
          placeholder="Enter your password"
          onChange={handlePasswordChange}
          value={password}
        />
        {passwordError && <div className="error-msg">{passwordError}</div>}

        <br></br>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div>
          <a className="forgot pointer" onClick={() => popUpWindow()}>
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="btn btn-secondary btn-lg"
          style={{ width: 100 + "%" }}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;

// import React, { Component } from "react";
// import logo from "./assets/logo.png";
// import "./login.css";

// class login extends Component {
//   handleSubmit = e => {
//     e.preventDefault();
//     console.log(e.target.email.value);

//     if (!e.target.email.value) {
//       alert("Email is required");
//     } else if (!e.target.email.value) {
//       alert("Valid email is required");
//     } else if (!e.target.password.value) {
//       alert("Password is required");
//     } else if (
//       e.target.email.value === "me@example.com" &&
//       e.target.password.value === "123456"
//     ) {
//       alert("Successfully logged in");
//       e.target.email.value = "";
//       e.target.password.value = "";
//     } else {
//       alert("Wrong email or password combination");
//     }
//   };

//   handleClick = e => {
//     e.preventDefault();

//     alert("Goes to registration page");
//   };

//   render() {
//     return (
//       <div className="login">
//         <img src={logo} className="logo" alt="MettleTech--User/Admin" />
//         <form className="form" onSubmit={this.handleSubmit}>
//           <div className="input-group">
//             <label htmlFor="email">Email</label>
//             <input type="email" name="email" placeholder="name@email.com.br" required= {true} />
//           </div>
//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input type="password" name="password" />
//           </div>
//           <button className="primary">Log in</button>
//         </form>
//         <button className="secondary" onClick={this.handleClick}>
//           Create A New Account
//         </button>
//       </div>
//     );
//   }
// }

// export default login;
