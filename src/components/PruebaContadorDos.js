import React from 'react'
import { useContador } from '../hooks/useContador';

export const PruebaContadorDos = () => {

    const { contador: contadorUno, incrementar, decrementar} = useContador(10);


    return (
        <div>
            <h1>PRUEBA</h1>

            <p>Contador: {contadorUno}</p>

            <button className="btn btn-vino" onClick={incrementar}>INCREMENTAR</button>
            <button className="btn btn-danger" onClick={decrementar}>DECREMENTAR</button>
        </div>
    )
}
