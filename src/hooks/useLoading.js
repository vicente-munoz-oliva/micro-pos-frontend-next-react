import { LoadingContext } from "@/context/loading";


export default function useLoading() {

    const {
        setLoading,
        loading
    } = LoadingContext()

    const showLoading = () => setLoading(true);

    const hideLoading = () => setLoading(false);


    return {
        loading,
        showLoading,
        hideLoading
    }

}