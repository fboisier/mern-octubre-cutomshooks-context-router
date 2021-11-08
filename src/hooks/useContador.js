import { useState } from "react";


export const useContador =(valorInicial)=>{

    const [contador, setContador] = useState(valorInicial);

    
    const incrementar = () => {
        setContador(contador + 1);
    }
    const decrementar = () => {
        setContador(contador - 1);
    }

    return { 
        contador,
        incrementar,
        decrementar
    }
}