import Link from 'next/link'; // Add this import
import { useState } from 'react';
import styles from '../styles/Contact.module.css';


export default function Contact() {
  //Manage form imput data
  const [formData, setFormData] = useState({
   //Name input
    name: '',
   //Email input
    email: '',
    //Message input
    message: '',
  });

  //Handle imput changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //Handle form submission
  const handleSubmit = (e) => {
    //Prevent defualt submission
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className={styles.contactContainer}>
         <nav className={styles.nav}>
        <Link href="/">Home</Link> |<Link href="/fun">FUN</Link> |
        <Link href="/contact">Contact</Link>
      </nav>
      <h1 className={styles.contactTitle}>Contact Us</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}
