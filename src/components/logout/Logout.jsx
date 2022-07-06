import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "../sidebar/sidebar.css";
import "./logout.css";
import { useNavigate } from "react-router-dom";

const Logout = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("You are now logged out");
    localStorage.clear();
    props.setisLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="row container-fluid3">
      <Sidebar />
      <div>
        <div className="LogoutButton">
          <button
            id="LogoutButton"
            type="button"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
