import React from "react";
import { Link } from "react-router-dom";
import styles from "./Peliculas.module.css";

const Peliculas = (props) => {
  const film = props.item;

  return (
    <Link style={{ color: "black", textDecoration: "none" }} to={`film/${film.id}`}>
      <div className={styles.card}>
        <p>
          {film.name} ({film.year}) &nbsp;&nbsp;
        </p>
        <h4>{film.price}€</h4>
      </div>
    </Link>
  );
};

export default Peliculas;
