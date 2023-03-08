import React, { Component } from "react";
import styles from "./Contact.module.css";

export default class Contact extends Component {
  render() {
    return (
      <div >
        <h1>Contact Info</h1>
        <ul className={styles.lista} style={{padding: '2rem', paddingLeft: '40vw'}}>
          <li>https://www.linkedin.com/in/dcm91/</li>
          <li>https://github.com/DCM91</li>
          <li>castromartindaniel91@gmail.com</li>
        </ul>
      </div>
    );
  }
}
