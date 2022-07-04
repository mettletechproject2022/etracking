import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "../sidebar/sidebar.css";
import "./logout.css";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('You are now logged out');
    localStorage.removeItem("token");
    localStorage.removeItem("userdetails");
    navigate("/");
  };

  return (
    <div className="row container-fluid3">
      <Sidebar />
      <div>
        {/* <button type="button" class="btn btn-outline-danger" onClick={() => handleLogout()}> */}
      <div className="LogoutButton">
        <button  id="LogoutButton" type="button" onClick={() => handleLogout()}>
          Logout
        </button>
      </div>
    </div>
    </div>
  );
};

export default Logout;