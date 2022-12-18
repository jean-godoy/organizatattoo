import { Main } from '../../components/Themes/Main/Main';
import { Dashboard } from '../../components/Themes/Dashboard/Dashboard';
import './budget.css';
import { Content } from '../../components/Themes/Content/Content';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { showBudgets } from '../../services/budget/budgetService';
import Loading from '../../components/Loading/Loading';
import { ModalBudgetDetails } from '../../components/Modal/Budget/ModalBudgetDetails';
import { ModalBudgetForm } from '../../components/Modal/Budget/ModalBudgetForm';

export const Budget = () => {

    const [modal, setModal] = useState<boolean>(false);
    const [modalDetails, setModalDetails] = useState<boolean>(false);
    const [budgets, setBudgets] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [dataDetails, setDataDetails] = useState<any>();
    const [isEmpty, setIsEmpty] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        (async () => {
            const response = await showBudgets();

            if (response.data.data) {
                setBudgets(response.data.data);
                setLoading(false);
            }


            if (!response.data.data.length) {
                setLoading(false);
                setIsEmpty(true);
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
            {modalDetails ? <ModalBudgetDetails data={dataDetails} closeModal={handleCloseModalDetails} /> : <div></div>}
            <Main>
                <Content>
                    <header className="content__header">
                        <span>Orçamentos</span>
                        <div className="header__right" onClick={handleOpenModal}>
                            <span>Novo Orçamento.</span>
                            <FaPlus />
                        </div>
                    </header>

                    <ul className="g__list__ul">
                        {
                            budgets?.map((item: any, index: number) => (
                                <li className="g__li__card" key={index} onClick={() => handleShowModalDetails(item)} >
                                    <div className="g__li__card__group">
                                        <span className="g__list__li__name">Cliente:</span>
                                        <span className="g__list__li__value">{item.costumer_name}</span>
                                    </div>
                                    <div className="g__li__card__group">
                                        <span className="g__list__li__name">Orçamento:</span>
                                        <span className="g__list__li__value">{item.name}</span>
                                    </div>
                                </li>
                            ))

                        }

                        {isEmpty && (
                            <li className="g__li__card" >
                                <div className="g__li__card__group">
                                    <span className="g__list__li__name">Nenhum orçamento cadastrado</span>
                                </div>
                            </li>
                        )}
                    </ul>

                </Content>
            </Main>
        </Dashboard >
    );
}