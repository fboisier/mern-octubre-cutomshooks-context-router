import React from 'react'
import { Formulario } from "./components/Formulario";
import { FormularioDos } from "./components/FormularioDos";
import { FormularioSinState } from "./components/FormularioSinState";
import { PruebaContador } from "./components/PruebaContador";
import { PruebaContadorDos } from "./components/PruebaContadorDos";

export const CustomHooks = () => {
    return (
        <div className="container mt-5">

            <h2>Prueba de Contador sin Custom Hook</h2>
            <PruebaContador />
            <hr />

            <h2>Prueba de Contador con Custom Hook</h2>
            <PruebaContadorDos />

            <hr />
            <h2>Formulario Sin Custom Hook</h2>
            <Formulario />

            <hr />
            <h2>Formulario con Custom Hook</h2>
            <FormularioDos />


            <hr />
            <h2>Formulario con FormData</h2>
            <FormularioSinState />


        </div>
    )
}
