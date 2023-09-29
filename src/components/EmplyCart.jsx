import { Grid, Stack } from '@mui/material';

export default function EmplyCart() {

    let photoUrl = "https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg";

    return (
        <Grid container justifyContent={"center"} textAlign={"center"} style={{ marginTop: 24 }} >
            <Stack spacing={2} >

                <img style={style.image} src={photoUrl} alt="emply-cart" />
            </Stack>

        </Grid>
    )
}

const style = {
    image: {
        height: 180,
        width: 180
    }
}