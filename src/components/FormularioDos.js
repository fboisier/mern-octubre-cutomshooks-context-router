import React from 'react'
import { useForm } from '../hooks/useForm';

export const FormularioDos = () => {
    
    const initialState = {
        nombre: '',
        apellido: '',
        admin: false
    };

    const { valores, handleChange,  reset} = useForm(initialState);

    const ejecutarFormulario = (e) => {
        e.preventDefault();
        console.log(valores);
        reset();
    }

    return (
        <div>
            <form onSubmit={ejecutarFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        id="nombre"
                        value={valores.nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input
                        type="text"
                        className="form-control"
                        name="apellido"
                        id="apellido"
                        value={valores.apellido}
                        onChange={handleChange}
                    />
                </div>
              

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}
