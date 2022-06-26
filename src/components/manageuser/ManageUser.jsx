import React from "react";
import axios from 'axios';
import {useState, useEffect} from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../sidebar/Sidebar'
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory,{Type} from "react-bootstrap-table2-editor";
import { useNavigate } from "react-router-dom";
import "./ManageUser.css";
import "../sidebar/sidebar.css";
import "../../App.css";

function ManageUser(){
    const [data, setData]= useState([]);
    useEffect(()=>{getData();
    },[]);
    const getData=()=>{
        axios("https://mocki.io/v1/895325ea-bdc4-41a5-b41f-429153b04a0a").then((res)=>{
                // console.log(res.data);
                setData(res.data);
    });
    };
    let select=[];
    const navigate=useNavigate();

    const handleCreate=()=>{
      console.log('create user clicked')
      navigate("/register")
    }

    const handleEdit=()=>{
      if(select===true){
      console.log('edit clicked')
      navigate("/edit")}
    };

    const selectRow={
        mode:"checkbox",
        clickToSelect: false,
        bgColor: '#F7C5C5',
        onSelect: (row, isSelect, rowIndex, e) => {
          console.log(row.id);
          select=isSelect;
        //   console.log(isSelect);
        //   console.log(rowIndex);
        //   console.log(e);
        },
    }
    function imageFormatter(cell, row){
      return (<img style={{width:80}} src={cell} alt={"identity"}/>)
    }
    const columns=[
        {
            dataField:"id",
            text:"ID",
            // sort:true
            editable:false,
            align: 'center',
            headerAlign: 'center'

        },
        {
            dataField:"email",
            text:"Email",
            editable:false,
            align: 'center',
            headerAlign: 'center'

        },
        {
            dataField:"name",
            text:"Name",
            align: 'center',
            headerAlign: 'center',
            style: {'white-space': 'nowrap'},
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
            style: {'min-width': '100px'},
            align: 'center',
            headerAlign: 'center',
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
            align: 'center',
            headerAlign: 'center',
            editable:false,
        },
        {
            dataField:"phone",
            text:"Phone No.",
            editable:true,
            align: 'center',
            headerAlign: 'center',
            validator:(newValue,row,column)=>{
              newValue=newValue.trim();
              if(newValue === ""){
                  return{
                      valid:false,
                      message:"Please Enter Phone Number"
                  }
              }
              else if(isNaN(newValue)){
                  return{
                      valid:false,
                      message:"Please enter Numbaric value"
                  }
              }
              else if(newValue.length < 10 || newValue.length > 10)
              {
                return{
                  valid:false,
                  message:"Phone number must be 10 Digits"
              }
              }
              return true;
          }
        },
        {
            dataField:"communicationaddress",
            text:"Communication Address",
            style: {'min-width': '250px'},
            // align: 'center',
            headerAlign: 'center',
            editable:true,
            editor: {
              type: Type.TEXTAREA
            },
            validator:(newValue,row,column)=>{
              newValue=newValue.trim();
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
            // align: 'center',
            headerAlign: 'center',
            style: {'min-width': '250px'},
            editable:true,
            editor: {
              type: Type.TEXTAREA
            },
            validator:(newValue,row,column)=>{
              newValue=newValue.trim();
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
            align: 'center',
            headerAlign: 'center',
            style: {'min-width': '120px'},            
            editor: {
              type: Type.DATE
            }
          },
          {
            dataField: 'gender',
            text: 'Gender',
            align: 'center',
            headerAlign: 'center',
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
            align: 'center',
            headerAlign: 'center',
            style: {'white-space': 'nowrap'},
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
            dataField:"salary",
            text:"Salary",
            editable:true,
            align: 'center',
            headerAlign: 'center',
            style: {'min-width': '100px'},
            validator:(newValue,row,column)=>{
              newValue=newValue.trim();
              if(newValue === ""){
                  return{
                      valid:false,
                      message:"Please Enter Salary"
                  }
              }
              else if(isNaN(newValue)){
                  return{
                      valid:false,
                      message:"Please enter Digits Only"
                  }
              }
              return true;
          }
        },
          {
            dataField: 'senior',
            text: 'Senior',
            align: 'center',
            headerAlign: 'center',
            style: {'white-space': 'nowrap'},
            editor: {
              type: Type.SELECT,
              options: [{
                value: 'Souvik Mondal',
                label: 'Souvik Mondal'
              }, {
                value: 'Mijanur Rahaman',
                label: 'Mijanur Rahaman'
              },]
            }
          },
          {
              dataField:'photo',
              text: "Photo",
              align: 'center',
            headerAlign: 'center',
              editable:false,
              formatter: imageFormatter             
          }

    ];

        return (
          <div className="container-fluid p-0 d-flex flex-row">
            <Sidebar/>
            <div className="manage">
                <div className="manageuserHead">
                    <h2>Manage Users</h2>
                </div>
                <div className="managemenu">
                    <button className="manageuser-button" onClick={handleCreate} >Create User</button>
                    <button className="manageuser-button11" onClick={handleEdit}>Edit</button>
                    <button className="manageuser-button1">Delete</button>
                </div>
                <div className="tablediv">
                    <BootstrapTable keyField="id" data={data} columns={columns} 
                    striped 
                    hover 
                    condensed
                    pagination = {paginationFactory({sizePerPage:6})}
                    cellEdit = {cellEditFactory({
                        mode:"click",
                        blurToSave:true,
                    })}
                    selectRow ={selectRow}
                    wrapperClasses="table-responsive"
                    rowClasses="text-nowrap"
                    />
                </div>
            </div>
            </div>
        );

}
export default ManageUser;
