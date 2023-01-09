import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Peliculas from "../Peliculas/Peliculas";
import styles from "./PeliculasList.css";

const PeliculasList = (props) => {
  const reload = props.reload;
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todo")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setPeliculas(res.infoTodo);
      });
  }, [reload]);

  return (
    <div>
      <h1 className={styles.title}>
        &nbsp;BlockBuster!{" "}
        <span>
          <Link style={{ color: "yellowgreen" }} to="/create">
            +
          </Link>
        </span>
      </h1>

      {peliculas && peliculas.map((elem) => <Peliculas item={elem} />)}
      <Outlet />
    </div>
  );
};

export default PeliculasList;
