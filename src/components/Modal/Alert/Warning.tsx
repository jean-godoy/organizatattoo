import { FaRegTimesCircle, FaTrashAlt } from "react-icons/fa";
import { TemplateModal } from "../Template/TemplateModal";

type TProps = {
    title: string;
    response: (data: boolean) => Promise<boolean>;
    close: () => void;
}

export const Warning = ({ title, response, close }: TProps) => {

    const handleTrue = () => {
        response(true);
        close();
    };


    const handleFalse = () => {
        response(false);
        close();
    };

    return (
        <TemplateModal>
            <div className="m__alert__box">
                <header className="m__budget__header m__header__red">
                    <span className="header__title">{title}</span>
                    <FaRegTimesCircle className="modal__budget__icon" onClick={close} />
                </header>

                <div className="m__alert__content">
                    <div className="box__button__group">
                        <button className="bt__delete" onClick={handleTrue} >
                            Deletar
                            <FaTrashAlt />
                        </button>
                        <button className="btn" onClick={handleFalse} >Cancelar</button>
                    </div>
                </div>
            </div>
        </TemplateModal>
    );
}