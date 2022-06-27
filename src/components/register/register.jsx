import "./register.css";
//import TextBox from 'react-native-password-eye'; 

import { useForm } from "react-hook-form";
import { useState } from "react";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };


  const [gender, setGender] = useState();

  // console.log(watch());

  // console.log(errors.name)

  return (
    <div className="container1 pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <div className="registertop">
            <h1 className="text-center pt-3 text-secondary">USER REGISTRATION</h1>
           
          </div>
          <form className="registerform" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label className="text1 col-form-label"><b>Full Name:</b></label>
            <input
              type="text"
              className={`form-control ${errors.name && "invalid"}`}
              {...register("name", { required: "Name is Required" })}
              onKeyUp={() => {
                trigger("name");
              }}
            />
            {errors.name && (
              <small className="text-danger">{errors.name.message}</small>
            )}
          </div>
          <div className="form-group">
            <label className="text1 col-form-label"><b>Age:</b></label>
            <input
              type="text"
              className={`form-control ${errors.age && "invalid"}`}
              {...register("age", {
                required: "Age is Required",
                min: {
                  value: 13,
                  message: "Minimum Required age is 18",
                },
                max: {
                  value: 65,
                  message: "Maximum allowed age is 60",
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Only numbers are allowed",
                }
              })}
              onKeyUp={() => {
                trigger("age");
              }}
            />
            {errors.age && (
              <small className="text-danger">{errors.age.message}</small>
            )}
          </div>
          <div className="form-group">
            <label className="text1 col-form-label"><b>Email:</b></label>
            <input
              type="text"
              className={`form-control ${errors.email && "invalid"}`}
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }
              })}
              onKeyUp={() => {
                trigger("email");
              }}
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </div>
          <div className="form-group">
            <label className="text1 col-form-label"><b>Phone:</b></label>
            <input
              type="text"
              className={`form-control ${errors.phone && "invalid"}`}
              {...register("phone", {
                required: "Phone is Required",
                pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                },
              })}
              onKeyUp={() => {
                trigger("phone");
              }}
            />
            {errors.phone && (
              <small className="text-danger">{errors.phone.message}</small>
            )}
          </div>
          <div className="form-group">
            <label className="text1 col-form-label"><b>Communication Address:</b></label>
            <textarea
              className={`form-control ${errors.message && "invalid"}`}
              {...register("messages", {
                required: "address is Required",
                minLength: {
                  value: 10,
                  message: "Minimum Required length is 10",
                },
                maxLength: {
                  value: 50,
                  message: "Maximum allowed length is 50 ",
                }
              })}
              onKeyUp={() => {
                trigger("messages");
              }}
            ></textarea>
            {errors.message && (
              <small className="text-danger">{errors.message.message}</small>
            )}
          </div>

          <div className="form-group">
            <label className="text1 col-form-label"><b>Permanent Address:</b></label>
            <textarea
              className={`form-control ${errors.message && "invalid"}`}
              {...register("message", {
                required: "address is Required",
                minLength: {
                  value: 10,
                  message: "Minimum Required length is 10",
                },
                maxLength: {
                  value: 50,
                  message: "Maximum allowed length is 50 ",
                }
              })}
              onKeyUp={() => {
                trigger("message");
              }}
            ></textarea>
            {errors.message && (
              <small className="text-danger">{errors.message.message}</small>
            )}
          </div><br />


          {/* <div className="form-group">
              <label className="col-form-label"><b>Gender:</b></label>
              <p> <input type="radio"/> Male</p>
              <p> <input type="radio"/> Female</p>
              <p> <input type="radio"/> Others</p>
              </div> */}
          <div>
            <label className="text1 col-form-label"><b>Gender:</b></label><br />
            <input type="radio" name="gender" value="Male" onChange={e => setGender(e.target.value)} />Male <br />
            <input type="radio" name="gender" value="Female" onChange={e => setGender(e.target.value)} />Female<br />
            <input type="radio" name="gender" value="Female" onChange={e => setGender(e.target.value)} />Others<br />

          </div>


          <div>
            <label className="text1 col-form-label"><b>Designation:</b><br /><br />
              <p><input type="checkbox" /> Frontend Developer </p>
              <p><input type="checkbox" /> Backend Developer</p>
              <p><input type="checkbox" /> Database manager</p></label>

          </div>


          <div>
            <label className="text1 col-form-label"><b>User Type:</b></label>
            <select id="dropdown1">

              <option value="1">choose option</option>
              <option value="2">User</option>
              <option value="3">Admin</option>
            </select>
          </div><br />


          <div>
            <label className="text1 col-form-label"><b>Directory:</b></label>
            <select id="dropdown2">
              <option value="1">choose option</option>
              <option value="2">c:/mettletech/developer/</option>
              <option value="3">c:/mettletech/developer/20222001</option>
              <option value="4">c:/mettletech/developer/20222002</option>
              <option value="5">c:/mettletech/developer/20222003</option>
              <option value="6">c:/mettletech/developer/20222004</option>
              <option value="7">c:/mettletech/developer/20222005</option>
              <option value="8">c:/mettletech/developer/20222006</option>
              <option value="8">c:/mettletech/developer/20222007</option>
            </select>
          </div><br />

          <div className="form-group">
            <label className="text1 col-form-label"><b>Enter Password:</b></label>
            <input id="password1" type="password" placeholder="Enter Password...." />
          </div><br />

          <div className="form-group">
            <label className="text1 col-form-label"><b>Confirm Password:</b></label>
            <input id="password1" type="password" placeholder="Re-enter Password...." />
          </div><br />


          <div className="register">
            <input
              type="submit"
              className="btn btn-primary my-3"
              value="Register"
            />
          </div>
        </form>
      </div>
    </div>
    </div >
  );
}

export default Register;