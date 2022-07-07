import { useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Sidebar from "../sidebar/Sidebar";
import "../sidebar/sidebar.css";

function ManageUser() {
  const [data, setData] = useState([]);
  const [predata, setPreData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchToggle,setSearchToggle]=useState(false);
  const [selected, setSelected] = useState();
  const userType = JSON.parse(
    atob(localStorage.getItem("token").split(".")[1])
  ).userType;
  const [view, setView] = useState(false);
  const [multiselect, setMultiSelect] = useState([]);
  const link = "http://localhost:3001";

  useEffect(() => {
    if (userType === "Admin") {
      getData();
      setView(true);
      setSelected(null);
    } else {
      setView(false);
      navigate("/unauth");
    }
  }, []);

  const navigate = useNavigate();

  const getData = () => {
    axios.get(link + "/api/users").then((res) => {
      setData(res.data);
      setPreData(res.data);
    });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searching = (s) => {
    setSearchToggle(true);
    const modData = data.filter((d) => d.name.toLowerCase().includes(s.toLowerCase()));
    setData(modData);
  };

  const close=()=>{
    setSearch("");
    setSearchToggle(false);
    setData(predata);
  }

  const handleCreate = () => {
    navigate("/register");
  };

  const handleEdit = () => {
    if (selected !== null) {
      navigate("/edit");
    }
  };

  const handleDelete = () => {
    if (selected !== null) {
      axios
        .delete(link + "/api/users/" + selected)
        .then((res) => console.log(res.data));

      const modData = data.filter((item) => item.id !== selected);
      setData(modData);
      setSelected(null);
    }
  };
  const confirmDelete = () => {
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
  };
  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 10,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
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
    mode: "radio",
    clickToSelect: false,
    bgColor: "#F7C5C5",
    onSelect: (row, isSelect, rowIndex, e) => {
      localStorage.setItem("selected", row.id);
      localStorage.setItem("details", JSON.stringify(row));
      setSelected(row.id);

      setMultiSelect((multiselect) => [...multiselect, row.id]);

      if (multiselect.length >= 1) {
        multiselect.length = 0;
        alert("Select only one");
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
      dataField: "name",
      text: "Name",
      align: "center",
      editable: false,
      headerAlign: "center",
      style: { whiteSpace: "nowrap" },
      sort: true,
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
      dataField: "userType",
      text: "User Type",
      style: { minWidth: "100px" },
      align: "center",
      editable: false,
      headerAlign: "center",
    },
    {
      dataField: "dirAccess",
      text: "Access Directory",
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
                disabled={selected === null ? true : false}
                className="ml-3 btn btn-warning"
                onClick={() => handleEdit()}
              >
                Edit
              </button>
              <button
                disabled={selected === null ? true : false}
                className="ml-3 btn btn-danger"
                onClick={() => confirmDelete()}
              >
                Delete
              </button>
              <form className="col-4 ml-auto form-inline my-2 my-lg-0" onSubmit={(e)=>e.preventDefault()}>
                <input
                  className="form-control mr-2 col-9"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e)=>handleSearch(e)}
                />
               {!searchToggle? <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                  onClick={()=>{searching(search)}}
              
                >
                  Search
                </button>:
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                  onClick={()=>{close()}}
              
                >
                  Close
                </button>}
              </form>
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
