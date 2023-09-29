import useCart from "@/hooks/useCart";
import useOrder from "@/hooks/useOrder";
import { onChangeTextField } from "@/libs/onChange";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function Form() {

    const {

        calculateCartTotals,
        hasItems,
        totalItems,
        totalLines,
    } = useCart();

    const { createOrder } = useOrder();

    const [form, setForm] = useState({
        paymentMethod: 'Cash'
    })

    async function submit() {
        await createOrder({
            form
        });
    }

    return (
        <Grid container justifyContent={"end"} direction={"column"} item lg={12}  >

            <Stack spacing={2} direction="column" >

                <Typography variant="caption" display="block" gutterBottom>
                    Total Lines: {totalLines} / Total Items: {totalItems()}
                </Typography>


                <FormControl fullWidth>
                    <InputLabel>Payment Method</InputLabel>
                    <Select
                        value={form.paymentMethod}
                        label="Payment Method"
                        name="paymentMethod"
                        size='small'
                        onChange={(event) => onChangeTextField({ event, form, setForm })}
                    >
                        <MenuItem value={'Cash'}>Cash </MenuItem>
                        <MenuItem value={'Credit card'}>Credit card</MenuItem>
                        <MenuItem value={'Debit card'}>Debit card</MenuItem>
                        <MenuItem value={'Bank transfer'}>Bank transfer</MenuItem>
                        <MenuItem value={'Cryptocurrency '}>Cryptocurrency </MenuItem>

                    </Select>
                </FormControl>

                <Button onClick={submit} disabled={!hasItems} color="primary" size='large' variant="contained"> PAY   {hasItems > 0 && calculateCartTotals().finalTotal.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })} </Button>

            </Stack>

        </Grid>
    )
}