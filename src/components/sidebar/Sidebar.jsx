import React, { useState } from "react";
import { FaRegUserCircle, FaMinusCircle, FaMeetup } from "react-icons/fa";
import { IoIosPeople, IoIosAlbums } from "react-icons/io";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./sidebar.css";

const Sidebar = () => {
  const userType = JSON.parse(
    atob(localStorage.getItem("token").split(".")[1])
  ).userType;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const sideList = (x) => {
    return (
      <div className="sidebar ">
        <ul className="p-1">
          <li className="p-1 d-flex">
            <FaMeetup size={"36"} fill={"white"}/>
          </li>
          {x.map((item, index) => (
            <li key={index} className="my-3 p-1 d-flex ">
              <NavLink
                to={item.path}
                key={index}
                className=""
                activeclassname="active"
              >
                <div className="mx-auto p-1"> {item.icon}</div>
                <div className="tooltip">{item.name}</div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const menuItem = [
    {
      path: "/dataVisualisation",
      name: "DataVisualisation",
      icon: <IoIosAlbums size={32} fill={'white'} />,
    },
    {
      path: "/manageUser",
      name: "ManageUser",
      icon: <IoIosPeople size={32} fill={'white'}/>,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <FaRegUserCircle size={32} fill={'white'} />,
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <FaMinusCircle size={32} fill={'white'} />,
    },
  ];
  const menuItem2 = [
    {
      path: "/dataVisualisation",
      name: "DataVisualisation",
      icon: <IoIosAlbums size={32} fill={'white'}/>,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <FaRegUserCircle size={32} fill={'white'}/>,
    },
    
    {
      path: "/logout",
      name: "Logout",
      icon: <FaMinusCircle size={32} fill={'red'}/>,
    },
  ];
  return (
    <div style={{ width: "60px" }} className="sidebar">
      <div className="top_section">
        <div className="p-0"></div>
      </div>
      <div>
        {userType === "Admin" ? sideList(menuItem) : sideList(menuItem2)}
      </div>
    </div>
  );
};

export default Sidebar;