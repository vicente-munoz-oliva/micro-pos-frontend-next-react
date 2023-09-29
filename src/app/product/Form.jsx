'use client'
import DialogModal from "@/components/DialogModal"
import useModal from "@/hooks/useModal"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import { useEffect, useState } from "react"
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { onChangeCheck, onChangeNumberField, onChangeTextField } from "@/libs/onChange"
import { useProduct } from "@/hooks/useProduct"
import useCategory from "@/hooks/useCategory"
import InputAutoComplete from "@/components/InputAutoComplete"


let formProps = {
    productId: null,
    created: "",
    name: "",
    description: "",
    stock: "",
    price: "",
    photoUrl: "",
    isActive: true,
    categoryId: null,
    lectureCode: "",
}

let variant = "outlined";
let size = "small"

export default function Form() {

    const [form, setForm] = useState({});

    const { category } = useCategory()

    const {
        hideModal,
        modal
    } = useModal()

    const {
        createProduct,
        selectedToEdit,
        product,
        modifyProduct
    } = useProduct();

    async function submit() {
        if (selectedToEdit)
            await modifyProduct({ form })
        else {
            let isSave = await createProduct({ form })
            if (isSave) setForm(formProps)
        }
    }

    useEffect(() => {
        if (selectedToEdit)
            setForm(product.find(e => e.productId == selectedToEdit))
        else
            setForm(formProps)
    }, [selectedToEdit])


    return (

        <DialogModal title={"PRODUCT REGISTRATION"} hidenModal={hideModal} modal={modal} maxWidth={"md"} submit={submit}  >

            <Grid container spacing={2.5} >

                <Grid item lg={6} >

                    <TextField
                        type="text"
                        label="Name"
                        variant={variant}
                        fullWidth
                        size={size}
                        name="name"
                        value={form.name}
                        onChange={(event) => onChangeTextField({ event, form, setForm })}
                    />

                </Grid>

                <Grid item lg={6}   >
                    <TextField
                        type="url"
                        label="Photo URL"
                        variant={variant}
                        fullWidth
                        size={size}
                        name="photoUrl"
                        value={form.photoUrl}
                        onChange={(event) => onChangeTextField({ event, form, setForm })}
                    />
                </Grid>

                <Grid item lg={6} >
                    <TextField
                        type="number"
                        label="Price"
                        variant={variant}
                        fullWidth
                        size={size}
                        name="price"
                        value={form.price}
                        onChange={(event) => onChangeNumberField({ event, form, setForm })}
                    />
                </Grid>


                <Grid item lg={6} >
                    <TextField
                        type="number"
                        label="Stock"
                        variant={variant}
                        fullWidth
                        size={size}
                        name="stock"
                        value={form.stock}
                        onChange={(event) => onChangeNumberField({ event, form, setForm })}
                    />
                </Grid>

                <Grid item lg={6} >
                    <TextField
                        type="text"
                        label="Lecture code"
                        variant={variant}
                        fullWidth
                        size={size}
                        name="lectureCode"
                        value={form.lectureCode}
                        onChange={(event) => onChangeTextField({ event, form, setForm })}
                    />
                </Grid>

                <Grid item lg={6} >

                    <InputAutoComplete

                        data={category}
                        form={form}
                        setForm={setForm}
                        nameOfKeyDescription={"name"}
                        keyName={"categoryId"}
                        label="Category"
                    />
                </Grid>

                <Grid item lg={12} >
                    <TextField
                        type="text"
                        multiline
                        rows={3}
                        label="Description"
                        variant={variant}
                        fullWidth
                        size={size}
                        name="description"
                        value={form.description}
                        onChange={(event) => onChangeTextField({ event, form, setForm })}
                    />
                </Grid>


                <Grid item lg={12} textAlign={"right"} >
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Is Active"
                        name="isActive"
                        onChange={(event) => onChangeCheck({ event, form, setForm })}
                        checked={form.isActive}
                    />
                </Grid>
            </Grid>

        </DialogModal>

    )

}