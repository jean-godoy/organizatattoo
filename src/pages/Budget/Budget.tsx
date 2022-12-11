import { Main } from '../../components/Themes/Main/Main';
import { Dashboard } from '../../components/Themes/Dashboard/Dashboard';
import './budget.css';
import { Content } from '../../components/Themes/Content/Content';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { ModalBudgetForm } from '../../components/Modal/ModalBudgetForm/ModalBudgetForm';
import { showBudgets } from '../../services/budget/budgetService';

export const Budget = () => {

    const [modal, setModal] = useState<boolean>(false);
    const [budgets, setBudgets] = useState<any>();

    useEffect(() => {
        (async () => {
            const response = await showBudgets();
            console.log(response);

            if (response.status) {
                setBudgets(response.data);
            }
        })();
    }, []);

    const handleOpenModal = () => {
        setModal(true);
    }

    const handleCloseModal = () => {
        setModal(false);
    }
    // console.log(budgets);

    return (
        <Dashboard>
            {modal ? <ModalBudgetForm closeModal={handleCloseModal} /> : <div></div>}
            <Main>
                <Content>
                    <header className="content__header">
                        <span>Orçamentos</span>
                        <div className="header__right" onClick={handleOpenModal}>
                            <span>Novo Orçamento</span>
                            <FaPlus />
                        </div>
                    </header>

                    <ul className="g__list__ul">
                        {budgets?.map((item: any, index: number) => (
                            <li className="g__list__li" key={index}>
                                <span className="g__list__li__name">Orçamento de:</span>
                                <span className="g__list__li__value">{item.costumer_name}</span>
                            </li>
                        ))}
                    </ul>

                </Content>
            </Main>
        </Dashboard>
    );
}