import Image from "next/image";
import styles from "./page.module.css";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className={styles.page}>
  
        <Canvas>
        <Environment background files="/night.hdr" />
        </Canvas>
    </div>
  );
}
