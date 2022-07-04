import React, { useState } from "react";
import { FaRegUserCircle, FaMinusCircle ,FaMeetup} from "react-icons/fa";
import { IoIosPeople, IoIosAlbums } from "react-icons/io";
import { NavLink } from "react-router-dom";


const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const sideList = (x) => {
    return x.map((item, index) => (
      <NavLink
        to={item.path}
        key={index}
        className="link"
        activeclassname="active"
      >
        <div className="icon">{item.icon}</div>
        <div
          style={{ display: isOpen ? "block" : "none" }}
          className="link_text"
        >
          {item.name}
        </div>
      </NavLink>
    ));
  };

  const menuItem = [
    {
      path: "/profile",
      name: "Profile",
      icon: <FaRegUserCircle />,
    },
    {
      path: "/dataVisualisation",
      name: "DataVisualisation",
      icon: <IoIosAlbums />,
    },

    
    {
      path: "/manageUser",
      name: "ManageUser",
      icon: <IoIosPeople />,
    },

    {
      path: "/logout",
      name: "Logout",
      icon: <FaMinusCircle />,
    },
  ];
  const menuItem2 = [
    {
      path: "/profile",
      name: "Profile",
      icon: <FaRegUserCircle />,
    },
    {
      path: "/dataVisualisation",
      name: "DataVisualisation",
      icon: <IoIosAlbums />,
    },


    {
      path: "/logout",
      name: "Logout",
      icon: <FaMinusCircle />,
    },
  ];
  return (
    <div style={{ width: isOpen ? "190px" : "60px" }} className="sidebar">
      <div className="top_section">
     
        <div style={{ marginLeft: isOpen ? "60px" : "0px" }} className="p-0">
          <FaMeetup size={"32"}/>
        </div>
      </div>
      <div>
        {localStorage.getItem("userdetails") &&
        JSON.parse(localStorage.getItem("userdetails")).userType === "Admin"
          ? sideList(menuItem)
          : sideList(menuItem2)}
      </div>
    </div>
  );
};

export default Sidebar;