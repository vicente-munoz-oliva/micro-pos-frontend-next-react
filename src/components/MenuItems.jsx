import AssessmentIcon from '@mui/icons-material/Assessment';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import BentoIcon from '@mui/icons-material/Bento';
import { menuItemsStyles as styles } from '@/styles/menuItemsStyles';
import Link from 'next/link';



const data = [
    { icon: <PointOfSaleIcon />, label: 'Point of sale', href: '/pos' },
    { icon: <Inventory2Icon />, label: 'Product', href: '/product' },
    { icon: <BentoIcon />, label: 'Category', href: '/category' },
    { icon: <RequestPageIcon />, label: 'Order', href: '/order' },
    { icon: <AssessmentIcon />, label: 'Report', href: '/report' },
];

export default function MenuItems() {

    return (

        data.map((item) => (
            <Link passHref href={item.href} key={item.label} style={{ textDecoration: 'none' }} >
                <ListItemButton sx={styles.listItemButton}>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.label} primaryTypographyProps={styles.menuListItemText} />
                </ListItemButton>
            </Link>
        ))

    )

}