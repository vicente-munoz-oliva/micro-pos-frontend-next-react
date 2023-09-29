'use client'

import useOrder from '@/hooks/useOrder';
import { Paper } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

export default function TopSalesQtyBars() {

    const { order } = useOrder();

    const cantidadVendidaPorProducto = {};

    order.forEach((pedido) => {
        pedido.items.forEach((item) => {
            const nombreProducto = item.product.name;
            const cantidadVendida = item.qty;


            if (cantidadVendidaPorProducto[nombreProducto]) {
                cantidadVendidaPorProducto[nombreProducto] += cantidadVendida;
            } else {

                cantidadVendidaPorProducto[nombreProducto] = cantidadVendida;
            }
        });
    });


    const productosVendidos = Object.entries(cantidadVendidaPorProducto);


    productosVendidos.sort((a, b) => b[1] - a[1]);


    const topProductos = productosVendidos.slice(0, 6);

    const nombresProductos = topProductos.map((producto) => producto[0]);
    const cantidadesVendidas = topProductos.map((producto) => producto[1]);


    return (

        <Paper elevation={2} sx={{ width: '100%', p: 1.5 }} >
            
            {cantidadesVendidas.length > 0 && (

                <BarChart
                    xAxis={[
                        {
                            id: 'bestSellingProductsQty',
                            data: nombresProductos,
                            scaleType: 'band',
                        },
                    ]}
                    series={[
                        {
                            data: cantidadesVendidas,
                            label: 'TOP - BEST SELLING PRODUCTS (QTY)'
                        },
                    ]}

                    height={320}
                />

            )}


        </Paper>
    );
}