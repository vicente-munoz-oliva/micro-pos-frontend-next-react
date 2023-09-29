'use client'

import useOrder from '@/hooks/useOrder';
import { Paper } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

export default function TopSalesAmountBars() {

    const { order } = useOrder();

    const ventasTotalesPorProducto = {};

    order.forEach((pedido) => {
        pedido.items.forEach((item) => {
            const nombreProducto = item.product.name;
            const cantidadVendida = item.qty;
            const precioUnitario = item.price;
            const ventaTotal = cantidadVendida * precioUnitario;

            if (ventasTotalesPorProducto[nombreProducto]) {
                ventasTotalesPorProducto[nombreProducto] += ventaTotal;
            } else {

                ventasTotalesPorProducto[nombreProducto] = ventaTotal;
            }
        });
    });


    const productosConVentasTotales = Object.entries(ventasTotalesPorProducto);

    productosConVentasTotales.sort((a, b) => b[1] - a[1]);

    const top8Productos = productosConVentasTotales.slice(0, 6);

    const nombresProductos = top8Productos.map((producto) => producto[0]);
    const ventasTotales = top8Productos.map((producto) => producto[1]);

    return (

        <Paper elevation={2} sx={{ width: '100%', p: 1.5 }} >
            {ventasTotales.length > 0 && (
                <BarChart
                    xAxis={[
                        {
                            id: 'bestSellingProducts',
                            data: nombresProductos,
                            scaleType: 'band',
                        },
                    ]}
                    series={[
                        {
                            data: ventasTotales,
                            label: 'TOP - BEST SELLING PRODUCTS (TOTAL AMOUNT)'
                        },
                    ]}

                    height={320}
                />
            )}


        </Paper>
    );
}