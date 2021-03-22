import React, { useState } from "react";
import ReactDOM from "react-dom";
import Usuario from "./components/Usuario";
import FormularioInicioSesion from "./components/FormularioInicioSesion";
import Contador from "./components/ContadorFuncional.jsx";
import "./index.css";
import Boton from "./elements/Boton";
import EjemploUseReducer from "./components/EjemploUseReducer";
const sesion = true;

const App = () => {
  const [sesion, setSesion] = useState(false);

  return (
    <div className="contenedor">
      {sesion === true ? (
        <div>
          <Usuario />
          {/* <Contador cantidadIncrementar={10} cantidadDisminuir={2} />
          <Boton marginTop onClick={() => setSesion(false)}>
            Cerrar Sesion
          </Boton> */}
          <EjemploUseReducer />
        </div>
      ) : (
        <div>
          <FormularioInicioSesion setSesion={setSesion} />
          {/* <button onClick={() => setSesion(true)}>Iniciar Sesion</button> */}
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
