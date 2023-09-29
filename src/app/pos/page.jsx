import Grid from '@mui/material/Grid';
import ProductCard from '@/app/pos/ProductList';
import OrderResumen from './OrderResumen';

export default function BasicGrid() {

    return (

        <Grid container spacing={0.5} columns={{ xs: 10, lg: 10 }}  >

            <Grid item xs={7} lg={7} style={styles.productList} >

                <ProductCard />

            </Grid>

            <Grid item lg={3} xs={3} >

                <OrderResumen />

            </Grid>

        </Grid>

    );

}

const styles = {
    productList: {
        height: '100%',
        overflow: 'auto',
        padding: 10,
    }
}