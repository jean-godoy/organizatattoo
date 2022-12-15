import { FaRegTimesCircle } from "react-icons/fa";
import { TemplateContentColumn } from "../Template/TemplateContentColumn";
import { TemplateModal } from "../Template/TemplateModal";
import { currency, handleFormatDateToOutput, handlePrice } from '../../../services/mask/maskService';
import { KeyboardEvent, useEffect, useState } from "react";
import { ModalBudgetEdit } from "./ModalBudgetEdit";
import { ModalBudgetImage } from "./ModalBudgetImage";

type TProps = {
    data: any;
    closeModal: () => void;
}

export const ModalBudgetDetails = ({ data, closeModal }: TProps) => {

    const [modal, setModal] = useState<boolean>(false);
    const [budget, setBudget] = useState<any>();
    const [modalImage, setModalImage] = useState<boolean>(false);
    const [esc, setEsc] = useState<any>();

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

    return (
        <TemplateModal>
            {modal ? <ModalBudgetEdit budget={budget} closeModal={closeEditModal} /> : <div></div>}
            {modalImage ? <ModalBudgetImage closeModal={closeModalImage} urlImage={data.url_image} /> : <div></div>}
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

                <div className="box-button">
                    <button className="btn" onClick={openModal} >Editar</button>
                    <button className="btn" onClick={closeModal} >OK</button>
                </div>
            </div>
        </TemplateModal>
    );
}