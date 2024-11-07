import './App.css';
import React, { useRef , useState, useEffect} from "react";
import axios from "axios";


function App(props) {
  const [data, setData] = useState({0:{above: []}})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
   
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api-set.onrender.com/location/raw',
      headers: { 
        'ngrok-skip-browser-warning': '1'
      }
    };

        axios.request(config).then((res) => {setData(res.data)})
    setLoading(false)
  }, [loading])
  

 
  return (
    <div className="content">
        <h1 className='header'>Welcome</h1>
        <p>N2YO provides real time tracking and pass predictions with orbital paths and footprints overlaid on Google Maps. It features an alerting system that automatically notifies users via SMS and/or email before International Space Station crosses the local sky.</p>
       <h1>SAT Data : </h1>

       <div style={{width:'100%', overflow:'auto', height:'55vh'}}>
       {!loading?data['0'].above.map((r, i) => {
          console.log(r);
          return(<pre>{JSON.stringify(r, undefined, 2)}</pre>)
        }):null}
       </div>
       
      </div>
  );
}

export default App;
