
import './App.css';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/earth";
import React, { useRef , useState, useEffect} from "react";

import Main from './Main'

function App() {
  

  return (
    <div className="App">
        <Main />
        <Canvas camera={{ position: [0, -1, 20], fov: 60}}>
            <Suspense fallback={''}>
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
