import axios from "axios";

const URL = "http://localhost:8080/categorys/";

export async function getCategorys({ }) {
    try {
        const { data } = await axios.get(URL);
        return data;
    } catch (error) {
        throw new Error(error);
    }
}


export async function updateCategory({ form }) {
    try {
        const { data } = await axios.put(URL, form);
        return data;
    } catch (error) {
        throw new Error(error);
    }
}


export async function saveCategory({ form }) {
    try {
        const { data } = await axios.post(URL, form);
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

export async function deleteCategory({
    id
}) {
    try {
        const { data } = await axios.delete(URL + id);
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

