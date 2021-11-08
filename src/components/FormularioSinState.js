import React from 'react'

export const FormularioSinState = () => {

    const ejecutarFormulario = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target);
        formData.set('nombre', formData.get('nombre').toUpperCase());
        formData.set('apellido', formData.get('apellido').toUpperCase());

        console.log(`Nombre: ${formData.get('nombre')} ${formData.get('apellido')}`);
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
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input
                        type="text"
                        className="form-control"
                        name="apellido"
                        id="apellido"
                    />
                </div>


                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}
