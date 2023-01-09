import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Anyway.module.css";

export default class Anyway extends Component {
  render() {
    return (
      <div className={styles.Anyway}>
        Are you lost? There is a link to &nbsp;
        <Link style={{ color: "yellowgreen" }} to="/">
          {" "}
          Home Page
        </Link>
      </div>
    );
  }
}
