import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import axios from "axios";
//import TextBox from 'react-native-password-eye';
import "./register.css";

const link = "http://localhost:3001";

function Register() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState();
  const [dirList, setdirList] = useState([]);
  const [selectedaccessdir, setSelectedAccessDir] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const handleSelected = (e) => {
    setSelected(e);
  };

  const getDir = () => {
    axios
      .post(link + "/api/users/getdirectory", {})
      .then((res) => setdirList(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getDir();
  }, []);

  const onSubmit = (data) => {
    const dataX = Object.assign(data, {
      userType: selected,
      dirAccess: selectedaccessdir,
    });
    axios
      .post("http://localhost:3001/api/users/register", dataX)
      .then((res) => console.log(res.data));

    reset();
    navigate("/manageuser");
  };
const handlecancel=()=>{
  navigate('/manageuser')
}
  return (
      
    <div className="container1 pt-5 vw-100 vh-100">
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

            <div className="form-group">
              <label className="col-form-label">
                <b>Password:</b>
              </label>
              <input
                type="password"
                className={`form-control ${errors.password && "invalid"}`}
                {...register("password", {
                  required: "password is Required",
                  pattern: {
                    value:
                      /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/,
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
            </div>

            <div className="form-group">
              <label className="col-form-label">
                <b>User Type:</b>
              </label>
              <select
                className="custom-select"
                value={selected}
                onChange={(e) => handleSelected(e.target.value)}
              >
                <option>choose option</option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            <div className="form-group">
              <label className="col-form-label">
                <b>Directory access:</b>
              </label>
              <Multiselect
                style={{
              
                  searchBox: {
                   backgroundColor:'white'
                  }
                }}
              isObject={false}
              onRemove={(event) => {

                setSelectedAccessDir(event);
              }}
              onSelect={(event) => {

                setSelectedAccessDir(event);
              }}
              options={dirList}
              selectedValues={[]}
              showCheckbox
              />
            </div>

            <div className="register">
              <input
                type="submit"
                className="btn btn-primary my-3"
                value="Register"
              />
              <button className="ml-4 btn btn-danger my-3" onClick={handlecancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
