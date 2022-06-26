import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import '../components/sidebar/sidebar.css'
import '../App.css'

const History = () => {
  return (
    <div className="container-fluid3 p-0 d-flex flex-row">
      <Sidebar/>
    <div>
      History
    </div>
    </div>
  );
};

export default History;