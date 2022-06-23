import React from "react";
import axios from 'axios';
import {useState, useEffect} from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ManageUser.css";

function ManageUser(){
    const [data, setData]= useState([]);
    useEffect(()=>{getData();
    },[]);
    const getData=()=>{
        axios("https://jsonplaceholder.typicode.com/comments").then((res)=>{
                console.log(res.data);
                setData(res.data);
    });
    };
    const columns=[
        {
            dataField:"postId",
            text:"ID"
        },
        {
            dataField:"email",
            text:"Email"
        },
        {
            dataField:"name",
            text:"Name"
        },
    ];

        return (
            <div className="manage">
                <div className="manageuserHead">
                    <h2>Manage Users</h2>
                </div>
                <div className="managemenu">
                    <button className="manageuser-button">Create User</button>
                    <button className="manageuser-button1">Edit</button>
                    <button className="manageuser-button1">Delete</button>
                </div>
                <div className="tablediv">
                    <BootstrapTable keyField="id" data={data} columns={columns} striped hover condensed/>
                </div>
            </div>
        );

}
export default ManageUser;