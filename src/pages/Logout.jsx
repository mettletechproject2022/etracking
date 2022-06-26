import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import "../components/sidebar/sidebar.css";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="container-fluid3 p-0 d-flex flex-row">
      <Sidebar />
      <div>
        <button type="button" onClick={() => handleLogout()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
