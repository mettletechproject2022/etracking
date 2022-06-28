import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/sidebar/Sidebar";
import "../components/sidebar/sidebar.css";
import "../App.css";
import "../notification.css";

const History = () => {
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
  const columns = [
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
  return (
    <div className="container-fluid4 p-0 d-flex flex-row">
      <Sidebar />
      <div className="notification">
        <div className="head-notification">
          <h1>HISTORY</h1>
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

export default History;
