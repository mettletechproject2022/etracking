import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import '../components/sidebar/sidebar.css'
import '../App.css'

const Logout = () => {
  return (
    <div className="container-fluid3 p-0 d-flex flex-row">
      <Sidebar/>
    <div>
      Logout
    </div>
    </div>
  );
};

export default Logout;