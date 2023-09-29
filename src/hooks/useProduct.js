import { ProductContext } from '@/context/product'
import { deleteProduct, getProducts, saveProduct, updateProduct } from '@/services/product';
import { toast } from 'sonner'
import useLoading from '@/hooks/useLoading';
import { validateProduct } from '@/validations/user';
import { mappedCreateProduct, mappedUpdateProduct } from '@/mapped/product';

export function useProduct() {

    const {
        product,
        setProduct,
        selectedProducts,
        setSelectedProducts,
        selectedToEdit,
        setSelectedToEdit
    } = ProductContext()

    const { hideLoading, showLoading } = useLoading();

    async function hasStock({ productId }) {

        let prod = product.find(e => e.productId === productId);


        return parseInt(prod.stock) >= 1

    }

    async function reListProducts() {

        try {
            showLoading();
            const data = await getProducts();
            setProduct(data);
            hideLoading();
        } catch (error) {
            hideLoading();
            console.log({ error })
            alert('Error getProducts')
        }
    }

    async function removeProducts() {

        if (!selectedProducts.length) {
            toast.error("You have not selected any item!")
            return false;
        }

        showLoading();

        for await (const productId of selectedProducts) {
            try {
                await deleteProduct({ id: productId });
            } catch (error) {
                toast.error("Error remove product - ID: " + productId);
            }
        }

        await reListProducts();
        hideLoading();
        toast.success("Process completed successfully!")

    }

    async function createProduct({ form }) {
        try {
            await validateProduct({ form, product });
            const response = await saveProduct({ form: mappedCreateProduct({ form }) });
            await reListProducts();
            toast.success(response.message)
            return true;
        } catch (error) {
            toast.error("Error -  create product - " + error.toString());
            return false;
        }
    }

    async function modifyProduct({ form }) {
        try {
            await validateProduct({ form, product });
            const response = await updateProduct({ form: mappedUpdateProduct({ form }) });
            await reListProducts();
            toast.success(response.message)
            return true;
        } catch (error) {
            toast.error("Error - modify product - " + error.toString());
            return false;
        }
    }

    let hasSelected = selectedProducts.length;

    return {
        hasStock,
        product,
        reListProducts,
        selectedProducts,
        setSelectedProducts,
        removeProducts,
        hasSelected,
        createProduct,
        selectedToEdit,
        setSelectedToEdit,
        modifyProduct
    }
}


