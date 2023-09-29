import axios from "axios";

const URL = "http://localhost:8080/products/";

export async function getProducts() {
    try {
        const { data } = await axios.get(URL);
        return data;
    } catch (error) {
        throw new Error(error);
    }
}


export async function updateProduct({ form }) {
    try {
        const { data } = await axios.put(URL, form);
        return data;
    } catch (error) {
        throw new Error(error);
    }
}


export async function saveProduct({ form }) {
    try {
        const { data } = await axios.post(URL, form);
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

export async function deleteProduct({
    id
}) {
    try {
        const { data } = await axios.delete(URL + id);
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

