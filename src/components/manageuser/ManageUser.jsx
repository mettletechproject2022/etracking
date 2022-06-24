import React from "react";
import axios from 'axios';
import {useState, useEffect} from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import 'bootstrap/dist/css/bootstrap.min.css';
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory,{Type} from "react-bootstrap-table2-editor";
import "./ManageUser.css";

function ManageUser(){
    const [data, setData]= useState([]);
    useEffect(()=>{getData();
    },[]);
    const getData=()=>{
        axios("https://mocki.io/v1/1168b6c4-f1f6-4e28-8f0d-504f2d48dca7").then((res)=>{
                // console.log(res.data);
                setData(res.data);
    });
    };
    const selectRow={
        mode:"checkbox",
    }
    const columns=[
        {
            dataField:"id",
            text:"ID",
            // sort:true
            editable:false,
        },
        {
            dataField:"email",
            text:"Email",
            editable:false,
        },
        {
            dataField:"name",
            text:"Name",
            // sort:true,
            validator:(newValue,row,column)=>{
                if(newValue === ""){
                    return{
                        valid:false,
                        message:"Please Enter Name"
                    }
                }
                else if(!isNaN(newValue)){
                    return{
                        valid:false,
                        message:"Please enter Character value"
                    }
                }
                return true;
            }
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
                    <BootstrapTable keyField="id" data={data} columns={columns} 
                    striped 
                    hover 
                    condensed
                    pagination = {paginationFactory()}
                    cellEdit = {cellEditFactory({
                        mode:"click",
                        blurToSave:true,
                    })}
                    selectRow ={selectRow}
                    />
                </div>
            </div>
        );

}
export default ManageUser;