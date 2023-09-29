export const drawerStyles = {
    drawerMain:
    {
        width: 235,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 235,
            backgroundColor: 'white',
            boxSizing: 'border-box',
            height: 'auto',
            bottom: 0,
        },
    },
    drawerPaper: {
        width: 235,
        borderRadius: 0
    },
    fireNav: {
        '& .MuiListItemButton-root': {
            paddingLeft: 24,
            paddingRight: 24,
        },
        '& .MuiListItemIcon-root': {
            minWidth: 0,
            marginRight: 16,
        },
        '& .MuiSvgIcon-root': {
            fontSize: 20,
        },
    },
    drawerBox: {
        display: 'flex',
        height: '100%'
    },
    drawer: {
        width: 235,
        borderRadius: 0
    },
    drawerTheme:
    {
        components: {
            MuiListItemButton: {
                defaultProps: {
                    disableTouchRipple: true,
                },
            },
        },
        palette: {
            mode: 'dark',
            primary: { main: 'rgb(102, 157, 246)' },
            background: { paper: 'rgb(5, 30, 52)' },
        },
    },
    drawerBoxItems: {
        bgcolor: 'rgba(71, 98, 130, 0.2)',
        py: 1.8,
    },
    drawerListItemTitle: {
        color: 'primary',
        fontWeight: 'medium',
        variant: 'body2',
    },
    drawerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0,
    }

}

