import React, { useState, useEffect } from "react";
import axios from "axios";
import DateS from "./startdate";
import DateE from "./enddate";
import ZoomModal from "./zoomModal";
import NotificationModal from "./notificationModal";
import Sidebar from "../sidebar/Sidebar";
import DatePicker from "react-datepicker";

const link = "http://localhost:3001";

const Checking = () => {
  const [dirArr, setDirArr] = useState([]);
  const [dev, setDev] = useState([]);
  const [devv, setDevv] = useState([]);
  const [imgSelected, setImgSelected] = useState(null);
  const [imageHeader, setImageHeader] = useState();
  const [selected, setSelected] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [zoomModal, setZoomModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const [notificationEmail, setNotificationEmail] = useState();

  const data = JSON.parse(atob(localStorage.getItem("token").split(".")[1]));

  const handleSelected = (e) => {
    setSelected(e);
  };

  const handleImgSelected = (c, i) => {
    setImageHeader(c);
    setImgSelected(link + i);
  };

  // if else statement is to be used to verify the selected dropdown.
  //

  const Checking = () => {
    if (selected !== "") {
      axios
        .post(link + "/api/users/images", {
          email: selected,
          startDate: startDate,
          endDate: endDate,
        },{
          headers: { authorization: `Bearer ` + localStorage.getItem("token") },
        })
        .then((res) => setDirArr(res.data))
        .catch((error) => console.log(error));
    } else alert("Select one user");
  };

  const getDev = () => {
    if (data.userType === "Admin") {
      axios
        .get(link + "/api/users",{
          headers: { authorization: `Bearer ` + localStorage.getItem("token") },
        })
        .then((res) => setDev(res.data))
        .catch((error) => console.log(error));
    } else {
      axios
        .get(link + "/api/users/" + data.id,{
          headers: { authorization: `Bearer ` + localStorage.getItem("token") },
        })
        .then((res) => setDevv(res.data))
        .catch((error) => console.log(error));
    }
  };

  const notification = (d) => {
    if(data.userType==="Admin")
    return <button
      className="ml-3 btn btn-dark"
      onClick={() => {
        setNotificationModal(true);
        setNotificationEmail(d.email);
        handleImgSelected(slicer(d.createdAt), d.imagePath);
      }}
    >
      Send Notificaion
    </button>
  };

  const show = () => {
    if (data.userType === "Admin") {
      return dev.map((d, i) => (
        <option key={i} value={d.email}>
          {d.name}
        </option>
      ));
    } else {
      return (
        <option value={devv.email !== undefined ? devv.email : ""}>
          {devv.name !== undefined ? devv.name : ""}
        </option>
      );
    }
  };

  const slicer = (d) => {
    return d.slice(0, 10) + " " + d.slice(11, 19);
  };

  useEffect(() => {
    getDev();
  }, []);

  return (
    <>
      <div className="row">
        <Sidebar />
        <div className="col-11">
          <div className="commonname">
            <h3>DATA VISUALISATION</h3>
          </div>
          <div className="row m-0 p-2 shadow1">
            <div className="col-2 p-0">
              <p className="m-0">Start Date</p>
              {/* <DateS setStartDate={setStartDate} /> */}
              <DatePicker
                selected={startDate}
                dateFormat="dd-MM-yyyy"
                onChange={setStartDate}
                maxDate={endDate}
                minDate={new Date("2022-06-01 0:0:0")}
              />
            </div>
            <div className="col-2 p-0">
              <p className="m-0">End Date</p>
              {/* <DateE setEndDate={setEndDate} /> */}
              <DatePicker
                selected={endDate}
                dateFormat="dd-MM-yyyy"
                onChange={setEndDate}
                maxDate={new Date()}
                selectsEnd
                startDate={startDate}
                minDate={startDate}
              />
            </div>
            <div className="col-4 p-0 px-4">
              <p className="m-0">Select user</p>
              <div className="input-group">
                <select
                  className="custom-select"
                  value={selected}
                  onChange={(e) => handleSelected(e.target.value)}
                >
                  <option>Choose...</option>
                  {show()}
                </select>
              </div>
            </div>

            <div className="col-2 p-0">
              <button className="mt-4 btn btn-dark" onClick={() => Checking()}>
                Check
              </button>
            </div>
            <div className="col-2 mt-3">
              <h4>Total images: {dirArr.length}</h4>
            </div>
          </div>

          <ZoomModal
            zoomModal={zoomModal}
            imgSelected={imgSelected}
            imageHeader={imageHeader}
            setImgSelected={setImgSelected}
            setZoomModal={setZoomModal}
          />
          <NotificationModal
            notificationModal={notificationModal}
            imgSelected={imgSelected}
            imageHeader={imageHeader}
            setImgSelected={setImgSelected}
            setNotificationModal={setNotificationModal}
            notificationEmail={notificationEmail}
          />
          <div
            className="row m-0 mt-3 p-2 d-flex flex-wrap overflow-auto align-content-start shadow1"
            style={{ height: "78vh" }}
          >
            {dirArr.map((d, i) => {
              return (
                <div key={i} className="col-3 p-2">
                  <div className="flex-direction-column m-0 p-2 shadow2">
                    <img
                      src={link + d.imagePath}
                      alt=""
                      className="img-fluid"
                    />

                    <div className="flex-direction-column my-3">
                      <button
                        className=" btn btn-secondary"
                        onClick={() => {
                          setZoomModal(true);
                          handleImgSelected(slicer(d.createdAt), d.imagePath);
                        }}
                      >
                        Zoom
                      </button>
                      {notification(d)}
                    </div>
                    <div className="flex-direction-columnmy-3">
                      <p className="my-2">{slicer(d.createdAt)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checking;
