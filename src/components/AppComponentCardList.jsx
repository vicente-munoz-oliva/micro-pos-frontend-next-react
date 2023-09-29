
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

export default function AppComponentCardList() {

    const menus = [{
        key: 1,
        name: 'Point of sale',
        img: 'https://i.postimg.cc/pdNp54X2/point-of-sale.png',
        href: '/pos'
    }, {
        key: 2,
        name: 'Product',
        img: 'https://www.gstatic.com/mobilesdk/190823_mobilesdk/extensions_allFeatures.png',
        href: '/product'
    }, {
        key: 3,
        name: 'Category',
        img: 'https://www.gstatic.com/mobilesdk/191021_mobilesdk/discoverycards/appdistro@2x.png',
        href: '/category'
    }, {
        key: 4,
        name: 'Order',
        img: 'https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/storage.png',
        href: '/order'
    }, {
        key: 5,
        name: 'Report',
        img: 'https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/analytics.png',
        href: '/report'
    }]

    return (
        <Grid container spacing={3} >
            {menus.map(menu => (
                <Grid key={menu.key} item xl={4} xs={4}  >
                    <Link style={{ textDecoration: 'none', width: '100%' }} href={menu.href} >
                        < Card >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={menu?.img}
                                    alt={menu.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {menu.name}
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card >
                    </Link>
                </Grid>
            ))}

        </Grid>
    );
}