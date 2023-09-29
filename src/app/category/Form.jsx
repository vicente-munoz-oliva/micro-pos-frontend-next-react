'use client'
import DialogModal from "@/components/DialogModal"
import useModal from "@/hooks/useModal"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import { useEffect, useState } from "react"
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { onChangeCheck, onChangeTextField } from "@/libs/onChange"
import { useProduct } from "@/hooks/useProduct"
import useCategory from "@/hooks/useCategory"



let formProps = {
    categoryId: null,
    created: "",
    name: "",
    isActive: true,
}

let variant = "outlined";
let size = "small"

export default function Form() {

    let title = "CATEGORY REGISTRATION";
    let keyId = "categoryId";

    const [form, setForm] = useState({});

    const {
        hideModal,
        modal
    } = useModal()


    const {
        createCategory,
        modifyCategory,
        selectedToEdit,
        category
    } = useCategory();

    async function submit() {
        if (selectedToEdit)
            await modifyCategory({ form })
        else {
            let isSave = await createCategory({ form })
            if (isSave) setForm(formProps)
        }
    }

    useEffect(() => {
        if (selectedToEdit)
            setForm(category.find(e => e[keyId] == selectedToEdit))
        else
            setForm(formProps)
    }, [selectedToEdit])


    return (

        <DialogModal title={title} hidenModal={hideModal} modal={modal} maxWidth={"md"} submit={submit}  >

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