import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import "../components/sidebar/sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    alert('You are now logged out')
    navigate("/");
  };

  return (
    <div className="container-fluid3 p-0 d-flex flex-row">
      <Sidebar />
      <div>
        <button type="button" class="btn btn-outline-danger" onClick={() => handleLogout()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
