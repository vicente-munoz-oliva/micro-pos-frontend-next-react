
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Avatar, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';


const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} placement="left-start" classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#ffff',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 500,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

export default function TooltipOrderDetail({
    items
}) {

    return (

        <HtmlTooltip
            title={
                <>
                    <List dense>

                        {items.map(e => (
                            <ListItem key={e.orderLineId} >
                                <ListItemIcon>
                                    <Avatar alt="Travis Howard" src={e.product?.photoUrl} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={e.product?.name}
                                    secondary={e.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }) + " x " + e.qty + ": " + (e.price * e.qty).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
                                />
                            </ListItem>
                        ))}

                    </List>


                </>
            }
        >
            <Button size='small' >Items</Button>
        </HtmlTooltip>

    );
}