import earth from './earth.png';
import moon from './moon.png';
import './App.css';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/earth";

import Main from './Main'

function App() {
  return (
    
    <div className="App">
      <Main />

        <Canvas camera={{ position: [0, -1, 20], fov: 60}}>
            <Suspense fallback={null}>
              <Earth />
            </Suspense>
        </Canvas>
        
    </div>
  );
}

export default App;
