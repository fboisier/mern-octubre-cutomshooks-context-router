import React from 'react'
import { Respaldo } from './Respaldo'

export const Silla = ({serial}) => {
    return (
        <div>
            <h6>Silla</h6>
            <Respaldo serial={serial} />
        </div>
    )
}
