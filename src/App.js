import earth from './earth.png';
import moon from './moon.png';
import './App.css';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/earth";
import React, { useRef , useState, useEffect} from "react";
import axios from "axios";

import Main from './Main'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {axios.get('https://new-api-name.herokuapp.com/location/raw').then((res) => {setData(res)})}, [])

  return (
    
    <div className="App">
      <Main ary={data} />
     
        <Canvas camera={{ position: [0, -1, 20], fov: 60}}>
            <Suspense fallback={null}>
                <Earth />
            </Suspense>
        </Canvas>
        <div className='footer'>
        <p>by swapnil sharma ( <a href={'https://www.linkedin.com/in/swapnil5harma/'} target='_blank'>swapnil.sharma1998@gmail.com</a> )</p>
        </div>
    </div>
  );
}

export default App;
