'use client'

import DialogModal from "@/components/DialogModal"
import useModal from "@/hooks/useModal"
import Grid from "@mui/material/Grid"
import { useState } from "react";


export default function Form() {

    let title = "ORDER";

    const {
        hideModal,
        modal
    } = useModal()


    return (

        <DialogModal title={title} hidenModal={hideModal} modal={modal} maxWidth={"md"} >

            <Grid container spacing={2.5} >


                <h1>Hola</h1>

            </Grid>

        </DialogModal>

    )

}