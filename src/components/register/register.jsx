import "./register.css";
import axios from "axios";
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
    // const dataX=JSON.parse(data)+{userType:"Admin",directory:"\\dev2"}
    // console.log(dataX);

    // axios.post("http://localhost:3001/api/users",{}).then((res) => console.log(res.data));
    reset();
  };

  return (
    <div className="container1 pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">USER REGISTRATION</h1>
          <form className="registerform" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="col-form-label">
                <b>Full Name:</b>
              </label>
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
              <label className="col-form-label">
                <b>Email:</b>
              </label>
              <input
                type="text"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>

            {/* <div className="form-group">
              <label className="col-form-label">
                <b>Password:</b>
              </label>
              <input
                type="password"
                className={`form-control ${errors.password && "invalid"}`}
                {...register("password", {
                  required: "password is Required",
                  pattern: {
                    value: /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{6,16}$/i,
                    message: "Invalid password",
                  },
                })}
                onKeyUp={() => {
                  trigger("password");
                }}
              />
              {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
            </div> */}

            <div>
              <label className="col-form-label">
                <b>Directory:</b>
              </label>
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
            </div>

        

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
    </div>
  );
}

export default Register;