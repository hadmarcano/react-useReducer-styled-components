import React from "react";
import { TituloGreen, TituloBlue } from "./Titulo";
import styled from "styled-components";

const Usuario = () => {
  const pais = "Venezuela";
  const amigos = ["Alejandro", "Manuel", "Alberto"];
  return (
    <div>
      <TituloGreen />
      <TituloBlue />
      <Parrafo>Que tengas un buen dia! Saludos!</Parrafo>
      {pais && <p>Tu eres de {pais}</p>}
      <Parrafo>Tu lista de amigos es:</Parrafo>
      <ul>
        {amigos.map((amigo, index) => (
          <li key={index}>{amigo}</li>
        ))}
      </ul>
    </div>
  );
};

const Parrafo = styled.p`
  margin: 20px 0px;
`;

export default Usuario;
