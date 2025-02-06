import { useState } from "react";
import styles from '../styles/ListComponent.module.css';

export default function ListComponent() {
  const [items, setItems] = useState([
    "First item",
    "Second item",
    "Third item",
    "Fourth item",
  ]);

  function generateRandomString(length = 8) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  function handleItemClick(index) {
    setItems((prevItems) =>
      prevItems.map((item, i) => (i === index ? generateRandomString() : item))
    );
  }

  return (
    <div>
      <h2>Manipulating the DOM</h2>
      <ul className={styles.itemList}>
        {items.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}