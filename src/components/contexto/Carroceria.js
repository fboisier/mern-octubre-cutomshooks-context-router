import React from 'react'
import { ParteDelantera } from './ParteDelantera'

export const Carroceria = ({serial}) => {
    return (
        <div>
            <h3>Carroceria :{serial}</h3>

            <ParteDelantera serial={serial}/>
        </div>
    )
}
