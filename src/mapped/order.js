export const mappedCreateOrder = ({ form, cart }) => {

    let items = []


    for (let index = 0; index < cart.length; index++) {

        const item = cart[index];

        items.push({
            product: {
                productId: item.productId,
            },
            qty: item.qty,
        })

    }

    const data = {
        paymentMethod: form.paymentMethod,
        items
    }

    return data

}