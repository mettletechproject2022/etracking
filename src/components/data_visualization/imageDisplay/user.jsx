import "../data_visualization.css";
import file from "../asset/file.png";
import Sidebar from '../../../components/sidebar/Sidebar';
import '../../../components/sidebar/sidebar.css';
import '../../../App.css';

const DvUser = () => {
    return (
      <div className="container-fluid8 p-0 d-flex flex-row">
        <Sidebar/>
      <div className="con">
        <h1>DATA VISUALISATION</h1>
        <div className="sec2">
            <img src={file} className='moji' alt="images" /><br />
            <a href="dev1"> 23-06-2022 </a>
        </div>
        <div className="sec2">
        <img src={file} className='moji' alt="images" /><br />
            <a href="dev2"> 24-06-2022 </a>
        </div>
        <div className="sec2">
        <img src={file} className='moji' alt="images" /><br />
            <a href="#"> 25-06-2022 </a>
        </div>
        <div className="sec2">
        <img src={file} className='moji' alt="images" /><br />
            <a href="#"> 26-06-2022 </a>
        </div>
        <div className="sec2">
        <img src={file} className='moji' alt="images" /><br />
            <a href="#"> 27-06-2022 </a>
        </div>
        <div className="sec2">
        <img src={file} className='moji' alt="images" /><br />
            <a href="#"> 28-06-2022 </a>
        </div>
        <div className="sec2">
        <img src={file} className='moji' alt="images" /><br />
            <a href="#"> 29-06-2022 </a>
        </div>
        <div className="sec2">
        <img src={file} className='moji' alt="images" /><br />
            <a href="#"> 30-06-2022 </a>
        </div>
       
        </div>
        </div>
    );
  };
  
  
  export default DvUser;