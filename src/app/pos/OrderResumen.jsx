'use client'

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Divider, } from '@mui/material';
import useCart from '@/hooks/useCart';
import ProductOrderList from './ProductOrderList';
import Form from './Form';

export default function OrderResumen() {

    const {
        cart,

    } = useCart();



    return (

        <Paper elevation={2} style={{ height: '100%' }} sx={{ p: 1.5 }} >

            <Grid
                sx={{ height: '100%' }}
                container
                alignItems="stretch"
                direction="row"
                justifyContent="space-between"
            >

                <Grid item lg={12} >

                    <Typography variant="h6" gutterBottom>
                        Resumen Order
                    </Typography>

                    <Divider />

                    <ProductOrderList products={cart} />

                </Grid>


                <Form />



            </Grid>

        </Paper>
    )
}