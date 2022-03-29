import './App.css';
import React, { useRef , useState, useEffect} from "react";
import axios from "axios";


function App() {
  const [data, setData] = useState([])
  
  function Main() {
    console.log('lol')
    axios.get('https://api.n2yo.com/rest/v1/satellite/above/10/-186.014/0/70/18/&apiKey=FUPTMU-T7GSDK-X5LJB6-4UYR').then((res) => {console.log(res)})
  }
 
  return (
    <div className="content">
        <h1 className='header'>maybeswapnil</h1>
        <p>Web Application Developer with experience in creating. maintaining and testing source code for the front-end & back-end functionalities and also in 
        designing and developing application user interfaces, testing, and debugging. Experienced in optimizing front-end applications that result in improved data 
        retrieval and workflow efficiencies</p>
        
      </div>
  );
}

export default App;
