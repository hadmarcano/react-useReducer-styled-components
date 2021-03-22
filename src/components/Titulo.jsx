import React from 'react';

const TituloGreen = () => {
    const name = "Héctor";
    const color = "green";
    return (
        <h1 className="titulo" style={{ color: color }}>
            Hola {name}!
        </h1>
    );
};

const TituloBlue = () => {
    const name = "Héctor";
    const color = "blue";
    return (
        <h1 className="titulo" style={{ color: color }}>
            Hola {name}!
        </h1>
    );
};

export { TituloGreen, TituloBlue };
