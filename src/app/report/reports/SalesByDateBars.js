'use client'

import useOrder from '@/hooks/useOrder';
import { Paper } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect, useState } from 'react';

export default function SalesByDateBars() {

    const { order } = useOrder();

    const [load, setLoad] = useState(false);

    const [name, setName] = useState([]);
    const [data, setData] = useState([]);

    const parseData = async () => {

        const ventasTotalesPorFecha = {};

        for (let index = 0; index < order.length; index++) {

            let pedido = order[index];

            const fechaVenta = pedido.createdDate;
            const totalVenta = pedido.totalAmount;

            if (ventasTotalesPorFecha[fechaVenta]) {
                ventasTotalesPorFecha[fechaVenta] += totalVenta;
            } else {

                ventasTotalesPorFecha[fechaVenta] = totalVenta;
            }


        }


        const fechasVentas = Object.keys(ventasTotalesPorFecha);
        const ventasPorFecha = Object.values(ventasTotalesPorFecha);

        return {
            fechasVentas,
            ventasPorFecha
        }

    }

    useEffect(() => {


        (async () => {

            const {
                fechasVentas,
                ventasPorFecha
            } = await parseData();

            setName(fechasVentas);
            setData(ventasPorFecha);


            setLoad(true);

        })();


    }, [order])




    return (

        <Paper elevation={2} sx={{ width: '100%', p: 1.5 }} >


            {load === true && data.length > 0 &&
                <BarChart
                    xAxis={[
                        {
                            id: 'SalesByDateBars',
                            data: name,
                            scaleType: 'band',
                        },
                    ]}
                    series={[
                        {
                            data,
                            label: 'DAILY SALES'
                        },
                    ]}

                    height={320}
                />
            }


        </Paper>
    );
}