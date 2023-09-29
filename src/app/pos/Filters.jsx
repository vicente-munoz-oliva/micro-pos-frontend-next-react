import SelectedFilter from "@/components/SelectedFilter";
/* import TextFieldFilter from "@/components/TextFieldFilter"; */
import { Stack } from "@mui/material";
import { useState } from "react";
import SearchByLectureCode from "@/components/SearchByLectureCode";

export default function Filters({
    product,
    category,
    setFilteredProducts
}) {

    const [categorySelected, setCategorySelected] = useState("ALL");



    return (

        <Stack direction={"row"} spacing={2}  >

            <SelectedFilter
                setCategorySelected={setCategorySelected}
                categorySelected={categorySelected}
                data={product}
                filter={category}
                keyFilter={"categoryId"}
                label={"Category"}
                nameOfKeyDescription={"name"}
                setDataFilter={setFilteredProducts}
            />

            <SearchByLectureCode />

        </Stack>
    )
}