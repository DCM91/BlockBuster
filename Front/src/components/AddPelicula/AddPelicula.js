import React, { useState } from "react";
import styles from "./AddPelicula.module.css";

const AddPelicula = (props) => {
  const reloadPage = props.reloadPage;

  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    const url = "http://localhost:3000/todopost/";
    const body = {
      name,
      year,
      price,
      description,
    };
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        reloadPage();
      });
  };
  return (
    <div className={styles.card}>
      <h3>Add new Film</h3>
      <label for="name">
        Name*:&nbsp;&nbsp;
        <input
          type="text"
          value={name}
          placeholder="Spiderman"
          onChange={handleName}
        />
      </label>
      <br />
      <label for="year">
        Year*:&nbsp;&nbsp;
        <input
          placeholder="2002"
          min={1895}
          type="number"
          value={year}
          onChange={handleYear}
          required
          maxLength={"4"}
        />
      </label>
      <br />
      <label for="price">
        Price*:&nbsp;
        <input type="number" min={1} value={price} onChange={handlePrice} />
      </label>
      <br />

      <label for="description">
        Descripcion:&nbsp;
        <textarea
          style={{ height: "120px", width: "100%" }}
          type="textarea"
          value={description}
          placeholder="AÑADE TU DESCRIPCION"
          onChange={handleDescription}
        />
      </label>
      <br />

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default AddPelicula;
