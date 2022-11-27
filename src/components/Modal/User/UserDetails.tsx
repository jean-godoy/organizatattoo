import { useState } from 'react';
import { FaUser, FaUserPlus } from 'react-icons/fa';
import { IModalUser } from '../../../@types';
import { TemplateContentColumn } from '../Template/TemplateContentColumn';
import { TemplateModal } from '../Template/TemplateModal';
import { ModalUserEdit } from './ModalUserEdit';
import './userModal.css';

export const UserDetails = ({ user, closeModal }: IModalUser) => {

    const [modal, setModal] = useState<Boolean>(false);

    const openModal = () => {
        setModal(true);
    }

    const modalClose = () => {
        setModal(false);
    }
    
    return (
        <TemplateModal>
            {modal ? <ModalUserEdit user={user} closeModal={modalClose} /> : <div></div> }
            <TemplateContentColumn>
                <header className="m__budget__header">
                    <span className="header__title">Detalhes do Usuário</span>
                    <FaUserPlus className="modal__budget__icon" onClick={openModal} />
                </header>

                <ul className="box-ul">
                    <li className="box-li">
                        <samp className="li-title">Nome:</samp>
                        <samp>{user.name}</samp>
                    </li>
    
                    <li className="box-li">
                        <samp className="li-title">E-mail:</samp>
                        <samp>{user.email}</samp>
                    </li>

                    <li className="box-li">
                        <samp className="li-title">Senha:</samp>
                        <samp>{user.password}</samp>
                    </li>
                    
                    <li className="box-li">
                        <samp className="li-title">Regras:</samp>
                        <samp>{user.rules}</samp>
                    </li>

                    <li className="box-li">
                        <samp className="li-title">Usuário Ativo:</samp>
                        <samp>{user.is_active ? "Ativo" : "Desativado"}</samp>
                    </li>
                    
                </ul>

                <button onClick={() => closeModal()} className="modal-button">OK</button>
            </TemplateContentColumn>
        </TemplateModal>
    );
}