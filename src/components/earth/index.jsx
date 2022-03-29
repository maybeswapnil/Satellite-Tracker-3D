import React, { useRef , useState} from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import {  softShadows, MeshWobbleMaterial,OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import EarthDayMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_specular_map.jpg";
import { TextureLoader } from "three";
export function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );
softShadows();

  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <pointLight color="white" position={[2, 0, 2]} intensity={1.2} />
      <ambientLight intensity={1.3} />
      <fog attach="fog" args={['#191920', 0, 90]} />
      <pointLight color="white" position={[2, 9, 30]} intensity={1.2} />
      <mesh ref={cloudsRef} position={[0, 0, 3]}  onPointerOver={(event) => hover(true)} onPointerOut={(event) => hover(false)}>
        <sphereGeometry args={[7, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={hovered ? 0.7: 0.5}
          depthWrite={true}
          transparent={true}
          blur={[300, 100]}
          mixBlur={1}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 3]}>
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={false}
          zoomSpeed={0.01}
          panSpeed={0.5}
          rotateSpeed={1}
        />
      </mesh>

      <mesh ref={specularMap} position={[10, 0, 1]}  onPointerOver={(event) => hover(true)} onPointerOut={(event) => hover(false)}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshPhongMaterial
          map={specularMap}
          depthWrite={true}
          transparent={true}
          blur={[300, 100]}
          mixBlur={1}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={specularMap} position={[12, 2, 1]}  onPointerOver={(event) => hover(true)} onPointerOut={(event) => hover(false)}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshPhongMaterial
          map={specularMap}
          depthWrite={true}
          transparent={true}
          blur={[300, 100]}
          mixBlur={1}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh ref={specularMap} position={[-12, 2, 1]}  onPointerOver={(event) => hover(true)} onPointerOut={(event) => hover(false)}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshPhongMaterial
          map={specularMap}
          depthWrite={true}
          transparent={true}
          blur={[300, 100]}
          mixBlur={1}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh ref={specularMap} position={[-10, 2, 1]}  onPointerOver={(event) => hover(true)} onPointerOut={(event) => hover(false)}>
        <sphereGeometry args={[0.05, 32, 32]} />
        <meshPhongMaterial
          map={specularMap}
          depthWrite={true}
          transparent={true}
          blur={[300, 100]}
          mixBlur={1}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh ref={specularMap} position={[0, 0, 3]}>
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          zoomSpeed={0.01}
          panSpeed={0.5}
          rotateSpeed={1}
        />
      </mesh>
      
     
    </>
  );
}
