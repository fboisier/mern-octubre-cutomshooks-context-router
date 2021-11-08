import { createContext, useState } from 'react';

export const AutoContext = createContext();

export const AutoProvider = ({children}) => {
    const [serial, setSerial] = useState('KMKSDKNUISDBN12233');

    return (
        <AutoContext.Provider value={{ serial, setSerial }}>
            {children}
        </AutoContext.Provider>
    );
};