
import Login from './components/login/login';
import Home from './components/home/home';
import Forgot from './components/login/forgotPass/forgot';
import ChangePassword from './components/login/changePassword/changePass';
import OTP from './components/login/otp/otp';
import Popupbutt from './components/login/popUpButt/popUpButt';
import Register from './components/register/register';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import ManageUser from './components/manageuser/ManageUser';
import Data_visualization from './components/data_visualization/data_visualization';

import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/pages/Dashboard.jsx';
import DataVisualisation from './components/pages/DataVisualisation';
import History from './components/pages/History';
import Logout from './components/pages/Logout';
import ManageUser from './components/pages/ManageUser';
import Notification from './components/pages/Notification';
import Profile from './components/pages/Profile';
// import './App.css';


function App() {
  return (
    <div className="App">
   
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/forgot" element={<Forgot/>}/>
      <Route path="/changePass" element={<ChangePassword/>}/>
      <Route path='/otp' element={<OTP/>}/>
      <Route path='/popupbutt' element={<Popupbutt/>}/>
      <Route path="/data_visualization" element={<Data_visualization/>}/>
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
    
    </div>
  );
}

export default App;
