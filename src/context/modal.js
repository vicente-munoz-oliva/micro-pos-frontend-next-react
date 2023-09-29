'use client'

import { createContext, useContext, useState } from "react";

const context = createContext()

export const ModalProvider = (props) => {

    const [modal, setModal] = useState(false);

    return (

        <context.Provider value={{
            modal,
            setModal
        }} {...props} />

    )
}

export function ModalContext() {
    const c = useContext(context);
    if (!c)
        throw new Error('Debe estar dentro del context')
    return c;
};
