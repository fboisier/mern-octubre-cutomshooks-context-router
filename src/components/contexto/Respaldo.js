import React, { useContext } from 'react'
import { AutoContext } from '../../context/AutoContext'

export const Respaldo = () => {

    const {serial} = useContext(AutoContext)

    return (
        <div>
            <p>RESPALDO {serial}</p>
        </div>
    )
}
