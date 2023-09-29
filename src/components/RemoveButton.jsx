import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function RemoveButton({
    remove,
    disabled
}) {
    return (
        <IconButton
            onClick={remove}
            disabled={disabled}
            aria-label='remove' >
            <DeleteOutlineIcon />
        </IconButton>
    )
}