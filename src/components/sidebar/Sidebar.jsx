import React, { useState } from "react";
import { FaBars, FaRegUserCircle, FaMinusCircle } from "react-icons/fa";
import { IoIosNotifications, IoIosPeople, IoIosAlbums } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
// import './sidebar.css'

// import {Component} from 'react';
// class Sidebar extends Component{
//   constructor(props){
//     super(props);
//     this.handleBack=this.handleLogin.bind(this)
//   }
//   handleBack(){
//     this.props.history.goBack()
//   }
//   render(){
//     return(
//       <div>
//         <button onClick={this.handleBack}>Back</button>
//       </div>
//     )
//   }
// }

const Sidebar = ({ children }) => {



  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const sideList=(x)=>{
    return x.map((item, index) => (
      <NavLink
        to={item.path}
        key={index}
        className="link"
        activeclassName="active"
      >
        <div className="icon">{item.icon}</div>
        <div
          style={{ display: isOpen ? "block" : "none" }}
          className="link_text"
        >
          {item.name}
        </div>
      </NavLink>
    ))}

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
      path: "/notification",
      name: "Notification",
      icon: <IoIosNotifications />,
    },
    {
      path: "/history",
      name: "History",
      icon: <IoNewspaperOutline />,
    },
    {
      path: "/manageUser",
      name: "ManageUser",
      icon: <IoIosPeople />,
    },

    {
      path: "/",
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
      path: "/notification",
      name: "Notification",
      icon: <IoIosNotifications />,
    },
    {
      path: "/history",
      name: "History",
      icon: <IoNewspaperOutline />,
    },
   

    {
      path: "/logout",
      name: "Logout",
      icon: <FaMinusCircle  />,
    },
  ];
  return (
    <div style={{ width: isOpen ? "300px" : "60px" }} className="sidebar">
      <div className="top_section">
        <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
          Mettle Tech
        </h1>
        <div style={{ marginLeft: isOpen ? "60px" : "0px" }} className="bars">
          <FaBars onClick={toggle} />
        </div>
      </div>
      <div>
      {(localStorage.getItem("data"))&&JSON.parse(localStorage.getItem("data")).usertype==="Admin"? sideList(menuItem)  : sideList(menuItem2)}
    </div>
    </div>
  )
};

export default Sidebar;
