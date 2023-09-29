'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { getCategorys } from "@/services/category";


const context = createContext()

export const CategoryProvider = (props) => {

    const [category, setCategory] = useState([]);
    const [selectedCategorys, setSelectedCategorys] = useState([]);
    const [selectedToEdit, setSelectedToEdit] = useState(null);

    useEffect(() => {

        (async () => {
            try {
                const data = await getCategorys({});
                setCategory(data);
            } catch (error) {
                console.log({ error })
                alert('Error getCategorys')
            }
        })();

    }, []);

    return (

        <context.Provider value={{
            category,
            setCategory,
            selectedCategorys,
            setSelectedCategorys,
            selectedToEdit,
            setSelectedToEdit

        }} {...props} />

    )
}

export function CategoryContext() {
    const c = useContext(context);
    if (!c)
        throw new Error('Debe estar dentro del context')
    return c;
};
