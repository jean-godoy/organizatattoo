import { ChangeEvent, useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { registerCategory } from "../../../services/category/categoryService";
import { TemplateContentColumn } from "../Template/TemplateContentColumn";
import { TemplateModal } from "../Template/TemplateModal";

type TModalServiceProps = {
    url: string;
    title: string;
    label: string;
    closeModal: () => void;
}

export const ModalMaterialCategory = ({ url, title, label, closeModal }: TModalServiceProps) => {

    const [category, setCategory] = useState<string>('');

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setCategory(e.target.value);
    }

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            "category": category
        }
        const response = await registerCategory(data);

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
                    <FaRegTimesCircle className="modal__budget__icon" onClick={closeModal} />
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