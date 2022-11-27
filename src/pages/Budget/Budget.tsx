import { Main } from '../../components/Themes/Main/Main';
import { Dashboard } from '../../components/Themes/Dashboard/Dashboard';
import './budget.css';
import { Content } from '../../components/Themes/Content/Content';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { ModalBudgetForm } from '../../components/Modal/ModalBudgetForm/ModalBudgetForm';

export const Budget = () => {

    const [modal, setModal] = useState<boolean>(false);

    const handleOpenModal = () => {
        setModal(true);
    }

    const handleCloseModal = () => {
        setModal(false);
    }

    return (
        <Dashboard>
            {modal ? <ModalBudgetForm closeModal={handleCloseModal} /> : <div></div> }
            <Main>
                <Content>
                    <header className="content__header">
                        <span>Orçamentos</span>
                        <div className="header__right" onClick={handleOpenModal}>
                            <span>Novo Orçamento</span>
                            <FaPlus />
                        </div>
                    </header>


                </Content>
            </Main>
        </Dashboard>
    );
}