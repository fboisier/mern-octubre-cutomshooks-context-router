import { useState } from "react"

export const useForm = (valoresIniciales = {}) => {

    const [valores, setValores] = useState(valoresIniciales)

    const handleChange = (e) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    const handleCheckbox = (e) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.checked
        })
    }

    const reset= () =>{
        setValores(valoresIniciales);
    }

    return {
        valores,
        handleChange,
        handleCheckbox,
        reset
    }

}