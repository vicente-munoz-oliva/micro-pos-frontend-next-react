
import MasterContainer from "@/components/MasterContainer"
import TopSalesQtyBars from "./reports/TopSalesQtyBars"
import { Grid } from "@mui/material"
import TopSalesAmountBars from "./reports/TopSalesAmountBars"
import SalesByDateBars from "./reports/SalesByDateBars"
import TopMethodPaymentPie from "./reports/TopMethodPaymentPie"
import TopCategorySalesAmountPie from "./reports/TopCategorySalesAmountPie"
export default function Page() {

    return (

        <MasterContainer name={"REPORT"} >
            <Grid container spacing={3} sx={{ mt: 1, pb: 6 }} >
                <Grid item xl={6} xs={6}  >
                    <TopMethodPaymentPie />
                </Grid>
                <Grid item xl={6} xs={6}  >
                    <TopCategorySalesAmountPie />
                </Grid>
                <Grid item xl={12} xs={12}  >
                    <SalesByDateBars />
                </Grid>

                <Grid item xl={12} xs={12}  >
                    <TopSalesAmountBars />
                </Grid>
                <Grid item xl={12} xs={12}  >
                    <TopSalesQtyBars />
                </Grid>

            </Grid>
        </MasterContainer>

    )
}