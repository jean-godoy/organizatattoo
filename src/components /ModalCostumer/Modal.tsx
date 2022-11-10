import { useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { ICostumer } from '../../@types';
import './modal.css';
import { ModalEditCostumer } from './ModalEditCostumer';

export interface ICloseModal {
    closeModal: () => void;
    costumer: ICostumer
}

export const Modal = ({ closeModal, costumer } : ICloseModal) => {

    const [toggleModal, setToggleModal] = useState<boolean>(false);

    const handleModal = ():void => {
        closeModal();
    }
    const handleModalEdit = () => {
        setToggleModal(true);
    }

    const closeModalEdit = ():void => {
        setToggleModal(false);
    }
    
    return(
        <div className="modal">
            {toggleModal ? <ModalEditCostumer costumer={costumer} closeModal={closeModalEdit} /> : <div></div> }
            <div className="modal-content">
                <div className="box-header">
                    <header>Cliente <label>Jhon Doe</label></header>
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
                        <samp>{costumer.uf  }</samp>
                    </li>
                </ul>
                <button onClick={handleModal} className="modal-button">OK</button>
            </div>
        </div>
    );
}