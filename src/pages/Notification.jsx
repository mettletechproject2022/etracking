import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import '../components/sidebar/sidebar.css'
import '../App.css'

const Notification = () => {
  return (
    <div className="container-fluid4 p-0 d-flex flex-row">
      <Sidebar/>
    <div className='text-form'>
      Notification
    </div>
    </div>
  );
};

export default Notification;
