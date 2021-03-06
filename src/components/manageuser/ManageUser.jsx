import { useNavigate, Navigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import axios from'axios';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Sidebar from "../sidebar/Sidebar";
import "../sidebar/sidebar.css";


const ManageUser = () => {
  const link = "http://localhost:3001";
  const [data, setData] = useState([]);
  const [ setSelected] = useState();
  const [gridApi, setGridApi] = useState(null);
  
  var selected=[];
  var length=0;
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/register");
  };
  const handleEdit = () => {
    if(length===0){
      alert("please select");
    }else if(length>1){
      alert("please select only one");
    }else{
      console.log(selected[0].id);
    console.log(length);
    // navigate("/edit");
    }
    
  };


  const handleDelete = () => {
    if (selected !== null) {
      axios
        .delete(link + "/api/users/" + selected[0].id)
        .then((res) => console.log(res.data));

      const modData = data.filter((item) => item.id !== selected);
      setData(modData);
      // setSelected(null);
      // alert(res.data);
    }
  };


  const confirmDelete = () => {
    if(length===0){
      alert("please select");
    }else{
    console.log(selected);
    console.log(length);
     confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to do this?",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleDelete(),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
    // navigate("/register");
    }
  };
  

  const columns = [
    { headerName: "ID", field: "id", filter: "agTextColumnFilter", headerCheckboxSelection: true, checkboxSelection: true },
    { headerName: "Name", field: "name", filter: "agTextColumnFilter",resizable: true,minWidth:250 },
    { headerName: "Email", field: "email", filter: "agTextColumnFilter",resizable: true,minWidth:260 },
    { headerName: "Directory", field: "dirAccess", filter: "agTextColumnFilter", resizable: true,minWidth:510 }
  ]

  // useEffect(() => {
  //   axios.get('http://localhost:3001/api/users',
  //   {headers:{authorization:`Bearer `+localStorage.getItem('token')}})
  // },)

  // const myHeaders = new Headers();
  // myHeaders.append('Content-Type', 'application/json');
  // myHeaders.append('Authorization', +localStorage.getItem('token'));
  // return fetch('http://localhost:3001/api/users', {
  //   method: 'GET',
  //   headers: myHeaders,
  // })

  const datasource = {
    getRows(params) {
      console.log(JSON.stringify(params.request, null, 1));
      const { startRow, endRow, filterModel, sortModel } = params.request
      let url = `http://localhost:3001/api/users?`
      //Sorting
      if (sortModel.length) {
        const { colId, sort } = sortModel[0]
        url += `_sort=${colId}&_order=${sort}&`
      }
      //Filtering
      const filterKeys = Object.keys(filterModel)
      filterKeys.forEach(filter => {
        url += `${filter}=${filterModel[filter].filter}&`
      })
      //Pagination
      // url += `_start=${startRow}&_end=${endRow}`
      // fetch(url)
      //   .then(httpResponse => httpResponse.json())
      fetch(url,{
        method:'get',
        headers:{authorization:`Bearer `+ localStorage.getItem('token')}})
      .then(httpResponse=>httpResponse.json())
      .then(response => {
        params.successCallback(response);
      })
      .catch(error => {
        console.error(error);
        params.failCallback();
      })

    }
  };

  const onGridReady = (params) => {
    setGridApi(params);
    // register datasource with the grid
    params.api.setServerSideDatasource(datasource);
  }

  const rowSelectionType = 'multiple'

  //function will trigger once selection changed
  const onSelectionChanged = (event) => {
    // console.log(event.api.getSelectedRows());
    selected= event.api.getSelectedRows();
    length=event.api.getSelectedRows().length;
  }

  //function to allow selection to row
  const isRowSelectable = (node) => {
    return node.data ? (node.data.id % 2 === 0 || node.data.email.includes('.org')) : false
  }
  return (
    <>
      <div className="row">
        <Sidebar />
        <div className='col-11'>
          <div className="commonname">
            <h3>MANAGE USER</h3>
          </div>
          <div className="row my-3">
            <button
              className="ml-3 btn btn-success"
              onClick={() => handleCreate()}
            >
              Create User
            </button>
            <button
              // disabled={length === 0 ? true : false}
              className="ml-3 btn btn-warning"
            onClick={() => handleEdit()}
            >
              Edit
            </button>
            <button
              // disabled={length === 0 ? true : false}
              className="ml-3 btn btn-danger"
            onClick={() => confirmDelete()}
            >
              Delete
            </button>
          </div>
          <div className="ag-theme-alpine" style={{ height: '500px' }}>
            <AgGridReact
              columnDefs={columns}
              pagination={true}
              paginationPageSize={8}
              domLayout="autoHeight"
              rowModelType="serverSide"
              onGridReady={onGridReady}
              defaultColDef={{ filter: true, floatingFilter: true, sortable: true }}
              rowSelection={rowSelectionType}
              onSelectionChanged={onSelectionChanged}
              rowMultiSelectWithClick={true}
            // isRowSelectable={isRowSelectable}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ManageUser;