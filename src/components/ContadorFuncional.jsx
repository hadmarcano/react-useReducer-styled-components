import React, { useState } from "react";
import Boton from "../elements/Boton";
import styles from "./ContadorFuncional.module.css";

const ContadorFuncional = (props) => {
  const [cuenta, setCuenta] = useState(0);
  const incrementar = (cantidad) => setCuenta(cuenta + cantidad);
  const disminuir = (cantidad) => setCuenta(cuenta - cantidad);

  return (
    <div>
      <h1>Contador: {cuenta}</h1>
      <Boton
        negro
        marginRight
        // className={styles.boton}
        onClick={() => {
          incrementar(props.cantidadIncrementar);
        }}
      >
        Incrementar
      </Boton>
      <Boton
        // className={styles.boton}
        negro
        onClick={() => {
          disminuir(props.cantidadDisminuir);
        }}
      >
        Disminuir
      </Boton>
    </div>
  );
};

export default ContadorFuncional;
