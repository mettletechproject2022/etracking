import React,{useState} from 'react';
import logo from "../assets/logo.png";
import "../login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export const Forgot=()=>{
  const [email,setEmail]=useState('');
  const [emailError,setEmailError]=useState('');

  const handleEmailChange=(e)=>{
    setEmailError('');
    setEmail(e.target.value);
  }

const navigate=useNavigate()
  // const handleLogin=()=>{
  //   console.log('login clicked')
  //   navigate('/home')
  //  }

  const handleFormSubmit=(e)=>{
   e.preventDefault();

 

   //check if email is empty
   if(email!==''){
    //check some other condition
    const emailRegex=/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if(emailRegex.test(email)){
        setEmailError('');
        if(email==='raj@gmail.com'){
          setEmailError('');
          navigate('/changePass')
        }else{
          setEmailError('Wrong Email')
        }
    }
    else{
      setEmailError('Invalid Email');
    }

   }
   else{
    setEmailError('Email Required')
   }
  }



  return(
    <div className='wrapper'>
      {/* <h3>Mettle Tech</h3><br></br> */}
      <img src={logo} className="logoo" alt="MettleTech--User/Admin" />



      

      <form className='form-group form' autoComplete='off'
      onSubmit={handleFormSubmit}>
     
        <div><label className='mr-auto'>Email</label></div>        
        <input type="text" className='form-control custom-input' placeholder="Enter your email address"
        onChange={handleEmailChange} value={email}/>
        {emailError&&<div className='error-msg'>{emailError}</div>}

        <br></br>

        <button type="submit" className='btn btn-success btn-lg'  style={{width:100 + '%'}}>CHANGE PASSWORD</button>
      </form>
    </div>
  )

}

export default Forgot;
