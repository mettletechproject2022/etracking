
import Login from './components/login/login';
import Home from './components/home/home';
import Forgot from './components/login/forgotPass/forgot';
import ChangePassword from './components/login/changePassword/changePass';
import OTP from './components/login/otp/otp';

import "./App.css";



// import Login from './components/login/login';
// import Home from './components/home/home';
import Register from './components/register/register';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ManageUser from './components/manageuser/ManageUser';
import Data_visualization from './components/data_visualization/data_visualization';
import Homes from './components/pages/homes/Homes';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/topbar'


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
      
      <Route path="users" element={<Homes />}></Route>
      <Route path="/data_visualization" element={<Data_visualization/>}/>
      <Route path="/manageuser" element={<ManageUser/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
