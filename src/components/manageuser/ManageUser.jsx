import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import Sidebar from "../sidebar/Sidebar";
import paginationFactory from "react-bootstrap-table2-paginator";

// import "../sidebar/sidebar.css";

function ManageUser() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState();

  const link = "http://localhost:3001";

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(link + "/api/users").then((res) => setData(res.data));
  };
  let select = [];
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/register");
  };

  const handleEdit = () => {
    if (selected !== null) {
      navigate("/edit");
    }
  };

  const handleDelete = () => {
    axios
      .delete(link + "/api/users/" + selected)
      .then((res) => console.log(res.data));

    const modData = data.filter((item) => item.id !== selected);
    setData(modData);
    setSelected(null);
  };

  const selectRow = {
    mode: "checkbox",
    clickToSelect: false,
    bgColor: "#F7C5C5",
    onSelect: (row, isSelect, rowIndex, e) => {
      localStorage.setItem("selected", row.id);
      localStorage.setItem("details", JSON.stringify(row));
      setSelected(row.id);
      select = isSelect;
        console.log(row);
      //   console.log(rowIndex);
      //   console.log(e);
    },
  };

  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      dataField: "email",
      text: "Email",
      editable: false,
      sort: true,
      align: "center",
      headerAlign: "center",
    },
    {
      dataField: "name",
      text: "Name",
      align: "center",
      editable: false,
      headerAlign: "center",
      style: { whiteSpace: "nowrap" },
      sort: true,
    },
    {
      dataField: "userType",
      text: "User Type",
      style: { minWidth: "100px" },
      align: "center",
      editable: false,
      headerAlign: "center",
    },
    {
      dataField: "directory",
      text: "Directory",
      style: { minWidth: "100px" },
      align: "center",
      headerAlign: "center",
      editable: false,
    },
  ];

  return (
    <div className="row">
      <Sidebar />
      <div className="col-11">
        <div>
          <h3>MANAGE USER</h3>
        </div>
        <div className="row my-3">
          <button
            className="ml-3 btn btn-success"
            onClick={() => handleCreate()}
          >
            Create User
          </button>
          <button className="ml-3 btn btn-warning" onClick={() => handleEdit()}>
            Edit
          </button>
          <button
            className="ml-3 btn btn-danger"
            onClick={() => handleDelete()}
          >
            Delete
          </button>
        </div>

        <BootstrapTable
          keyField="id"
          data={data}
          columns={columns}
          striped
          hover
          condensed
          pagination={paginationFactory({ sizePerPage: 10 })}
          selectRow={selectRow}
          wrapperClasses="table-responsive"
          rowClasses="text-nowrap"
        />
      </div>
    </div>
  );
}
export default ManageUser;