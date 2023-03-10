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
    <div style={{width: '100%', display: 'flex'}} >
      <div style={{width: '60%'}}>
        <h1 className={styles.title}>
          &nbsp;BlockBuster!{" "}
          <span>
            <Link style={{ color: "yellowgreen", textDecoration: "none", paddingLeft: '5rem', fontWeight: 'bold' }} to="/create">
              + Add One
            </Link>
          </span>
        </h1>

        {peliculas && peliculas.map((elem) => <Peliculas item={elem} />)}
      </div>
      <div style={{width: '90%', paddingTop: '4rem'}}>
        <Outlet />
      </div>
    </div>
  );
};

export default PeliculasList;
