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
import ManageUser from "./components/manageuser/ManageUser";
import Dev2 from "./components/data_visualization/imageDisplay/dev2";
import DataVisualisation from "../src/pages/DataVisualisation";
import Dev1 from "./components/data_visualization/imageDisplay/dev1";
import Unauth from "../src/pages/unauth";

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
  const adminEmail= "raj@gmail.com";
  const userEmail= "atanu@gmail.com";

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
          <Route path="/dev2" element={<Dev2/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/edit" element={<Edit />} />
          {/* <Route path="/sidebar" element={<Sidebar />} /> */}
          <Route path="/dataVisualisation" element={<DataVisualisation />} />
          <Route path="/history" element={<History />} />
          <Route path="/logout" element={<Logout />} />

          {localStorage.getItem("email") === adminEmail ? (
            <Route path="/manageUser" element={<ManageUser />} />
          ) : (
            <Route path='/manageUser' element={<Unauth/>}/>
          )}

          <Route path="/notification" element={<Notification />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>

      {/* <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/dataVisualisation" element={<DataVisualisation />} />
            <Route path="/history" element={<History />} />
            <Route path="/logout" element={<Logout />} />
             <Route path="/manageusers" element={<ManageUser/>}/>
            <Route path="/manageUser" element={<ManageUser />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Sidebar>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
