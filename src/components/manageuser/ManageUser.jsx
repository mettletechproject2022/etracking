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
        axios("https://mocki.io/v1/cf7b2b39-505a-42a4-8d7e-fe7a1a263a23").then((res)=>{
                // console.log(res.data);
                setData(res.data);
    });
    };
    const selectRow={
        mode:"checkbox",
        clickToSelect: false,
        bgColor: '#F7C5C5',
        onSelect: (row, isSelect, rowIndex, e) => {
          console.log(row.id);
        //   console.log(isSelect);
        //   console.log(rowIndex);
        //   console.log(e);
        },
    }
    function imageFormatter(cell, row){
      return (<img style={{width:50}} src={cell}/>)
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
        {
            dataField: 'usertype',
            text: 'User Type',
            editor: {
              type: Type.SELECT,
              options: [{
                value: 'Admin',
                label: 'Admin'
              }, {
                value: 'User',
                label: 'User'
              },]
            }
          },
        {
            dataField:"age",
            text:"Age",
            editable:false,
        },
        {
            dataField:"phone",
            text:"Phone Number",
            editable:true,
        },
        {
            dataField:"communicationaddress",
            text:"Communication Address",
            editable:true,
            validator:(newValue,row,column)=>{
              if(newValue === ""){
                  return{
                      valid:false,
                      message:"Please Enter Communicatipon Address"
                  }
              }
              return true;}
        },
        {
            dataField:"permanentaddress",
            text:"Permanent Address",
            editable:true,
            validator:(newValue,row,column)=>{
              if(newValue === ""){
                  return{
                      valid:false,
                      message:"Please Enter Permanent Address"
                  }
              }
              return true;}
        },
        {
            dataField: 'dob',
            text: 'DOB',
            type: 'date',
            formatter: (cell) => {
              let dateObj = cell;
              if (typeof cell !== 'object') {
                dateObj = new Date(cell);
              }
              return `${('0' + dateObj.getUTCDate()).slice(-2)}/${('0' + (dateObj.getUTCMonth() + 1)).slice(-2)}/${dateObj.getUTCFullYear()}`;
            },
            editor: {
              type: Type.DATE
            }
          },
          {
            dataField: 'gender',
            text: 'Gender',
            editor: {
              type: Type.SELECT,
              options: [{
                value: 'Male',
                label: 'Male'
              }, {
                value: 'Female',
                label: 'Female'
              }, {
                value: 'Others',
                label: 'Others'
              },]
            }
          },
          {
            dataField: 'designation',
            text: 'Designation',
            editor: {
              type: Type.SELECT,
              options: [{
                value: 'Frontend Developer',
                label: 'Frontend Developer'
              }, {
                value: 'Backend Developer',
                label: 'Backend Developer'
              }, {
                value: 'Database Manager',
                label: 'Database Manager'
              },]
            }
          },
          {
              dataField:'photo',
              text: "Photo",
              editable:false,
              formatter: imageFormatter             
          }

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