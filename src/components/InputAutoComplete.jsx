import { onChangeAutocomplete } from "@/libs/onChange";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function InputAutoComplete({
    keyName,
    data,
    form,
    setForm,
    nameOfKeyDescription,
    label

}) {

    const selected = data.map(item => (
        {
            label: item.name,
            id: item[keyName]
        }
    )).find(e => e.id === form[keyName]);

    const options = data.map(item => ({
        label: item[nameOfKeyDescription],
        id: item[keyName]
    }));

    const onChange = (_, newValue) => {
        if (newValue) {
            onChangeAutocomplete({ value: newValue.id, name: keyName, form, setForm })
            return;
        }
        setForm({ ...form, [keyName]: null })
    }

    return (

        <Autocomplete

            size="small"
            renderOption={(props, option) => {
                return (
                    <li
                        {...props}
                        key={option.id}>
                        {option.label}
                    </li>
                );
            }}
            options={options}
            value={selected || null}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            onChange={onChange}
            renderInput={(params) => <TextField {...params} label={label} />}

        />
    )
}