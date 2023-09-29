export const mappedCreateProduct = ({ form }) => {

    const data = {
        name: form.name,
        description: form.description,
        stock: parseFloat(form.stock),
        price: parseFloat(form.price),
        photoUrl: form.photoUrl,
        isActive: form.isActive,
        categoryId: parseInt(form.categoryId),
        lectureCode: form.lectureCode,
    }

    return data

}

export const mappedUpdateProduct = ({ form }) => {

    const data = {
        productId: form.productId,
        name: form.name,
        description: form.description,
        stock: form.stock,
        price: form.price,
        photoUrl: form.photoUrl,
        isActive: form.isActive,
        categoryId: parseInt(form.categoryId),
        lectureCode: form.lectureCode,
    }

    return data

}