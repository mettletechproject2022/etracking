import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Protected from "./components/Protected";
import Login from "./components/login/login";
import Profile from "./components/profile/Profile";
import ManageUser from "./components/manageuser/ManageUser";
import DataVisualisation from "./components/dataVisualisation/DataVisualisation";
import Forgot from "./components/login/forgotPass/forgot";
import ChangePassword from "./components/login/changePassword/changePass";
import OTP from "./components/login/otp/otp";
import Popupbutt from "./components/login/popUpButt/popUpButt";
import ResetPassword from "./components/login/resetPassword/resetPassword";
import Register from "./components/register/register";
import Edit from "./components/edit/edit";
import Logout from "./components/logout/Logout";
import UnAuth from "./components/unauth/unauth";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(localStorage.getItem("token")?true:false);

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Login isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
            }
          />
          <Route path="/unauth" element={<UnAuth />} />
          <Route
            path="/profile"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Profile />
              </Protected>
            }
          />
          <Route
            path="/register"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Register />
              </Protected>
            }
          />
          <Route
            path="/edit"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Edit />
              </Protected>
            }
          />
          <Route
            path="/forgot"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Forgot />
              </Protected>
            }
          />
          <Route
            path="/changepass"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <ChangePassword />
              </Protected>
            }
          />
          <Route
            path="/otp"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <OTP />
              </Protected>
            }
          />
          <Route
            path="/resetPassword"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <ResetPassword />
              </Protected>
            }
          />
          <Route
            path="/popupbutt"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Popupbutt />
              </Protected>
            }
          />
          <Route
            path="/manageuser"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <ManageUser />
              </Protected>
            }
          />
          <Route
            path="/datavisualisation"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <DataVisualisation />
              </Protected>
            }
          />
           <Route
            path="/logout"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Logout />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
