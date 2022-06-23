import React,{useState} from 'react';
import logo from "../assets/logo.png";
import "../login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export const OTP=()=>{
 
  const[Otp,setOtp]=useState('');
  const[OtpError,setOtpError]=useState('');

  const handleOtpChange=(e)=>{
    setOtpError('');
    setOtp(e.target.value);
  }

const navigate=useNavigate()
  // const handleLogin=()=>{
  //   console.log('login clicked')
  //   navigate('/home')
  //  }

  const handleFormSubmit=(e)=>{
   e.preventDefault();

 

   //check if email is empty
   if(Otp!==''){
    //check some other condition
    const OtpRegex=/^[0-9]/;
    if(OtpRegex.test(Otp)){
        setOtpError('');
        if(Otp==='713422'){
            setOtpError('');
            navigate('/')
        }
        else{
          setOtpError('Wrong otp');
        }
    }
    else{
      setOtpError('Invalid Otp');
    }

   }
   else{
    setOtpError('Otp Required')
   }
  }



  return(
    <div className='wrapper'>
      {/* <h3>Mettle Tech</h3><br></br> */}
      <img src={logo} className="logoo" alt="MettleTech--User/Admin" />



      

      <form className='form-group form' autoComplete='off'
      onSubmit={handleFormSubmit}>

     
        <div><h3 className=''>Enter OTP</h3></div>       
        <input type="text" className='form-control custom-input ' placeholder="Enter your OTP"
        onChange={handleOtpChange} value={Otp}/>
        {OtpError&&<div className='error-msg'>{OtpError}</div>}

        <br></br>


        <button type="submit" className='btn btn-success btn-lg'  style={{width:100 + '%'}}>SUBMIT</button>
      </form>
    </div>
  )

}

export default OTP;