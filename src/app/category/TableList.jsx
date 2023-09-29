'use client'

import Table from '@/components/Table'
import useCategory from '@/hooks/useCategory';

export default function TableList({
    columns
}) {

    let rowId = "categoryId";

    const {
        selectedCategorys,
        setSelectedCategorys,
        category
    } = useCategory();



    return (

        <Table
            data={category}
            selected={selectedCategorys}
            setSelected={setSelectedCategorys}
            rowId={rowId}
            columns={columns}
        />

    )

}