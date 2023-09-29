import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function AddButton({
    showModal
}) {

    return (
        <Button
           
            onClick={showModal}
            variant="contained"
            endIcon={<AddIcon />}>
            ADD
        </Button>
    )

}