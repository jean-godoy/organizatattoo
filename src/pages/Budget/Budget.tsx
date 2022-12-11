import { Main } from '../../components/Themes/Main/Main';
import { Dashboard } from '../../components/Themes/Dashboard/Dashboard';
import './budget.css';
import { Content } from '../../components/Themes/Content/Content';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { showBudgets } from '../../services/budget/budgetService';
import Loading from '../../components/Loading/Loading';
import { ModalBudgetShow } from '../../components/Modal/Budget/ModalBudgetShow';
import { ModalBudgetForm } from '../../components/Modal/Budget/ModalBudgetForm';

export const Budget = () => {

    const [modal, setModal] = useState<boolean>(false);
    const [modalDetails, setModalDetails] = useState<boolean>(false);
    const [budgets, setBudgets] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [dataDetails, setDataDetails] = useState<any>();

    useEffect(() => {
        setLoading(true);
        (async () => {
            const response = await showBudgets();

            if (response.status) {
                setBudgets(response.data);
                setLoading(false)
            }
        })();
    }, []);

    const handleOpenModal = () => {
        setModal(true);
    }

    const handleCloseModal = () => {
        setModal(false);
    }

    const handleShowModalDetails = (data: any) => {
        setDataDetails(data);
        setModalDetails(true);
    }

    const handleCloseModalDetails = () => {
        setModalDetails(false);
    }

    return (
        <Dashboard>
            {loading ? <Loading /> : <div></div>}
            {modal ? <ModalBudgetForm closeModal={handleCloseModal} /> : <div></div>}
            {modalDetails ? <ModalBudgetShow data={dataDetails} closeModal={handleCloseModalDetails} /> : <div></div>}
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
                            <li className="g__list__li" key={index} onClick={() => handleShowModalDetails(item)} >
                                <span className="g__list__li__name">Orçamento:</span>
                                <span className="g__list__li__value">{item.costumer_name}</span>
                            </li>
                        ))}

                       
                    </ul>

                </Content>
            </Main>
        </Dashboard>
    );
}