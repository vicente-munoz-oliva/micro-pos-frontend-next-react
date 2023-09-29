export const mappedCreateCategory = ({ form }) => {

    const data = {
        name: form.name,
        isActive: form.isActive,
    }

    return data

}

export const mappedUpdateCategory = ({ form }) => {

    const data = {
        categoryId: form.categoryId,
        name: form.name,
        isActive: form.isActive,
    }

    return data

}