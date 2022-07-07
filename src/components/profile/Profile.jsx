import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "./profile.css";

const Profile = () => {
  const data = JSON.parse(atob(localStorage.getItem("token").split(".")[1]));
  const navigate = useNavigate();
  return (
    <div className="row">
      <Sidebar />
      <div className="col-11">
        <div className="commonname">
          <h3>PROFILE</h3>
        </div>
        <div className="row px-3 profilebox">
          <div className="col-7 p-3 name1 shadow1">
            <h3>Name: {data.name}</h3>
            <h5>Email: {data.email}</h5>
            <h5>User Type: {data.userType}</h5>
          </div>
          <div className="col-1"></div>
          <div className="col-4 p-3 name2 shadow1">
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
