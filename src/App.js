import earth from './earth.png';
import moon from './moon.png';
import './App.css';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/earth";
import { TopSection } from "./components/topSection";

function App() {
  return (
    <div className="App">
        {/* <img src={moon}  className="App-moon" alt="logo" />
        <img src={earth} className="App-earth"  alt="logo" /> */}
        <Canvas>
            <Suspense fallback={null}>
              <Earth />
            </Suspense>
        </Canvas>

    </div>
  );
}

export default App;
