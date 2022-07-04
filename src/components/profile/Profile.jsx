import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Sidebar from "../sidebar/Sidebar";

function Profile() {
  const navigate = useNavigate();
  const [view, setView] = useState(false);

  const link = "http://localhost:3001";



  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      setView(false);
      navigate("/");
    } else {
      setView(true);
    }
  }, []);
  const profile = () => {
    const data = JSON.parse(localStorage.getItem("userdetails"));
    return (
      <div className="row">
        <Sidebar />
        <div className="col-11">
          <div>
            <h3>PROFILE</h3>
          </div>
          <div className="row my-3">
            <button className="ml-auto btn btn-success" onClick={()=>navigate("/changepass")}>Change Password</button>
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
                src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <div>{view ? profile() : <></>}</div>;
}

export default Profile;