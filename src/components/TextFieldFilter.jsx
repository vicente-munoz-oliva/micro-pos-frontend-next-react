import InputAdornment from "@mui/material/InputAdornment";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export default function TextFieldFilter({
    keyFilter,
    data,
    setDataFilter
}) {

    const handleFilterChange = (filterValue) => {

        const filtered = data.filter((ob) =>
            ob[keyFilter].toLowerCase().includes(filterValue.toLowerCase())
        );

        setDataFilter(filtered);

    };


    return (

        <TextField
            onChange={(event) => handleFilterChange(event.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon fontSize='small' />
                    </InputAdornment>
                ),
            }}
            sx={{ bgcolor: 'white' }}
            label="Search"
            size="small"
            variant="outlined"
        />

    )

}
