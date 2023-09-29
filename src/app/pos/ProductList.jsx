'use client'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import { useProduct } from '@/hooks/useProduct';
import { useEffect, useState } from 'react';
import useCart from '@/hooks/useCart';
import useCategory from '@/hooks/useCategory';
import Filters from './Filters';


export default function ProductList() {

    const { product } = useProduct();

    const { category } = useCategory();

    const { addProductToCart } = useCart();

    const [filteredProducts, setFilteredProducts] = useState(product);

    useEffect(() => {
        setFilteredProducts(product);
    }, [product])

    return (

        <Grid container spacing={1.6} columns={{ xs: 5, sm: 5, md: 5, lg: 5 }}>

            <Grid item lg={5} sm={5} xs={5} >

                <Filters
                    category={category}
                    product={product}
                    setFilteredProducts={setFilteredProducts}
                />

            </Grid>

            {filteredProducts.filter(e => e.isActive).map(e => (

                <Grid key={e.productId} item lg={1} md={1} sm={5} xs={5}  >

                    <Card sx={{ width: '100%' }} onClick={() => addProductToCart({ newProduct: e })} >

                        <CardActionArea  >

                            <CardMedia
                                component="img"
                                sx={{ height: '100%', p: 2.5 }}
                                image={e.photoUrl}
                                alt={e.name}
                            />

                            <CardContent sx={{ p: 1 }} >

                                <Typography noWrap variant="body2" >
                                    {e.name}
                                </Typography>

                                <Grid container justifyContent={"space-between"} >

                                    <Typography noWrap variant="caption" color="text.secondary">
                                        {e.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
                                    </Typography>


                                    <Typography noWrap variant="caption" color="text.secondary">
                                        Stock: {e.stock}
                                    </Typography>

                                </Grid>

                            </CardContent>

                        </CardActionArea>

                    </Card>

                </Grid>
            ))}

        </Grid>

    );
}