import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export default function MasterContainer({
    name,
    children
}) {

    return (

        <Container maxWidth="lg" sx={{ mt: 3 }} >

            <Grid container direction="row" gap={2} >

                <Grid item lg={12}   >

                    <Typography style={{ fontWeight: 700 }} variant="h6">
                        {name}
                    </Typography>

                </Grid>

                <Grid item lg={12}  >

                    <Divider />

                </Grid>

                <Grid item sm={12} lg={12}>

                    {children}

                </Grid>

            </Grid>

        </Container>

    )
}