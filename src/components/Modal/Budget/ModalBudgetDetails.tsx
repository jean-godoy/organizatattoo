import { FaRegTimesCircle, FaTrashAlt } from "react-icons/fa";
import { TemplateContentColumn } from "../Template/TemplateContentColumn";
import { TemplateModal } from "../Template/TemplateModal";
import { currency, handleFormatDateToOutput, handlePrice } from '../../../services/mask/maskService';
import { KeyboardEvent, useEffect, useState } from "react";
import { ModalBudgetEdit } from "./ModalBudgetEdit";
import { ModalBudgetImage } from "./ModalBudgetImage";
import { Warning } from "../Alert/Warning";
import { destroyBudget } from "../../../services/budget/budgetService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type TProps = {
    data: any;
    closeModal: () => void;
}

export const ModalBudgetDetails = ({ data, closeModal }: TProps) => {

    const navigate = useNavigate();

    const [modal, setModal] = useState<boolean>(false);
    const [budget, setBudget] = useState<any>();
    const [modalImage, setModalImage] = useState<boolean>(false);
    const [esc, setEsc] = useState<any>();
    const [modalAlert, setModalAlert] = useState<boolean>(false);

    useEffect(() => {
        setBudget(data);
    }, []);

    const handleKeyboardEvent = (e: KeyboardEvent<HTMLDivElement>) => {
        alert()
        console.log(e.key);

    };


    const openModal = () => setModal(true);
    const closeEditModal = () => setModal(false);

    const openModalImage = () => setModalImage(true);
    const closeModalImage = () => setModalImage(false);

    const openModalAlert = () => {
        setModalAlert(true);
    }

    const closeModalAlert = () => setModalAlert(false);

    const getModalAlertResponse = async (res: boolean): Promise<any> => {
        if (res) {
            const response = await destroyBudget('/api/budget', data.id);
            console.log(response);
            if (response.code === 204) {
                toast.success(`${response.message}`);
                closeModal();
                navigate('/orcamentos');
            }

            if (response.code === 501) {
                toast.warning('Occoreu algum erro ao deletar orçamento, tente novamente mais tarde.');
            }
        }


    }

    const handleDestroy = async () => {
        const response = await destroyBudget('/api/budget', data.id);
        console.log(response);
        if (response.code === 204) {
            toast.success(`${response.message}`);
            closeModal();
        }
    }


    return (
        <TemplateModal>

            {modal ? <ModalBudgetEdit budget={budget} closeModal={closeEditModal} /> : <div></div>}
            {modalImage ? <ModalBudgetImage closeModal={closeModalImage} urlImage={data.url_image} /> : <div></div>}
            {modalAlert ? <Warning
                title="Deseja deletar orçamento?"
                response={getModalAlertResponse}
                close={closeModalAlert}
            />
                :
                <div></div>
            }

            <div className="m__budget__box" onKeyUp={(e) => handleKeyboardEvent(e)} >
                <header className="m__budget__header">
                    <span className="header__title">Orçamento de {data?.costumer_name}</span>
                    <FaRegTimesCircle className="modal__budget__icon" onClick={closeModal} />
                </header>

                <ul className="box-ul">

                    <li className="box-li">
                        <samp className="li-title">Nome do Orçamento:</samp>
                        <samp className="box-li-span-desc">{data.name}</samp>
                    </li>

                    <li className="box-li">
                        <samp className="li-title">Cliente:</samp>
                        <samp className="box-li-span-desc">{data.costumer_name}</samp>
                    </li>

                    <li className="box-li">
                        <samp className="li-title">Profissional:</samp>
                        <samp className="box-li-span-desc">{data.professional_name}</samp>
                    </li>

                    <li className="box-li">
                        <samp className="li-title">Tipo de Serviço:</samp>
                        <samp className="box-li-span-desc">{data.type_service}</samp>
                    </li>

                    <li className="box-li">
                        <samp className="li-title">Estilo do Serviço:</samp>
                        <samp className="box-li-span-desc">{data.style_service}</samp>
                    </li>

                    <li className="box-li">
                        <samp className="li-title">Região do Corpo:</samp>
                        <samp className="box-li-span-desc">{data.body_region}</samp>
                    </li>

                    <li className="box-li">
                        <samp className="li-title">Sessoẽs:</samp>
                        <samp className="box-li-span-desc">{data.sessions}</samp>
                    </li>

                    <li className="box-li">
                        <samp className="li-title">Largura:</samp>
                        <samp className="box-li-span-desc">{data.width}cm</samp>
                    </li>

                    <li className="box-li">
                        <samp className="li-title">Altura:</samp>
                        <samp className="box-li-span-desc">{data.heigth}cm</samp>
                    </li>

                    <li className="box-li">
                        <samp className="li-title">Valor:</samp>
                        <samp className="box-li-span-desc">{currency(`${data.price}`)}</samp>
                    </li>

                    <li className="box-li">
                        <samp className="li-title">Válido até:</samp>
                        <samp className="box-li-span-desc">{handleFormatDateToOutput(data.validated_at)}</samp>
                    </li>


                    <li className="box-li">
                        <samp className="li-title">Observações:</samp>
                        <samp className="box-li-span-desc">{data.note}</samp>
                    </li>

                    {data.url_image && (
                        <li className="box-li">
                            <button className="btn" onClick={openModalImage} >Vizualizar imagem do projeto</button>
                        </li>
                    )}

                </ul>

                <div className="box__button__group">
                    <button className="bt__delete" onClick={openModalAlert} >
                        Deletar
                        <FaTrashAlt />
                    </button>
                    <button className="btn" onClick={openModal} >Editar</button>
                    <button className="btn" onClick={closeModal} >OK</button>
                </div>
            </div>
        </TemplateModal>
    );
}