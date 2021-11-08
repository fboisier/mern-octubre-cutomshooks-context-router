import React from 'react'
import { Link } from "react-router-dom";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Custom Hooks</Link></li>
                <li><Link to="/contexto">Contexto</Link></li>
            </ul>
        </div>
    )
}
