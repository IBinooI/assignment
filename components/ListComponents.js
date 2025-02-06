import { useState } from "react";
import styles from "../styles/ListComponent.module.css";

export default function ListComponent() {
  const [items, setItems] = useState([
    "First item",
    "Second item",
    "Third item",
    "Fourth item",
  ]);

  //Function to generate a random string of characters thats 8 characters long
  function generateRandomString(length = 8) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let result = "";
    for (let i = 0; i < length; i++) {
      //Randomly selects characters to build the string
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    //Return the random string
    return result;
  }

  //Function to handle th click event for the list items
  function handleItemClick(index) {
    setItems((prevItems) =>
      prevItems.map((item, i) => (i === index ? generateRandomString() : item))
   // Update the clicked item with a random string while keeping others the same
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
