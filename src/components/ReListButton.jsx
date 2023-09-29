import CachedIcon from '@mui/icons-material/Cached';
import IconButton from '@mui/material/IconButton';

export default function ReListButton({
    reList
}) {

    return (
        <IconButton
            aria-label='reload'
            onClick={reList} >
            <CachedIcon />
        </IconButton>
    )

}