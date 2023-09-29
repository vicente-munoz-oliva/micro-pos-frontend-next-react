'use client'

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import ReListButton from '@/components/ReListButton';
import { useProduct } from '@/hooks/useProduct';
import RemoveButton from '@/components/RemoveButton';
import useModal from "@/hooks/useModal"
import AddButton from '@/components/AddButton';
import useCategory from '@/hooks/useCategory';

export default function OptionPanel() {


    const {
        reListCategorys,
        removeCategorys,
        hasSelected
    } = useCategory();

    const { showModal } = useModal();

    return (

        <Grid
            container
            direction="row"
            justifyContent="flex-end">

            <Stack
                direction="row"
                spacing={2}>

                <RemoveButton
                    remove={removeCategorys}
                    disabled={!hasSelected}
                />

                <ReListButton
                    reList={reListCategorys}
                />

                <AddButton showModal={showModal} />

            </Stack>

        </Grid>

    )

}