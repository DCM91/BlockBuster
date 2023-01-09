import "./App.css";
import React, { useState } from "react";
import PeliculasList from "./components/PeliculasList/PeliculasLList";
import AddPelicula from "./components/AddPelicula/AddPelicula";
import { Route, Routes, Link } from "react-router-dom";
import Contact from "./components/MyRoutes/Contact/Contact.js";
import FAQs from "./components/MyRoutes/FAQs/faqs";
import Anyway from "./components/MyRoutes/Anyway/Anyway";
import InfoPelicula from "./components/InfoPelicula/InfoPelicula";

function App() {
  const [reload, setReload] = useState(false);

  const reloadPage = () => {
    setReload(!reload);
  };

  /*   <div>
      <PeliculasList reload={reload} />
      <AddPelicula  reloadPage={reloadPage} />
      </div>
*/

  return (
    <div>
      <h1>&nbsp;&nbsp;My Routes</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/FAQs">FAQs</Link>
          </li>
          <li>
            <Link to="/Anyway">Anyway</Link>
          </li>
        </ul>
      </nav>

      <div className="myrouters">
        <Routes>
          <Route path="/" element={<PeliculasList reload={reload} />}>
            <Route
              path="create"
              element={<AddPelicula reloadPage={reloadPage} />}
            />
            <Route path="film/:filmId" element={<InfoPelicula />} />{" "}
            /*reloadPage={reloadPage}*/
          </Route>

          <Route path="Contact" element={<Contact />} />
          <Route path="FAQs" element={<FAQs />} />

          <Route path="*" element={<Anyway />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
