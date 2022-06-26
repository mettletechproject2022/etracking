import "./dev.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import "../../sidebar/sidebar.css";
import "../../../App.css";

const Dev1 = () => {
  return (
    <div className="container-fluid9 p-0 d-flex flex-row">
    <Sidebar/>
    <div className="con">
      <h1>Developer 1</h1>
      <div className="sec">
          <img src="images/dev1/1648560446131.png" className="mojii" alt="images" />
      </div>
      <div className="sec">
          <img src="images/dev1/1648560869930.png" className="mojii" alt="images" />
      </div>
      <div className="sec">
          <img src="images/dev1/1648561358819.png" className="mojii" alt="images" />
      </div>
      <div className="sec">
          <img src="images/dev1/1648562446572.png" className="mojii" alt="images" />
      </div>
    </div>
    </div>
  );
};
export default Dev1;