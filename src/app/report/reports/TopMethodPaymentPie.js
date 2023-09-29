'use client'

import useOrder from '@/hooks/useOrder';
import { Paper } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';

export default function TopMethodPaymentPie() {

    const { order } = useOrder();

    const [load, setLoad] = useState(false);

    const [data, setData] = useState([]);

    useEffect(() => {

        const ventasTotalesPorMetodoPago = {};

        order.forEach((pedido) => {
            const metodoPago = pedido.paymentMethod;
            const totalVenta = pedido.totalAmount;


            if (ventasTotalesPorMetodoPago[metodoPago]) {
                ventasTotalesPorMetodoPago[metodoPago] += totalVenta;
            } else {

                ventasTotalesPorMetodoPago[metodoPago] = totalVenta;
            }
        });


        const ventasPorMetodoPago = Object.entries(ventasTotalesPorMetodoPago).map(
            ([metodoPago, total]) => ({
                id: metodoPago,
                value: total,
                label: metodoPago,
            })
        );

        setData(ventasPorMetodoPago);

        setLoad(true);

    }, [order])


    return (

        <Paper elevation={2} sx={{ width: '100%', p: 1.5 }} >
            <Typography sx={{ p: 1, pb: 2.5, textAlign: 'center' }} >PAYMENT METHOD</Typography>

            {load === true &&
                <PieChart
                    series={[
                        {
                            data,

                        },
                    ]}
                    width={400}
                    height={200}
                />
            }


        </Paper>
    );
}