
import "./dev.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import "../../sidebar/sidebar.css";
import "../../../App.css";
// import { Modal } from "bootstrap";
import { Modal, ModalHeader,ModalBody,Row,Col} from "reactstrap";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Dev1 = () => {
  const [modal, setmodal] = useState(false)

  // const navigate = useNavigate();


  const success = () => {
    alert('Message sent successfully')
    // navigate("/dev2");
  };

  return (
    <>
      {/* <button className="butt" onClick={() => history(-1)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></button> */}
      <div className="container-fluid9 p-0 d-flex flex-row">
        <Sidebar />
        <div className="con">
          <h1>Developer 1</h1>
          <div className="sec1">
            <img src="images/Dev1/1648560446131.png" className="mojii" alt="images" />
            <div className="overlay">
              <div className="cont">
                <a href="images/Dev1/1648560446131.png" target="_blank">Zoom</a>

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
            <img src="images/Dev1/1648562446572.png" className="mojii" alt="images" />
            <div className="overlay">
              <div className="cont">
                <a href="images/Dev1/1648562446572.png" target="_blank">Zoom</a>
                <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
              </div>
            </div>
          </div>
          <div className="sec1">
            <img src="images/Dev1/1648561358819.png" className="mojii" alt="images" />
            <div className="overlay">
              <div className="cont">
                <a href="images/Dev1/1648561358819.png" target="_blank">Zoom</a>
                <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
              </div>
            </div>
          </div>
          <div className="sec1">
            <img src="images/Dev1/1648560869930.png" className="mojii" alt="images" />
            <div className="overlay">
              <div className="cont">
                <a href="images/Dev1/1648560869930.png" target="_blank">Zoom</a>
                <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
              </div>
            </div>
          </div>
          <div className="sec1">
            <img src="images/Dev1/1648563050215.png" className="mojii" alt="images" />
            <div className="overlay">
              <div className="cont">
                <a href="images/Dev1/1648563050215.png" target="_blank">Zoom</a>
                <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
              </div>
            </div>
          </div>
          <div className="sec1">
            <img src="images/Dev1/1648563474647.png" className="mojii" alt="images" />
            <div className="overlay">
              <div className="cont">
                <a href="images/Dev1/1648563474647.png" target="_blank">Zoom</a>
                <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
              </div>
            </div>
          </div>
          <div className="sec1">
            <img src="images/Dev1/1648564078314.png" className="mojii" alt="images" />
            <div className="overlay">
              <div className="cont">
                <a href="images/Dev1/1648564078314.png" target="_blank">Zoom</a>
                <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
              </div>
            </div>
          </div>
          <div className="sec1">
            <img src="images/Dev1/1648564991440.png" className="mojii" alt="images" />
            <div className="overlay">
              <div className="cont">
                <a href="images/Dev1/1648564991440.png" target="_blank">Zoom</a>
                <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
              </div>
            </div>
          </div>
          <div className="sec1">
            <img src="images/Dev1/1648565419966.png" className="mojii" alt="images" />
            <div className="overlay">
              <div className="cont">
                <a href="images/Dev1/1648565419966.png" target="_blank">Zoom</a>
                <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
              </div>
            </div>
          </div>
          <div className="sec1">
            <img src="images/Dev1/1648565844032.png" className="mojii" alt="images" />
            <div className="overlay">
              <div className="cont">
                <a href="images/Dev1/1648565844032.png" target="_blank">Zoom</a>
                <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
              </div>
            </div>
          </div>
          <div className="sec1">
            <img src="images/Dev1/1648566267787.png" className="mojii" alt="images" />
            <div className="overlay">
              <div className="cont">
                <a href="images/Dev1/1648566267787.png" target="_blank">Zoom</a>
                <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
              </div>
            </div>
          </div>
          <div className="sec1">
            <img src="images/Dev1/1648566810920.png" className="mojii" alt="images" />
            <div className="overlay">
              <div className="cont">
                <a href="images/Dev1/1648566810920.png" target="_blank">Zoom</a>
                <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
              </div>
            </div>
          </div>
          <div className="sec1">
            <img src="images/Dev1/1648567413997.png" className="mojii" alt="images" />
            <div className="overlay">
              <div className="cont">
                <a href="images/Dev1/1648567413997.png" target="_blank">Zoom</a>
                <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
              </div>
            </div>
          </div>
          <div className="sec1">
            <img src="images/Dev1/1648567897377.png" className="mojii" alt="images" />
            <div className="overlay">
              <div className="cont">
                <a href="images/Dev1/1648567897377.png" target="_blank">Zoom</a>
                <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
              </div>
            </div>
          </div>
          <div className="sec1">
            <img src="images/Dev1/1648568320645.png" className="mojii" alt="images" />
            <div className="overlay">
              <div className="cont">
                <a href="images/Dev1/1648568320645.png" target="_blank">Zoom</a>
                <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
              </div>
            </div>
          </div>
          <div className="sec1">
            <img src="images/Dev1/1648568863730.png" className="mojii" alt="images" />
            <div className="overlay">
              <div className="cont">
                <a href="images/Dev1/1648568863730.png" target="_blank">Zoom</a>
                <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
              </div>
            </div>
          </div>
          <div className="sec1">
            <img src="images/Dev1/1648569407301.png" className="mojii" alt="images" />
            <div className="overlay">
              <div className="cont">
                <a href="images/Dev1/1648569407301.png" target="_blank">Zoom</a>
                <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
              </div>
            </div>
          </div>
          <div className="sec1">
            <img src="images/Dev1/1648569890803.png" className="mojii" alt="images" />
            <div className="overlay">
              <div className="cont">
                <a href="images/Dev1/1648569890803.png" target="_blank">Zoom</a>
                <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
              </div>
            </div>
          </div>
          <div className="sec1">
            <img src="images/Dev1/1648570374421.png" className="mojii" alt="images" />
            <div className="overlay">
              <div className="cont">
                <a href="images/Dev1/1648570374421.png" target="_blank">Zoom</a>
                <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
              </div>
            </div>
          </div>
          <div className="sec1">
            <img src="images/Dev1/1648570977989.png" className="mojii" alt="images" />
            <div className="overlay">
              <div className="cont">
                <a href="images/Dev1/1648570977989.png" target="_blank">Zoom</a>
                <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
              </div>
            </div>
          </div>
          <div className="sec1">
            <img src="images/Dev1/1648571581008.png" className="mojii" alt="images" />
            <div className="overlay">
              <div className="cont">
                <a href="images/Dev1/1648571581008.png" target="_blank">Zoom</a>
                <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
              </div>
            </div>
          </div>
          <div className="sec1">
            <img src="images/Dev1/1648572005386.png" className="mojii" alt="images" />
            <div className="overlay">
              <div className="cont">
                <a href="images/Dev1/1648572005386.png" target="_blank">Zoom</a>
                <a href="#" className="button" onClick={() => setmodal(true)}>Comments</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dev1;