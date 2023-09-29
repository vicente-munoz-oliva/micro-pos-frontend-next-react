
import Stack from '@mui/material/Stack';
import { orderColumns } from '@/libs/tableColumns';
import MasterContainer from '@/components/MasterContainer';
import OptionPanel from './OptionPanel';
import TableList from './TableList';
import Form from './Form';
export default function Page() {

    let name = "ORDER";

    return (

        <MasterContainer name={name} >

            <Stack spacing={2} direction="column">

                <OptionPanel />

                <Form />

                <TableList columns={orderColumns} />

            </Stack>


        </MasterContainer >

    )
}


