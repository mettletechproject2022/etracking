import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/sidebar/Sidebar";
import "../components/sidebar/sidebar.css";
import "../App.css";
// import "../notification.css";
// import datatime from "./Datetime";


const Notification = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios("https://mocki.io/v1/1142f03d-c741-4879-9bd4-aa576a03c58a").then(
      (res) => {
        // console.log(res.data);
        setData(res.data);
      }
    );
  };
  const column = [
    {
      dataField: "id",
      text: "Sl No.",
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      dataField: "date",
      text: "Date",
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      dataField: "notification",
      text: "In Screenshot",
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      dataField: "message",
      text: "Notification Message",
      editable: false,
      align: "center",
      headerAlign: "center",
    },
  ];
const columns = [
  { dataField: 'id', text: 'Id', sort: true },
  { dataField: 'name', text: 'Name', sort: true },
  { dataField: 'animal', text: 'Animal', sort: true }
];

const defaultSorted = [{
  dataField: 'name',
  order: 'desc'
}];
  return (
    <div className="container-fluid4 p-0 d-flex flex-row">
      <Sidebar />
      <div className="notification">
        <div className="head-notification">
          <h1>NOTIFICATION</h1>
          <input type="text"placeholder="Search.."className="search"/>
        </div>
        <div className="notify">
          <BootstrapTable
            keyField="id"
            data={data}
            columns={columns}
            striped
            condensed
            wrapperClasses="table-responsive"
            rowClasses="text-nowrap"
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;



// function Notification() {

//   const Massages = [
//     { id: 1, name: 'George', Massage: 'hi' },
//     { id: 2, name: 'Jeffrey', Massage: 'halo' },
//     { id: 3, name: 'Alice', Massage: 'hi' },
//     { id: 4, name: 'Alice', Massage: 'halo' }
//   ];

//   const columns = [
//     { dataField: 'id', text: 'Id', sort: true },
//     { dataField: 'name', text: 'Name', sort: true },
//     { dataField: 'Massage', text: 'Massage', sort: true }
//   ];

//   const defaultSorted = [{
//     dataField: 'name',
//     order: 'desc'
//   }];
  

//   return (
//     <div className="Notification">
//       <h5>Notification</h5>

//       <BootstrapTable bootstrap4 keyField='id' data={Massages} columns={columns} defaultSorted={defaultSorted} />
//     </div>
//   );
// }

// export default Notification;