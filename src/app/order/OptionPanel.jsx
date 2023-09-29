'use client'

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import ReListButton from '@/components/ReListButton';
import useOrder from '@/hooks/useOrder';

export default function OptionPanel() {

    const {
        listOrder
    } = useOrder();

    return (

        <Grid
            container
            direction="row"
            justifyContent="flex-end">

            <Stack
                direction="row"
                spacing={2}>

                <ReListButton
                    reList={listOrder}
                />

            </Stack>

        </Grid>

    )

}