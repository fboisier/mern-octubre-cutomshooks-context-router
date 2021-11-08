import React, { useContext } from 'react'
import { AutoContext } from '../../context/AutoContext'
import { ParteDelantera } from './ParteDelantera'

export const Carroceria = () => {
    const {serial} = useContext(AutoContext)

    return (
        <div>
            <h3>Carroceria :{serial}</h3>

            <ParteDelantera />
        </div>
    )
}
