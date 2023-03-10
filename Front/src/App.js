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
    <div style={{width: '100vw'}} >
      <div style={{width: '100%'}} >
          <h1 style={{textAlign: 'center'}} > My Blockbuster Routes</h1>
      </div>
      <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      width: '96vw',
      paddingRight: '2rem',
      paddingLeft: '2rem'


    }}  >

          <p>
            <Link style={{textDecoration: 'none'}} to="/">Home</Link>
          </p>
          <p>
            <Link style={{textDecoration: 'none'}} to="/Contact">Contact</Link>
          </p>
          <p>
            <Link style={{textDecoration: 'none'}} to="/FAQs">FAQs</Link>
          </p>
          <p>
            <Link style={{textDecoration: 'none'}} to="/Anyway">Anyway</Link>
          </p>
        
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
