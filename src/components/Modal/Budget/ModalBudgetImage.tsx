import { FaRegTimesCircle } from "react-icons/fa";
import { TemplateModal } from "../Template/TemplateModal";

type TProps = {
    urlImage: string;
    closeModal: () => void;
}

export const ModalBudgetImage = ({ urlImage, closeModal }: TProps) => {

    return (
        <TemplateModal>
            <div className="m__budget__box">
                <header className="m__budget__header">
                    <span className="header__title">Imagem do projeto</span>
                    <FaRegTimesCircle className="modal__budget__icon" onClick={closeModal} />
                </header>
                <div className="m__budget__box">
                    <img src={`${process.env.REACT_APP_API}${urlImage}`} alt="Imagem do projeto" />
                </div>
            </div>
        </TemplateModal>
    );
}