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
        <p>hey, I'm a Web Application Developer with experience in creating. maintaining and testing source code for the front-end & back-end functionalities and also in 
        designing and developing application user interfaces, testing, and debugging. Experienced in optimizing front-end applications that result in improved data 
        retrieval and workflow efficiencies.</p>
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
