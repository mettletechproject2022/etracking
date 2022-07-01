import "./dev.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import "../../sidebar/sidebar.css";
import "../../../App.css";
// import { Modal } from "bootstrap";
import { Modal, ModalHeader,ModalBody,Row,Col} from "reactstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Dev4 = () => {
  const [modal, setmodal] = useState(false)

  const navigate = useNavigate();

  const history = useNavigate()


  const success = () => {
    alert('Message sent successfully')
    // navigate("/dev4");
  };

  return (
    <>
     <button className="butt" onClick={() => history(-1)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></button>
    <div className="container-fluid9 p-0 d-flex flex-row">
      <Sidebar />
      <div className="con">
        <h1>Developer 4</h1>
        <div className="sec1">
          <img src="images/dev4/1652163659947.png" className="mojii" alt="images" />
          <div className="overlay">
            <div className="cont">
              <a href="images/dev4/1652163659947.png" target="_blank">Zoom</a>

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
          <img src="images/dev4/1652164143154.png" className="mojii" alt="images" />
          <div className="overlay">
            <div className="cont">
              <a href="images/dev4/1652164143154.png" target="_blank">Zoom</a>
              <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
            </div>
          </div>
        </div>
        <div className="sec1">
          <img src="images/dev4/1652164745232.png" className="mojii" alt="images" />
          <div className="overlay">
            <div className="cont">
              <a href="images/dev4/1652164745232.png" target="_blank">Zoom</a>
              <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
            </div>
          </div>
        </div>
        <div className="sec1">
          <img src="images/dev4/1652165348396.png" className="mojii" alt="images" />
          <div className="overlay">
            <div className="cont">
              <a href="images/dev4/1652165348396.png" target="_blank">Zoom</a>
              <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Dev4;