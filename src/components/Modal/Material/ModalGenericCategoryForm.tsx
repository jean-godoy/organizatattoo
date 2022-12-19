import { ChangeEvent, useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { toast } from "react-toastify";
import { registerModalCategory } from "../../../services/modal/modalGenereciCategoryService";
import { TemplateContentColumn } from "../Template/TemplateContentColumn";
import { TemplateModal } from "../Template/TemplateModal";

type TModalServiceProps = {
    url: string;
    title: string;
    label: string;
    closeModal: () => void;
}


/**
 * Modal Generica que salva uma só categoria na DB.
 * Antes da inserção, faz a vereficação para não gerar 
 * duplicates. 
 * @param url, title, label 
 * @returns 
 */
export const ModalGenericCategoryForm = ({ url, title, label, closeModal }: TModalServiceProps) => {

    const [category, setCategory] = useState<string>('');

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setCategory(e.target.value);
    }

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            "product_name": category
        }
        const response = await registerModalCategory(url, data);
        console.log(response);
        
        if(response.is_replicated) {
            toast.warning(`${response.message}`);
        }

        if (!response.status) {
            toast.warning(`${response.message}.`);
        }

        if (response.status) {
            toast.success("Categoria adicionada com sucesso.");
            closeModal();
        }

    }

    return (
        <TemplateModal>
            <TemplateContentColumn>
                <header className="m__budget__header">
                    <span className="header__title">{ title }</span>
                    <FaExclamationTriangle className="modal__budget__icon" />
                </header>

                <form onSubmit={handleSubmit} className="box__form__store">

                    <div className="input__group__border">
                        <div className="input__store__group">
                            <input required className="mc-input" type="text" onChange={handleInput} name="name" />
                            <label className="mc-label">{ label }</label>
                        </div>
                    </div>

                    <div className="box-button">
                        <button className="btn bt-cancel" onClick={closeModal} >Cancelar</button>
                        <button className="btn">Salvar Categoria</button>
                    </div>

                </form>

            </TemplateContentColumn>
        </TemplateModal>
    );
}