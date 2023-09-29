export const validateCategory = async ({ form }) => {

    if (!form.name) {
        throw new Error("The 'name' field is required.");
    } else if (form.name.length > 255) {
        throw new Error("The 'name' field cannot be more than 255 characters.");
    }


    if (form.isActive !== true && form.isActive !== false) {
        throw new Error("The 'isActive' field must be true or false.");
    }



}