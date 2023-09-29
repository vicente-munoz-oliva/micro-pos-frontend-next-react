

import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';

import useModal from "@/hooks/useModal";

export default function EditButton({
    id,
    setSelectedToEdit
}) {


    const { showModal } = useModal()

    return (
        <IconButton
            key={id}
            onClick={() => {
                setSelectedToEdit(id)
                showModal()
            }}
            style={{ width: '100%' }}
            size="small"
            color="primary"
            aria-label='remove' >
            <EditIcon fontSize="small" />
        </IconButton>
    )
}