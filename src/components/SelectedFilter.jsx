import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

export default function SelectedFilter({
    keyFilter,
    data,
    setDataFilter,
    nameOfKeyDescription,
    label,
    filter,
    categorySelected,
    setCategorySelected
}) {

    const handleFilterChange = (filterValue) => {

        setCategorySelected(filterValue)

        if (filterValue === "ALL")
            setDataFilter(data);
        else
            setDataFilter(data.filter(
                (ob) => ob[keyFilter] === parseInt(filterValue)
            ));

    };

    return (

        <TextField
            size='small'
            sx={{ bgcolor: 'white', width: 250 }}
            select
            defaultValue={"ALL"}
            label={label}
            value={categorySelected}
            onChange={(event) => handleFilterChange(event.target.value)}
        >

            <MenuItem value="ALL">
                All
            </MenuItem>

            {filter.map((option) => (
                <MenuItem key={option[keyFilter]} value={option[keyFilter]}>
                    {option[nameOfKeyDescription]}
                </MenuItem>
            ))}

        </TextField>

    )

}
