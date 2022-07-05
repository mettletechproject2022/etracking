import React, { useState, useEffect } from "react";
import axios from "axios";
import DateS from "./startdate";
import DateE from "./enddate";
import ZoomModal from "./zoomModal";
import NotificationModal from "./notificationModal";
import Sidebar from "../sidebar/Sidebar";

const link = "http://localhost:3001";

const Checking = () => {
  const [dirArr, setDirArr] = useState([]);
  const [dev, setDev] = useState([]);
  const [devv, setDevv] = useState([]);
  const [imgSelected, setImgSelected] = useState(null);
  const [imageHeader, setImageHeader] = useState();
  const [selected, setSelected] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [zoomModal, setZoomModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const [notificationEmail, setNotificationEmail] = useState();

  const data = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));

  const handleSelected = (e) => {
    setSelected(e);
  };

  const handleImgSelected = (c, i) => {
    setImageHeader(c);
    setImgSelected(link + i);
  };

  const Checking = () => {
    axios
      .post(link + "/api/users/images", {
        email: selected,
        startDate: startDate,
        endDate: endDate,
      })
      .then((res) => setDirArr(res.data))
      .catch((error) => console.log(error));
  };

  const getDev = () => {
    if (data.userType === "Admin") {
      axios
        .get(link + "/api/users")
        .then((res) => setDev(res.data))
        .catch((error) => console.log(error));
    }
    else {
      axios
        .get(link + "/api/users/" + data.id)
        .then((res) => setDevv(res.data))
        .catch((error) => console.log(error));
    }

  };

  const show = () => {
    if (data.userType === "Admin") {
      return dev.map((d, i) => (
        <option key={i} value={d.email}>
          {d.name}
        </option>
      ))
    }

    else {
      return <option value={devv.email!==undefined?devv.email:""}>
        {devv.name!==undefined?devv.name:""}
      </option>
    }
 
  }

  const slicer = (d) => {
    return d.slice(0, 10) + " " + d.slice(11, 19);
  };

  useEffect(() => {
    Checking();
    getDev();
  }, []);

  return (
    <>
      <div className="row">
        <Sidebar />
        <div className="col-11">
          <div className="row m-0 p-2 shadow1">
            <div className="col-2 p-0">
              <p className="m-0">Start Date</p>
              <DateS setStartDate={setStartDate} />
            </div>
            <div className="col-2 p-0">
              <p className="m-0">End Date</p>
              <DateE setEndDate={setEndDate} />
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
            style={{ height: "85vh" }}
          >
            {dirArr.map((d, i) => {
              return (
                <div key={i} className="col-3 p-2">
                  <div className="row m-0 p-2 shadow2">
                    <img
                      src={link + d.imagePath}
                      alt=""
                      className="img-fluid"
                    />

                    <div className="my-3">
                      <button
                        className=" btn btn-secondary"
                        onClick={() => {
                          setZoomModal(true);
                          handleImgSelected(slicer(d.createdAt), d.imagePath);
                        }}
                      >
                        Zoom
                      </button>
                      <button
                        className="ml-3 btn btn-dark"
                        onClick={() => {
                          setNotificationModal(true);
                          setNotificationEmail(d.email);
                          handleImgSelected(slicer(d.createdAt), d.imagePath);
                        }}
                      >
                        Send Notificaion
                      </button>
                    </div>
                    <p className="my-2">{slicer(d.createdAt)}</p>
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
