import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import "../components/sidebar/sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../pages/logout.css";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('You are now logged out')
    navigate("/");
  };

  return (
    <div className="container-fluid3 p-0 d-flex flex-row">
      <Sidebar />
      <div>
        {/* <button type="button" class="btn btn-outline-danger" onClick={() => handleLogout()}> */}
      <div className="LogoutButton">
        <button id="LogoutButton" type="button" onClick={() => handleLogout()}>
          Logout
        </button>
      </div>
    </div>
    </div>
  );
};

export default Logout;
