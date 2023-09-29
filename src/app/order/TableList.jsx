'use client'

import Table from '@/components/Table'
import useOrder from '@/hooks/useOrder';

export default function TableList({
    columns
}) {

    let rowId = "orderId";

    const {
        order
    } = useOrder();

    return (

        <Table
            data={order}
            selected={[]}
            setSelected={null}
            rowId={rowId}
            columns={columns}
        />

    )

}