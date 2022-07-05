import { useState } from "react";
import axios from "axios";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

const link = "http://localhost:3001";

const NotificaionModal = (props) => {
  const [description, setDescription] = useState("");
  const [confirmMsg, setConfirmMsg] = useState("");

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const sendNotification = () => {
    axios
      .post(link + "/api/users/sendemail", {
        email: props.notificationEmail,
        description: description,
        image: props.imgSelected,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    
    setConfirmMsg("Notification Sent");
    setTimeout(() => {
      setConfirmMsg("");
      setDescription("");
      props.setNotificationModal(false);
    }, 1000);
  };

  return (
    <PureModal
      width="900px"
      header={props.imageHeader}
      footer={
        <div className="d-flex">
          <button
            className="btn btn-dark"
            onClick={() => props.setNotificationModal(false)}
          >
            Cancel
          </button>
          <button
            className="ml-3 btn btn-dark"
            onClick={() => sendNotification()}
          >
            Send
          </button>
          <label className="ml-auto">{confirmMsg}</label>
        </div>
      }
      isOpen={props.notificationModal}
      onClose={() => {
        props.setNotificationModal(false);
        return true;
      }}
    >
      <h5>email: {props.notificationEmail}</h5>

      <img
        src={props.imgSelected}
        alt=""
        className="img-fluid"
        style={{ height: "55vh" }}
      />
      <p className="my-2">Description</p>
      <textarea
        className="form-control"
        aria-label="With textarea"
        type="text"
        value={description}
        onChange={(e) => handleDescriptionChange(e)}
      />
    </PureModal>
  );
};

export default NotificaionModal;
