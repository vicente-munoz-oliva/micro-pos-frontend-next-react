
import { ModalContext } from "@/context/modal";
import { useProduct } from "./useProduct";

export default function useModal() {

    const { modal, setModal } = ModalContext();
    const { setSelectedToEdit } = useProduct();

    const showModal = () => setModal(true);

    const hideModal = () => {
        setSelectedToEdit(null);
        setModal(false);

    }

    return {
        modal,
        showModal,
        hideModal
    }

}