'use client'

import { createContext, useContext, useState } from "react";

const context = createContext()

export const LoadingProvider = (props) => {

    const [loading, setLoading] = useState(false);

    return (

        <context.Provider value={{
            loading,
            setLoading
        }} {...props} />

    )
}

export function LoadingContext() {
    const c = useContext(context);
    if (!c)
        throw new Error('Debe estar dentro del context')
    return c;
};
