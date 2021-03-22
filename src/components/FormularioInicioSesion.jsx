import React, { useState } from "react";
import styles from "./FormularioInicioSesion.module.css";
import Boton from "../elements/Boton";

const FormularioInicioSesion = (props) => {
  console.log(props);
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  // const changeUser = (e)=> setUsuario(e.target.value);
  // const changePassword = (e)=> setPassword(e.target.value);

  const onChange = (e) => {
    if (e.target.name === "usuario") {
      setUsuario(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (usuario === "carlos" && password === "123") {
      props.setSesion(true);
    } else {
      alert("datos incorrectos");
      setUsuario("");
      setPassword("");
    }
  };

  return (
    <form action="" onSubmit={onSubmit} className={styles.formulario}>
      {/* <p>Usuario: {usuario}</p>
      <p>Contraseña: {password}</p> */}
      <h1>No has Iniciado Sesion</h1>
      <div>
        <label htmlFor="usuario" className={styles.label}>
          Usuario
        </label>
        <input
          className={styles.input}
          type="text"
          name="usuario"
          id="usuario"
          value={usuario}
          onChange={onChange}
        ></input>
      </div>
      <div>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          className={styles.input}
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChange}
        />
      </div>
      {/* <button type="submit" className={styles.boton}>
        Iniciar Sesion
      </button> */}
      <div>
        <Boton large marginTop type="submit">
          {" "}
          Iniciar Sesion
        </Boton>
      </div>
    </form>
  );
};

export default FormularioInicioSesion;
