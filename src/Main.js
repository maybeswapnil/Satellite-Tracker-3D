import './App.css';
import React, { useRef , useState, useEffect} from "react";
import axios from "axios";


function App(props) {
  const [data, setData] = useState({'above':[]})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get('https://new-api-name.herokuapp.com/location/raw').then((res) => {setData(res.data)})
    setLoading(false)
  }, [loading])
  

 
  return (
    <div className="content">
        <h1 className='header'>Welcome</h1>
        <p>N2YO provides real time tracking and pass predictions with orbital paths and footprints overlaid on Google Maps. It features an alerting system that automatically notifies users via SMS and/or email before International Space Station crosses the local sky.</p>
       <h1>SAT Data : </h1>

       <div style={{width:'100%', overflow:'auto', height:'55vh'}}>
       {!loading?data['above'].map((r, i) => {
          console.log(r);
          return(<pre>{JSON.stringify(r, undefined, 2)}</pre>)
        }):null}
       </div>
       
      </div>
  );
}

export default App;
