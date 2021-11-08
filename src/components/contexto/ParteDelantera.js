import React from 'react'
import { Manubrio } from './Manubrio'
import { Silla } from './Silla'

export const ParteDelantera = () => {
    return (
        <div>
            <h5>Parte Delantera</h5>
            <Manubrio />
            <Silla/>
        </div>
    )
}
