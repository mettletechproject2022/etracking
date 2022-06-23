// import logo from './logo.svg';
// import './App.css';
import Login from './components/login/login';
import Home from './components/home/home';
import Forgot from './components/login/forgotPass/forgot';
import ChangePassword from './components/login/changePassword/changePass';
import OTP from './components/login/otp/otp';
//import './App.css';
// import Login from './components/login/login';
// import Home from './components/home/home';
import Register from './components/register/register';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ManageUser from './components/manageuser/ManageUser';

function App() {
  return (
    <div className="App">
    {/* <h1>Hello I am Ratnadeep Dey 2022-23</h1>  */}
    {/* <h1>Hi there! This is mettle tech project 2022</h1>
    <h2>hi! there buddy here...</h2>
    <h2>hi! there buddy here...</h2> */}
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/forgot" element={<Forgot/>}/>
      <Route path="/changePass" element={<ChangePassword/>}/>
      <Route path='/otp' element={<OTP/>}/>

      <Route path="/manageuser" element={<ManageUser/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
