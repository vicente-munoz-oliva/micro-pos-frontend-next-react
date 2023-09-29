'use client'

import useLoading from '@/hooks/useLoading';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


export default function Loading() {

    const { loading } = useLoading();

    return (
        <div>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
           
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}