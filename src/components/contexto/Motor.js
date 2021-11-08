import React, { useContext } from 'react'
import { AutoContext } from '../../context/AutoContext'

export const Motor = () => {

    const {serial} = useContext(AutoContext)

    return (
        <div>
            <h3>Motor: {serial}</h3>
        </div>
    )
}
