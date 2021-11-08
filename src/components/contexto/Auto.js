import React, { useState } from 'react'
import { Carroceria } from './Carroceria'
import { Motor } from './Motor'

export const Auto = () => {

    const [serial, setSerial] = useState('KMKSDKNUISDBN12233')

    return (
        <div>
            <h1>Auto</h1>

            <Motor serial={serial} setSerial={setSerial}/>
            <Carroceria  serial={serial} setSerial={setSerial}/>
        </div>
    )
}
