import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Sidebar from "../sidebar/Sidebar";
import "../sidebar/sidebar.css";

function ManageUser() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState();
  const userType = JSON.parse(
    atob(localStorage.getItem("token").split(".")[1])
  ).userType;
  const [view, setView] = useState(false);
  const [multiselect,setMultiSelect] = useState([]);
  const link = "http://localhost:3001";

  useEffect(() => {
    if (userType === "Admin") {
      getData();
      setView(true);
    } else {
      setView(false);
      navigate("/unauth");
    }
  }, []);

  const getData = () => {
    axios.get(link + "/api/users").then((res) => setData(res.data));
  };

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
  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    // onPageChange: function (page, sizePerPage) {
    //   console.log('page', page);
    //   console.log('sizePerPage', sizePerPage);
    // },
    // onSizePerPageChange: function (page, sizePerPage) {
    //   console.log('page', page);
    //   console.log('sizePerPage', sizePerPage);
    // }
  });
  const selectRow = {
    mode: "checkbox",
    clickToSelect: false,
    bgColor: "#F7C5C5",
    onSelect: (row, isSelect, rowIndex, e) => {
      localStorage.setItem("selected", row.id);
      localStorage.setItem("details", JSON.stringify(row));
      setSelected(row.id);
      setMultiSelect(multiselect=>[...multiselect,row.id]);
      if(multiselect.length>1){
        alert("Cannot edit as multiple checkbox are selected");
        setMultiSelect([])
      }
     
      
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
    <>
      {view ? (
        <div className="row">
          <Sidebar />
          <div className="col-11">
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
              
                className="ml-3 btn btn-warning"
                onClick={() => handleEdit()}
              >
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
              // pagination={paginationFactory({ sizePerPage: 10 })}
              pagination={pagination}
              selectRow={selectRow}
              wrapperClasses="table-responsive"
              rowClasses="text-nowrap"
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
export default ManageUser;
