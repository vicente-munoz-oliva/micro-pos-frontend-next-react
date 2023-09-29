import { getOrders, saveOrder } from "@/services/order";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import useCart from "./useCart";
import { validateOrder } from "@/validations/order";
import { mappedCreateOrder } from "@/mapped/order";
import { useProduct } from "./useProduct";
import { OrderContext } from "@/context/order";
import useLoading from "./useLoading";

export default function useOrder() {

    const { order, setOrder } = OrderContext();

    const { cart, clearCart } = useCart();
    const { showLoading, hideLoading } = useLoading();
    const { reListProducts } = useProduct();

    async function listOrder() {
        try {
            showLoading();
            const data = await getOrders({});
            setOrder(data);
            hideLoading();
        } catch (error) {
            hideLoading();
            toast.error("Error - modify listOrder - " + error.toString());
            return false;
        }
    }

    async function createOrder({ form }) {

        try {

            await validateOrder({ cart, form });
            const response = await saveOrder({ form: mappedCreateOrder({ form, cart }) });
            await listOrder();
            await reListProducts();
            await clearCart();
            toast.success(response.message)
            return true;
        } catch (error) {
            toast.error("Error -  create product - " + error.toString());
            return false;
        }


    }



    return {
        order,
        listOrder,
        createOrder
    }

}