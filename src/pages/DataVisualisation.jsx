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
        <input type="text"placeholder="Search.."className="search"/>
      <h1>DATA VISUALISATION</h1>
      <div className="sec">
          <img src={file} className='moji' alt="images" /><br />
          <a href="dev1"> Developer 1 </a>
      </div>
      <div className="sec">
      <img src={file} className='moji' alt="images" /><br />
          <a href="dev2"> Developer 2 </a>
      </div>
      <div className="sec">
      <img src={file} className='moji' alt="images" /><br />
          <a href="#"> Developer 3 </a>
      </div>
      <div className="sec">
      <img src={file} className='moji' alt="images" /><br />
          <a href="#"> Developer 4 </a>
      </div>
      <div className="sec">
      <img src={file} className='moji' alt="images" /><br />
          <a href="#"> Developer 5 </a>
      </div>
      <div className="sec">
      <img src={file} className='moji' alt="images" /><br />
          <a href="#"> Developer 6 </a>
      </div>
      <div className="sec">
      <img src={file} className='moji' alt="images" /><br />
          <a href="#"> Developer 7 </a>
      </div>
      <div className="sec">
      <img src={file} className='moji' alt="images" /><br />
          <a href="#"> Developer 8 </a>
      </div>
      <div className="sec">
      <img src={file} className='moji' alt="images" /><br />
          <a href="#"> Developer 9 </a>
      </div>
      <div className="sec">
      <img src={file} className='moji' alt="images" /><br />
          <a href="#"> Developer 10 </a>
      </div>
     
      </div>
      </div>
  );
};


export default DataVisualisation;