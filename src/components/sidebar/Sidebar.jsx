import React, { useState } from 'react';
import {FaTh,FaBars,FaRegUserCircle,FaMinusCircle}from "react-icons/fa";
import { IoIosNotifications,IoIosPeople,IoIosAlbums } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import '../../App.css';




const Sidebar = ({children}) => {

    const [isOpen,setIsOpen]=useState(false);
    const toggle =() => setIsOpen (!isOpen);
    
    const menuItem=[
      
        
        {
            path:"/profile",
            name:"Profile",
            icon:<FaRegUserCircle/>
        },
        {
            path:"/dataVisualisation",
            name:"DataVisualisation",
            icon:<IoIosAlbums/>
        },
       
       
       
        {
            path:"/notification",
            name:"Notification",
            icon:<IoIosNotifications/>
            
        },
        {
            path:"/history",
            name:"History",
           icon:<IoNewspaperOutline/>
        },
        {
            path:"/manageUser",
            name:"ManageUser",
            icon:<IoIosPeople/>
            
        },
        
        {
            path:"/logout",
            name:"Logout",
            icon:<FaMinusCircle/>
        },
       
    ]
  return (
    <div className='container'>
        <div style={{width:isOpen ?  "300px" : "60px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display:isOpen ?  "block" : "none"}} className="logo">Mettle Tech</h1>
                <div style={{marginLeft:isOpen ?  "60px" : "0px"}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {menuItem.map((item,index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    <div className="icon">{item.icon}</div>
                    <div style={{display:isOpen ?  "block" : "none"}} className="link_text">{item.name}</div>

                </NavLink>
            ))
            }
        </div>
        <main>{children}</main>
    </div>
  );
};

export default Sidebar;



















