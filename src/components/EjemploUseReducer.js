import React, { useReducer } from "react";
import Boton from "./../elements/Boton";

// Estado Inicial
const contadorInicial = { contador: 0 };

// reducer
const reducer = (estado, accion) => {
  switch (accion.type) {
    case "INCREMENTAR":
      return { contador: estado.contador + 1 };
    case "DISMINUIR":
      return { contador: estado.contador - 1 };
    case "REINICIAR":
      return { contador: 0 };
    default:
      return estado;
  }
};

const EjemploUseReducer = () => {
  const [estado, dispatch] = useReducer(reducer, contadorInicial);
  return (
    <div>
      <h1>Contador: {estado.contador}</h1>
      <Boton
        onClick={() => {
          dispatch({ type: "INCREMENTAR" });
        }}
        negro
        marginRight
      >
        Incrementar
      </Boton>
      <Boton
        onClick={() => {
          dispatch({ type: "DISMINUIR" });
        }}
        negro
      >
        Disminuir
      </Boton>
      <Boton
        onClick={() => {
          dispatch({ type: "REINICIAR" });
        }}
        negro
      >
        Reiniciar
      </Boton>
    </div>
  );
};

export default EjemploUseReducer;
