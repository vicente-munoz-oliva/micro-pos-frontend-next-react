
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import useCart from '@/hooks/useCart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EmplyCart from '@/components/EmplyCart';

export default function ProductOrderList({
    products
}) {

    const { removeProductFromCart, updateCartItemQuantity } = useCart();

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>

            <nav aria-label="main mailbox folders">
                <List dense   >
                    {products.length ? products.map(product => (

                        <ListItem key={product.productId} 
                            secondaryAction={
                                <IconButton color='error' onClick={() => removeProductFromCart({ productId: product.productId })} edge="end" aria-label="comments">
                                    <DeleteOutlineIcon fontSize='small' />
                                </IconButton>
                            }>

                            <input
                                style={style.inputQty}
                                onChange={(event) => updateCartItemQuantity({ productId: product.productId, newQuantity: event.target.value })}
                                value={product.qty}
                                type="number"

                            />

                            <ListItemText sx={{ pl: 1.2 }} primary={product.name} secondary={
                                product.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })
                            } />

                        </ListItem>
                    )) :
                        <EmplyCart />
                    }


                </List>
            </nav>

        </Box>
    );
}

const style = {
    inputQty: {
        width: '55px',
        padding: '6px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    }
}