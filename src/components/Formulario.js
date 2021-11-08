import React, { useState } from 'react'

export const Formulario = () => {

    const initialState = {
        nombre: '',
        apellido: '',
        admin: false
    };

    const [valores, setValores] = useState(initialState)

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

    const ejecutarFormulario = (e) => {
        e.preventDefault();
        console.log(valores);
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
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        onChange={handleCheckbox}
                        className="form-check-input"
                        id="admin"
                        name="admin"
                        defaultChecked={valores.admin}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">ES ADMIN</label>
                </div>

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}
