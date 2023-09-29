'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { getProducts } from "@/services/product";


const context = createContext()

export const ProductProvider = (props) => {

    const [product, setProduct] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [selectedToEdit, setSelectedToEdit] = useState(null);

    useEffect(() => {

        (async () => {
            try {
                const data = await getProducts();
                setProduct(data);
            } catch (error) {
                console.log({ error })
                alert('Error getProducts')
            }
        })();

    }, []);

    return (

        <context.Provider value={{
            product,
            setProduct,
            selectedProducts,
            setSelectedProducts,
            selectedToEdit,
            setSelectedToEdit

        }} {...props} />

    )
}

export function ProductContext() {
    const c = useContext(context);
    if (!c)
        throw new Error('Debe estar dentro del context')
    return c;
};
