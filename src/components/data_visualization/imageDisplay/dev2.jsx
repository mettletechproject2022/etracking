import "./dev.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import "../../sidebar/sidebar.css";
import "../../../App.css";

const Dev2 = () => {
  return (
    <div className="container-fluid9 p-0 d-flex flex-row">
    <Sidebar/>
    <div className="con">
      <h1>Developer 2</h1>
      <div className="sec1">
          <img src="images/dev2/1652163659947.png" className="mojii" alt="images" />
          <div className="overlay">
            <div className="cont">
              <a href="images/dev2/1652163659947.png" target="_blank">Zoom</a>
              <a href="#">Comments</a>
            </div>
          </div>
      </div>
      <div className="sec1">
          <img src="images/dev2/1652164143154.png" className="mojii" alt="images" />
          <div className="overlay">
            <div className="cont">
              <a href="images/dev2/1652164143154.png" target="_blank">Zoom</a>
              <a href="#">Comments</a>
            </div>
          </div>
      </div>
      <div className="sec1">
          <img src="images/dev2/1652164745232.png" className="mojii" alt="images" />
          <div className="overlay">
            <div className="cont">
              <a href="images/dev2/1652164745232.png" target="_blank">Zoom</a>
              <a href="#">Comments</a>
            </div>
          </div>
      </div>
      <div className="sec1">
          <img src="images/dev2/1652165348396.png" className="mojii" alt="images" />
          <div className="overlay">
            <div className="cont">
              <a href="images/dev2/1652165348396.png" target="_blank">Zoom</a>
              <a href="#">Comments</a>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
};
export default Dev2;