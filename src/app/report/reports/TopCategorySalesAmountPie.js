'use client'

import useOrder from '@/hooks/useOrder';
import { Paper } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import useCategory from '@/hooks/useCategory';

export default function TopCategorySalesAmountPie() {

    const { order } = useOrder();

    const { category, findById } = useCategory();

    const [load, setLoad] = useState(false);

    const [data, setData] = useState([]);

    useEffect(() => {

        const ventasTotalesPorCategoria = {};

        order.forEach((venta) => {
            const categoryId = venta.items[0].product.categoryId;
            const totalVenta = venta.totalAmount;


            if (ventasTotalesPorCategoria[categoryId]) {
                ventasTotalesPorCategoria[categoryId] += totalVenta;
            } else {

                ventasTotalesPorCategoria[categoryId] = totalVenta;
            }
        });


        const ventasPorCategoria = Object.entries(ventasTotalesPorCategoria).map(
            ([categoryId, total]) => ({
                id: parseInt(categoryId),
                value: total,
                label: findById({ categoryId }).name,
            })
        );



        setData(ventasPorCategoria);

        setLoad(true);

    }, [order])


    return (

        <Paper elevation={2} sx={{ width: '100%', p: 1.5 }} >
            <Typography sx={{ p: 1, pb: 2.5, textAlign: 'center' }} >CATEGORIES</Typography>

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