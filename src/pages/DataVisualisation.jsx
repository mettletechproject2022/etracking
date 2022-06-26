import "../../src/components/data_visualization/data_visualization.css";
import file from "../../src/components/data_visualization/asset/file.png";
import Sidebar from '../components/sidebar/Sidebar';
import '../components/sidebar/sidebar.css';
import '../App.css';


const DataVisualisation = () => {
  return (
    <div className="container-fluid8 p-0 d-flex flex-row">
      <Sidebar/>
    <div className="con">
      <h1>data_visualization</h1>
      <div className="sec">
          <img src={file} className='moji' alt="images" /><br />
          <a href="dev1"> developer 1 </a>
      </div>
      <div className="sec">
      <img src={file} className='moji' alt="images" /><br />
          <a href="dev2"> developer 2 </a>
      </div>
      <div className="sec">
      <img src={file} className='moji' alt="images" /><br />
          <a href="#"> developer 3 </a>
      </div>
      <div className="sec">
      <img src={file} className='moji' alt="images" /><br />
          <a href="#"> developer 4 </a>
      </div>
      <div className="sec">
      <img src={file} className='moji' alt="images" /><br />
          <a href="#"> developer 5 </a>
      </div>
      <div className="sec">
      <img src={file} className='moji' alt="images" /><br />
          <a href="#"> developer 6 </a>
      </div>
      <div className="sec">
      <img src={file} className='moji' alt="images" /><br />
          <a href="#"> developer 7 </a>
      </div>
      <div className="sec">
      <img src={file} className='moji' alt="images" /><br />
          <a href="#"> developer 8 </a>
      </div>
     
      </div>
      </div>
  );
};


export default DataVisualisation;