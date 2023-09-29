export const onChangeTextField = ({
    event,
    form,
    setForm
}) => {

    const { name, value } = event.target;

    setForm({
        ...form,
        [name]: value
    })

}

export const onChangeAutocomplete = ({
    value,
    name,
    form,
    setForm
}) => {

    setForm({
        ...form,
        [name]: value
    })

}

export const onChangeNumberField = ({
    event,
    form,
    setForm
}) => {

    const { name, value } = event.target;

    setForm({
        ...form,
        [name]: parseFloat(value)
    })

}

export const onChangeCheck = ({
    event,
    form,
    setForm
}) => {

    const { name, checked } = event.target;

    setForm({
        ...form,
        [name]: checked
    })

}