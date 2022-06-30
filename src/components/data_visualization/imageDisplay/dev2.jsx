import "./dev.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import "../../sidebar/sidebar.css";
import "../../../App.css";
// import { Modal } from "bootstrap";
import { Modal, ModalHeader,ModalBody,Row,Col} from "reactstrap";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";


const Dev2 = () => {
  const [modal, setmodal] = useState(false)

  // const navigate = useNavigate();


  const success = () => {
    alert('Message sent successfully')
    // navigate("/dev2");
  };

  return (
    <div className="container-fluid9 p-0 d-flex flex-row">
      <Sidebar />
      <div className="con">
        <h1>Developer 2</h1>
        <div className="sec1">
          <img src="images/dev2/1652163659947.png" className="mojii" alt="images" />
          <div className="overlay">
            <div className="cont">
              <a href="images/dev2/1652163659947.png" target="_blank">Zoom</a>

              {/* Pop-up Message code */}
              {/* <div> */}
              <Modal
                size='lg'
                isOpen={modal}
                toggle={() => setmodal(!modal)}
              >

                <ModalHeader
                  toggle={() => setmodal(!modal)}
                >
                  Comments
                </ModalHeader>

                <ModalBody>
                  <form action="">
                    <Row>
                      <Col lg={12}>
                        <div>
                          <label htmlFor="name">Name:</label>
<input type="text" className="form-control" placeholder="enter name"/>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg={12}>
                        <div>
                          <label htmlFor="name">Message:</label>
<input type="text" className="form-control" placeholder="enter message"/>
                        </div>
                      </Col>
                    </Row>
                  </form>
                  <button className="button mt-3" style={{color: "green"}} onClick={()=>success()}>Submit</button>
                </ModalBody>

              </Modal>
              <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
              {/* </div> */}

              {/* pop-up message code end */}
            </div>
          </div>
        </div>
        <div className="sec1">
          <img src="images/dev2/1652164143154.png" className="mojii" alt="images" />
          <div className="overlay">
            <div className="cont">
              <a href="images/dev2/1652164143154.png" target="_blank">Zoom</a>
              <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
            </div>
          </div>
        </div>
        <div className="sec1">
          <img src="images/dev2/1652164745232.png" className="mojii" alt="images" />
          <div className="overlay">
            <div className="cont">
              <a href="images/dev2/1652164745232.png" target="_blank">Zoom</a>
              <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
            </div>
          </div>
        </div>
        <div className="sec1">
          <img src="images/dev2/1652165348396.png" className="mojii" alt="images" />
          <div className="overlay">
            <div className="cont">
              <a href="images/dev2/1652165348396.png" target="_blank">Zoom</a>
              <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dev2;