export const validateProduct = async ({ form, product }) => {



    if (!form.name) {
        throw new Error("The 'name' field is required.");
    } else if (form.name.length > 255) {
        throw new Error("The 'name' field cannot be more than 255 characters.");
    }

    if (!form.lectureCode) {
        throw new Error("The 'lecture Code' field is required.");
    } else if (form.lectureCode.length > 255) {
        throw new Error("The 'name' field cannot be more than 255 characters.");
    }

    if (!form.categoryId) {
        throw new Error("The 'Category' field is required.");
    } else if (typeof form.categoryId !== "number") {
        throw new Error("The 'category' field must be a number.");
    }

    if (!form.description) {
        throw new Error("The 'description' field is required.");
    } else if (form.description.length > 500) {
        throw new Error("The 'description' field cannot be more than 500 characters.");
    }

    if (form.isActive !== true && form.isActive !== false) {
        throw new Error("The 'isActive' field must be true or false.");
    }

    if (!form.price) {
        throw new Error("The 'price' field is required.");
    } else if (typeof form.price !== "number") {
        throw new Error("The 'price' field must be a number.");
    }


    if (!form.stock) {
        throw new Error("The 'stock' field is required.");
    } else if (typeof form.stock !== "number") {
        throw new Error("The 'stock' field must be a number.");
    }

    if (!form.photoUrl) {
        throw new Error("The 'photoUrl' field is required.");
    } else if (form.photoUrl.length > 255) {
        throw new Error("The 'photoUrl' field cannot be more than 255 characters.");
    }

    if (!form.productId) {
        if (product.filter(e => e.lectureCode === form.lectureCode).length)
            throw new Error("The 'lecture Code' it is already registered");
    }
    else {
        if (product.filter(e => e.lectureCode === form.lectureCode && e.productId !== form.productId).length)
            throw new Error("The 'lecture Code' it is already registered");
    }

}