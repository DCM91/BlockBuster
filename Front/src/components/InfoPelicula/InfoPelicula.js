import React from "react";
import styles from "./InfoPeliculas.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const InfoPelicula = (props) => {
  const params = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/todo/" + params.filmId)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setFilm(res.user.description);
        console.log("INFO", res.user.description);
      });
  }, [params.filmId]);

  return (
    <>
      <h1>&nbsp;&nbsp;InfoPelicula</h1>
      <div className={styles.card}>
        <p>{film}</p>
      </div>
    </>
  );
};

export default InfoPelicula;
