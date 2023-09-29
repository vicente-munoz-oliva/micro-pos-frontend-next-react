import useCart from "@/hooks/useCart";
import { TextField } from "@mui/material";
import { useState } from "react";
import QrCode2Icon from '@mui/icons-material/QrCode2';

export default function SearchByLectureCode() {

    const { searchLectureCode } = useCart();

    const [lectureCode, setLectureCode] = useState('');

    function submitSearch(event) {

        event.preventDefault();

        let result = searchLectureCode({
            value: lectureCode
        })

        if (result) setLectureCode("")


    }

    return (
        <form style={{ width: '100%' }} onSubmit={submitSearch}>
            <TextField
                required
                value={lectureCode}
                onChange={(event) => setLectureCode(event.target.value)}
                label="Lecture code"
                fullWidth
                sx={{ bgcolor: 'white' }}
                size="small"
                InputProps={{
                    startAdornment: <QrCode2Icon />,
                }}
            />
        </form>
    )
}


