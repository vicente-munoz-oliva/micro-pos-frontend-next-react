'use client'

import Table from '@/components/Table'
import { useProduct } from '@/hooks/useProduct';

export default function TableList({
    columns
}) {

    let rowId = "productId";

    const {
        selectedProducts,
        setSelectedProducts,
        product
    } = useProduct();

    return (

        <Table
            data={product}
            selected={selectedProducts}
            setSelected={setSelectedProducts}
            rowId={rowId}
            columns={columns}
        />

    )

}