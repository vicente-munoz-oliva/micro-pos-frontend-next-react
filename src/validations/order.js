export const validateOrder = async ({ form, cart }) => {

    if (!cart.length) throw new Error("Cart is emply");

    if (!form.paymentMethod) throw new Error("Payment Method is emply");


    for (let index = 0; index < cart.length; index++) {

        const item = cart[index];

        if (!item.productId) throw new Error("Product is emply");

        if (!item.qty) throw new Error("Qty  is emply");


    }


}