import { useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { ICostumer } from '../../@types';
import { TemplateContentColumn } from '../Modal/Template/TemplateContentColumn';
import { TemplateModal } from '../Modal/Template/TemplateModal';
import './modal.css';
import { ModalEditCostumer } from './ModalEditCostumer';

export interface ICloseModal {
    closeModal: () => void;
    costumer: ICostumer
}

export const ModalUserDetails = ({ closeModal, costumer }: ICloseModal) => {

    const [modal, setModal] = useState<boolean>(false);

    const handleModalEdit = () => {
        setModal(true);
    }

    const closeModalEdit = (): void => {
        setModal(false);
    }
    
    return (
        <TemplateModal>
            {modal ? <ModalEditCostumer costumer={costumer} closeModal={closeModalEdit} /> : <div></div>}
            <TemplateContentColumn>
                <div className="box-header">
                    <header>Dados Cadastrais</header>
                    <FaUserEdit onClick={handleModalEdit} className="modal-icon" />
                </div>
                <ul className="box-ul">
                    <li className="box-li">
                        <samp className="li-title">Nome:</samp>
                        <samp>{costumer.name}</samp>
                    </li>
                    <li className="box-li">
                        <samp className="li-title">Telefone:</samp>
                        <samp>{costumer.phone}</samp>
                    </li>
                    <li className="box-li">
                        <samp className="li-title">E-mail:</samp>
                        <samp>{costumer.email}</samp>
                    </li>
                    <li className="box-li">
                        <samp className="li-title">CPF:</samp>
                        <samp>{costumer.cpf}</samp>
                    </li>
                    <li className="box-li">
                        <samp className="li-title">Data de Nascimento:</samp>
                        <samp>{costumer.birth_date}</samp>
                    </li>
                    <li className="box-li">
                        <samp className="li-title">Endereço:</samp>
                        <samp>{costumer.address}</samp>
                    </li>
                    <li className="box-li">
                        <samp className="li-title">Bairro:</samp>
                        <samp>{costumer.district}</samp>
                    </li>
                    <li className="box-li">
                        <samp className="li-title">Cidade:</samp>
                        <samp>{costumer.city}</samp>
                    </li>
                    <li className="box-li">
                        <samp className="li-title">Cep:</samp>
                        <samp>{costumer.cep}</samp>
                    </li>
                    <li className="box-li">
                        <samp className="li-title">Estado:</samp>
                        <samp>{costumer.uf}</samp>
                    </li>
                    <li className="box-li">
                        <samp className="li-title">Status:</samp>
                        <samp>{costumer.is_active ? "Ativo" : "Desativado"}</samp>
                    </li>
                </ul>
                
                <button onClick={closeModal} className="modal-button">OK</button>
            </TemplateContentColumn>
        </TemplateModal>
    );
}