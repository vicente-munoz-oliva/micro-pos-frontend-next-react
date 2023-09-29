'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { getCategorys } from "@/services/category";
import { getOrders } from "@/services/order";


const context = createContext()

export const OrderProvider = (props) => {

    const [order, setOrder] = useState([]);
    const [selectedToEdit, setSelectedToEdit] = useState(null);

    useEffect(() => {

        (async () => {
            try {
                const data = await getOrders({});
                setOrder(data);
            } catch (error) {
                console.log({ error })
                alert('Error getCategorys')
            }
        })();

    }, []);

    return (

        <context.Provider value={{
            order,
            setOrder,

            selectedToEdit,
            setSelectedToEdit
        }} {...props} />

    )
}

export function OrderContext() {
    const c = useContext(context);
    if (!c)
        throw new Error('Debe estar dentro del context')
    return c;
};
