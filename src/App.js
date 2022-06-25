import Login from "./components/login/login";
import Home from "./components/home/home";
import Forgot from "./components/login/forgotPass/forgot";
import ChangePassword from "./components/login/changePassword/changePass";
import OTP from "./components/login/otp/otp";
import Popupbutt from "./components/login/popUpButt/popUpButt";
import Register from "./components/register/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ManageUser from './components/manageuser/ManageUser';
<<<<<<< HEAD
import Data_visualization from './components/data_visualization/data_visualization';
import Dev1 from './components/data_visualization/imageDisplay/dev1';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/pages/Dashboard.jsx';
import DataVisualisation from './components/pages/DataVisualisation';
import History from './components/pages/History';
import Logout from './components/pages/Logout';
import ManageUser from './components/pages/ManageUser';
import Notification from './components/pages/Notification';
import Profile from './components/pages/Profile';
// import './App.css';
=======
// import Data_visualization from './components/data_visualization/data_visualization';
>>>>>>> a01fdccd51629c7afdbf33c0a962a624ac5b1ddd

import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import DataVisualisation from "./pages/DataVisualisation";
import History from "./pages/History";
import Logout from "./pages/Logout";
import ManageUser from "./pages/ManageUser";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
   
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/forgot" element={<Forgot/>}/>
      <Route path="/changePass" element={<ChangePassword/>}/>
      <Route path='/otp' element={<OTP/>}/>
      <Route path='/popupbutt' element={<Popupbutt/>}/>
      <Route path="/data_visualization" element={<Data_visualization/>}/>
      <Route path="/dev1" element={<Dev1/>}/>
      <Route path="/manageuser" element={<ManageUser/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/sidebar" element={<Sidebar />}/>

      <Route path="/" element={<Dashboard/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/dataVisualisation" element={<DataVisualisation/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/manageUser" element={<ManageUser/>}/>
      <Route path="/notification" element={<Notification/>}/>
      <Route path="/profile" element={<Profile/>}/>
      </Routes>

    </BrowserRouter>
    
=======
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/changePass" element={<ChangePassword />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/popupbutt" element={<Popupbutt />} />
          {/* <Route path="/data_visualization" element={<Data_visualization/>}/> */}
          <Route path="/manageuser" element={<ManageUser />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      {/* sdiebar routing */}
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dataVisualisation" element={<DataVisualisation />} />
            <Route path="/history" element={<History />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/manageUser" element={<ManageUser />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
>>>>>>> a01fdccd51629c7afdbf33c0a962a624ac5b1ddd
    </div>
  );
}

export default App;
