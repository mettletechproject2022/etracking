import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Edit() {
  const link = "http://localhost:3001";

  const dataX = JSON.parse(localStorage.getItem("details"));

  const defaultData = {
    name: dataX.name,
    email: dataX.email,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm({ defaultValues: defaultData });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .put(link + "/api/users/" + dataX.id, data)
      .then((res) => console.log(res.data));
    reset();
    localStorage.setItem("details", null);
    localStorage.setItem("selected", null);
    navigate("/manageuser");
  };

  return (
    <div className="container1 pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">EDIT USER</h1>
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

            <div>
              <label className="col-form-label">
                <b>User Type:</b>
              </label>
              <select id="dropdown1">
                <option value="1">choose option</option>
                <option value="2">User</option>
                <option value="3">Admin</option>
              </select>
            </div>

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
                className="btn btn-success my-3"
                value="Update"
              />
              <button className="ml-4 btn btn-success my-3">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
