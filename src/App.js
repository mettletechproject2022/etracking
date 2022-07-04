import Login from "./components/login/login";
import Home from "./components/home/home";
import Forgot from "./components/login/forgotPass/forgot";
import ChangePassword from "./components/login/changePassword/changePass";
import OTP from "./components/login/otp/otp";
import Popupbutt from "./components/login/popUpButt/popUpButt";
import ResetPassword from "./components/login/resetPassword/resetPassword";
import Register from "./components/register/register";
import Edit from "./components/edit/edit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ManageUser from "./components/manageuser/ManageUser";
import DvUser from "./components/data_visualization/imageDisplay/user";
import Dev2 from "./components/data_visualization/imageDisplay/dev2";
import Dev3 from "./components/data_visualization/imageDisplay/dev3";
import Dev4 from "./components/data_visualization/imageDisplay/dev4";
import DataVisualisation from "../src/pages/DataVisualisation";
import Dev1 from "./components/data_visualization/imageDisplay/dev1";
import Unauth from "../src/pages/unauth";
import Datetime from "./pages/Datetime";




import List from "./components/newManageuser/List"; 
// import Edit from "./components/newManageuser/Edit"; 
import User from "./components/newManageuser/User"; 
import Header from "./components/newManageuser/Header"; 






// for sidebar
// import Sidebar from "./components/sidebar/Sidebar";

// import DataVisualisation from "./pages/DataVisualisation";
import History from "./pages/History";
import Notification from "./pages/Notification";
// import ManageUser from "./pages/ManageUser";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import "./App.css";

function App() {
  const adminEmail = "raj@gmail.com";
  const userEmail = "atanu@gmail.com";

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/changePass" element={<ChangePassword />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/popupbutt" element={<Popupbutt />} />
          {/* <Route path="/data_visualization" element={<Data_visualization />} /> */}
          <Route path="/dev1" element={<Dev1 />} />
          <Route path="/dev2" element={<Dev2 />} />
          <Route path="/dev3" element={<Dev3 />} />
          <Route path="/dev4" element={<Dev4 />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/edit" element={<Edit />} /> */}
          <Route path="/dvUser" element={<DvUser />} />
          <Route path="/dataVisualisation" element={<DataVisualisation />} />
          <Route path="/history" element={<History />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/user" element={<User />} />

          {/* {localStorage.getItem("data") &&
          JSON.parse(localStorage.getItem("data")).usertype === "Admin" ? ( */}
          


            {/* <Route path="/List" element={<List />} />




          //  : (
           

          //   <Route path="/List" element={<Unauth />} />

          // ) */}

          <Route path="/notification" element={<Notification />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
