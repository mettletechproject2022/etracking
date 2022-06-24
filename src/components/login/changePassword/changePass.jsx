import React,{useState} from 'react';
import logo from "../assets/logo.png";
import "../login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export const ChangePassword=()=>{

  const[password,setPassword]=useState('');
  const[passwordError,setPasswordError]=useState('');

  const handlePasswordChange=(e)=>{
    setPasswordError('');
    setPassword(e.target.value);
  }

  const[cpassword,setcPassword]=useState('');
  const[cpasswordError,setcPasswordError]=useState('');

  const handleCPasswordChange=(e)=>{
    setcPasswordError('');
    setcPassword(e.target.value);
  }

const navigate=useNavigate()
  // const handleLogin=()=>{
  //   console.log('login clicked')
  //   navigate('/home')
  //  }

  const handleFormSubmit=(e)=>{
   e.preventDefault();


   
   //check if password is empty
   if(password!==''){
    const passwordRegex=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(passwordRegex.test(password)){
        if(password.length==8){
            setPasswordError('')
        }else{
            setPasswordError('Minimum 8 charecters')
        }
        setPasswordError('ok');
   }
   else{
    setPasswordError('Passsword Required')
   }
  }
  else{
    setPasswordError('Invalid Password')
  }

  if(cpassword!==''){
    const cpasswordRegex=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(cpasswordRegex.test(cpassword)){
        if(cpassword.length==8){
            setcPasswordError('')
        }else{
            setcPasswordError('Minimum 8 charecters')
        }
        setcPasswordError('ok');
   }
   else{
    setcPasswordError('Correctly type your password')
   }
  }
  else{
    setcPasswordError('Invalid Confirm Password')
  }
  if(password!==''&& cpassword!==''){
    if(password===cpassword)
    navigate('/otp')
    else{
      setcPasswordError( 'Password Mismatched')
    }
  }

  
}



  return(
    <div className='wrapper3'>
      {/* <h3>Mettle Tech</h3><br></br> */}
      <img src={logo} className="logoo" alt="MettleTech--User/Admin" />



      

      <form className='form-group form' autoComplete='off'
      onSubmit={handleFormSubmit}>

        <label>New Password</label>
        <input type="password" className='form-control custom-input' placeholder='Enter your new password'
        onChange={handlePasswordChange} value={password}/>
        {passwordError&&<div className='error-msg'>{passwordError}</div>}

        <br></br>

        <label>Confirm Password</label>
        <input type="password" className='form-control custom-input' placeholder='Confirm your password'
        onChange={handleCPasswordChange} value={cpassword}/>
        {cpasswordError&&<div className='error-msg'>{cpasswordError}</div>}

        <br></br>


        <button type="submit" className='btn btn-info btn-lg'  style={{width:100 + '%'}}>NEXT</button>
      </form>
    </div>
  )

}

export default ChangePassword;