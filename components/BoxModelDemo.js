import { useState } from "react";
import styles from '@/styles/BoxModelDemo.module.css';

export default function BoxModelDemo() {
  const [bgColor, setBgColor] = useState("#000000");
  const [borderColor, setBorderColor] = useState("#2c3e50");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div>
      <h2>CSS Box Model Demo</h2>
      <div
        className={styles.box}
        style={{ backgroundColor: bgColor, borderColor: borderColor }}
        onClick={() => setBgColor(getRandomColor())}
        onMouseEnter={() => setBorderColor(getRandomColor())}
        onMouseLeave={() => setBorderColor("#2c3e50")}
      >
        Click or Hover to Interact
      </div>
    </div>
  );
}