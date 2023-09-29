import { CategoryContext } from "@/context/category";
import { deleteCategory, getCategorys, saveCategory, updateCategory } from "@/services/category";
import useLoading from "./useLoading";
import { toast } from "sonner";
import { validateCategory } from "@/validations/category";
import { mappedCreateCategory, mappedUpdateCategory } from "@/mapped/category";


export default function useCategory() {

    const {
        category,
        setCategory,
        selectedCategorys,
        setSelectedCategorys,
        selectedToEdit,
        setSelectedToEdit,
    } = CategoryContext();

    const { hideLoading, showLoading } = useLoading();


    async function reListCategorys() {

        try {
            showLoading();
            const data = await getCategorys({});
            setCategory(data);
            hideLoading();
        } catch (error) {
            hideLoading();
            console.log({ error })
            alert('Error getCategorys')
        }
    }

    async function removeCategorys() {

        if (!selectedCategorys.length) {
            toast.error("You have not selected any item!")
            return false;
        }

        showLoading();

        for await (const categoryId of selectedCategorys) {
            try {
                await deleteCategory({ id: categoryId });
            } catch (error) {
                toast.error("Error remove product - ID: " + categoryId);
            }
        }

        await reListCategorys();
        hideLoading();
        toast.success("Process completed successfully!")

    }

    async function createCategory({ form }) {
        try {
            await validateCategory({ form });
            const response = await saveCategory({ form: mappedCreateCategory({ form }) });
            await reListCategorys();
            toast.success(response.message)
            return true;
        } catch (error) {
            toast.error("Error -  create product - " + error.toString());
            return false;
        }
    }

    async function modifyCategory({ form }) {
        try {
            await validateCategory({ form });
            const response = await updateCategory({ form: mappedUpdateCategory({ form }) });
            await reListCategorys({});
            toast.success(response.message)
            return true;
        } catch (error) {
            toast.error("Error - modify product - " + error.toString());
            return false;
        }
    }

    function findById({ categoryId }) {

        let cat = category.find(e => e.categoryId == parseInt(categoryId));

        return {
            categoryId: cat.categoryId || null,
            name: cat.name || 'No found for Id: ' + categoryId,
            created: cat.created || null,
            isActive: cat.isActive || null
        }


    }

    let hasSelected = selectedCategorys.length;

    return {
        findById,
        modifyCategory,
        createCategory,
        reListCategorys,
        removeCategorys,
        category,
        selectedCategorys,
        setSelectedCategorys,
        selectedToEdit,
        setSelectedToEdit,
        hasSelected
    }

}