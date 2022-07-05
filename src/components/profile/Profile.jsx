import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";

const Profile = () => {
  const data = JSON.parse(atob(localStorage.getItem("token").split(".")[1]));
  const navigate = useNavigate();
  return (
    <div className="row">
      <Sidebar />
      <div className="col-11">
        <div>
          <h3>PROFILE</h3>
        </div>
        <div className="row my-3">
          <button
            className="ml-auto btn btn-success"
            onClick={() => navigate("/changepass")}
          >
            Change Password
          </button>
        </div>
        <div className="row px-3">
          <div className="col-7 p-3 shadow1">
            <h3>Name: {data.name}</h3>
            <h5>Email: {data.email}</h5>
            <h5>User Type: {data.userType}</h5>
          </div>
          <div className="col-1"></div>
          <div className="col-4 p-3 shadow1">
            <img
              src={data.profilepic}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
