import React from 'react';
import '../componentsclient/sesionsnp.css';
import RegionNorteCentroSNP from '../componentssnp/regionnortecentrosnp';

const Sesionsnp = () => {
    console.log("Bienvenido a la sesion");

    return (
        <div>
            <RegionNorteCentroSNP />
        </div>
    );
}

export default Sesionsnp;
