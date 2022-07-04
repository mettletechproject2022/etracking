import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home/home";
import Forgot from "./components/login/forgotPass/forgot";
import ChangePassword from "./components/login/changePassword/changePass";
import OTP from "./components/login/otp/otp";
import Popupbutt from "./components/login/popUpButt/popUpButt";
import ResetPassword from "./components/login/resetPassword/resetPassword";
import Register from "./components/register/register";
import Edit from "./components/edit/edit";
import Profile from "./components/profile/Profile";
import Logout from "./components/logout/Logout";
import Unauth from "./components/unauth/unauth";

import ManageUser from "./components/manageuser/ManageUser";
import DataVisualisation from "./components/dataVisualisation/DataVisualisation";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/changepass" element={<ChangePassword />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/popupbutt" element={<Popupbutt />} />

          <Route path="/logout" element={<Logout />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit" element={<Edit />} />

          <Route exact path="/manageuser" element={<ManageUser />} />
          {/* {localStorage.getItem("userdetails")!==null&&JSON.parse(localStorage.getItem("userdetails")).userType==="Admin" ? (
            <Route path="/manageUser" element={<ManageUser />} />
          ) : (
            <Route path='/manageUser' element={<Unauth/>}/>
          )} */}
          <Route path="/datavisualisation" element={<DataVisualisation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;