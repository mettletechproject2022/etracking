import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Sidebar from "../sidebar/Sidebar";
import "../sidebar/sidebar.css";

const ManageUser = () => {
  const [gridApi, setGridApi] = useState(null);

  const columns = [
    { headerName: "ID", field: "id", filter: "agTextColumnFilter",checkboxSelection:true,headerCheckboxSelection:true },
    { headerName: "Name", field: "name", filter: "agTextColumnFilter" },
    { headerName: "Email", field: "email", filter: "agTextColumnFilter" },
    { headerName: "Directory", field: "dirAccess", filter: "agTextColumnFilter" },
  ]
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
      url += `_start=${startRow}&_end=${endRow}`
      fetch(url)
        .then(httpResponse => httpResponse.json())
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

  const rowSelectionType='multiple'

  //function will trigger once selection changed
  const onSelectionChanged=(event)=>{
    console.log(event.api.getSelectedRows())
  }

  //function to allow selection to row
  const isRowSelectable=(node)=>{
    return node.data?(node.data.id%2===0|| node.data.email.includes('.org')):false 
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
                // onClick={() => handleCreate()}
              >
                Create User
              </button>
              <button
                // disabled={selected === null ? true : false}
                className="ml-3 btn btn-warning"
                // onClick={() => handleEdit()}
              >
                Edit
              </button>
              <button
                // disabled={selected === null ? true : false}
                className="ml-3 btn btn-danger"
                // onClick={() => confirmDelete()}
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