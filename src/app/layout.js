import Box from '@mui/material/Box';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Drawer from '@/components/Drawer';
import { layoutStyles as styles } from '@/styles/layoutStyles';
import { ProductProvider } from '@/context/product';
import { Toaster } from 'sonner'
import Loading from '@/components/Loading'
import { LoadingProvider } from '@/context/loading';
import { ModalProvider } from '@/context/modal';
import { CartProvider } from '@/context/cart';
import { CategoryProvider } from '@/context/category';
import { OrderProvider } from '@/context/order';

export const metadata = {
  title: 'Point of sale ',
  description: 'Point of sale ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: '100%' }} >
      <body suppressHydrationWarning={true} style={{ height: '100%' }} >
        <Toaster richColors />
        <CartProvider>
          <CategoryProvider>
            <OrderProvider>
              <LoadingProvider>
                <ModalProvider>

                  <ProductProvider>
                    <ThemeRegistry>
                      <Loading />
                      <Drawer />
                      <Box
                        component="main"
                        sx={styles.layoutBox}>
                        {children}
                      </Box>

                    </ThemeRegistry>
                  </ProductProvider>
                </ModalProvider>
              </LoadingProvider>
            </OrderProvider>
          </CategoryProvider>
        </CartProvider>
      </body>
    </html>
  );
}
