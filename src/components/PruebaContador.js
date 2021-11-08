import React, { useState } from 'react'

export const PruebaContador = () => {


    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    }
    const decrementar = () => {
        setContador(contador - 1);
    }

    return (
        <div>
            <h1>PRUEBA</h1>

            <p>Contador: {contador}</p>

            <button className="btn btn-vino" onClick={incrementar}>INCREMENTAR</button>
            <button className="btn btn-danger" onClick={decrementar}>DECREMENTAR</button>
        </div>
    )
}
