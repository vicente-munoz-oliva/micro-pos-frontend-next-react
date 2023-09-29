import axios from "axios";

const URL = "http://localhost:8080/orders/";

export async function getOrders({ }) {
    try {
        const { data } = await axios.get(URL);
        return data;
    } catch (error) {
        throw new Error(error);
    }
}


export async function saveOrder({ form }) {
    try {
        const { data } = await axios.post(URL, form);
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

