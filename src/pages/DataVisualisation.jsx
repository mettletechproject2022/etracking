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
      <h1>DATA VISUALISATION</h1>
      <div className="sec">
        <a href="dev1">
          <img src={file} className='moji' alt="images" />
          developer 1
        </a>
      </div>
      <div className="sec">
        <a href="#">
          <img src={file} className='moji' alt="images" />
          developer 2
        </a>
      </div>
      <div className="sec">
        <a href="#">
          <img src={file} className='moji' alt="images" />
          developer 3
        </a>
      </div>
      <div className="sec">
        <a href="#">
          <img src={file} className='moji' alt="images" />
          developer 4
        </a>
      </div>
      <div className="sec">
        <a href="#">
          <img src={file} className='moji' alt="images" />
          developer 5
        </a>
      </div>
      <div className="sec">
        <a href="#">
          <img src={file} className='moji' alt="images" />
          developer 6
        </a>
      </div>
      <div className="sec">
        <a href="#">
          <img src={file} className='moji' alt="images" />
          developer 7
        </a>
      </div>
      <div className="sec">
        <a href="#">
          <img src={file} className='moji' alt="images" />
          developer 8
        </a>
      </div>
     
      </div>
      </div>
  );
};


export default DataVisualisation;