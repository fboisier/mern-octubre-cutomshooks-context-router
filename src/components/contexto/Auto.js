import React from 'react'
import { AutoProvider } from '../../context/AutoContext'
import { Carroceria } from './Carroceria'
import { Motor } from './Motor'

export const Auto = () => {


    return (
        <div>
            <h1>Auto</h1>

            <AutoProvider>
                <Motor />
                <Carroceria />
            </AutoProvider>
        </div>
    )
}
