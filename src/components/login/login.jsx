import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();
  const link = "http://localhost:3001";

  // const popUpWindow = () => {
  //   let params = `width=600,height=600,left=100,top=100,scrollbars=yes`;
  //   window.open("/popupbutt", "test", params);
  // };

  const emailChecker = (email, password) => {
    axios
      .post(link + "/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => updater(res))
      .catch((err) => console.log(err));

    const updater = (res) => {
      if (res.status === 200 && res.data.token) {
        localStorage.setItem("token", res.data.token);
        setSuccessMsg("You are successfully logged in");
        props.setisLoggedIn(true);
        navigate("/dataVisualisation");
      } else setSuccessMsg("Wrong Email or password or both");
    };
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email !== "") {
      const emailRegex =
        /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      if (emailRegex.test(email)) {
        setEmailError("");
        if (password !== "") {
          setPasswordError("");
          emailChecker(email, password);
        }
      } else setEmailError("Invalid Email");
    } else setEmailError("Email Required");

    if (password == "") setPasswordError("Passsword Required");
  };

  const loginView = () => {
    return (
      <div className="row ">
        <div className="col-12 wrapper">
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


            <button
              type="submit"
              className="btn btn-secondary btn-lg"
              style={{ width: 100 + "%" }}
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    );
  };

  const [view, setView] = useState(false);

  useEffect(() => {
    if (props.isLoggedIn) {
      setView(false);
      navigate("/profile");
    } else setView(true);
  }, []);

  return <div>{view ? loginView() : <></>}</div>;
};

export default Login;
