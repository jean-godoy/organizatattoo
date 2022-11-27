import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ICostumer } from '../../@types';
import Loading from '../../components/Loading/Loading';
import { ModalUserDetails } from '../../components/ModalCostumer/ModalUserDetails';
import { ModalCostumerSearch } from '../../components/ModalCostumer/ModalCostumerSearch';
import { Content } from '../../components/Themes/Content/Content';
import { Dashboard } from '../../components/Themes/Dashboard/Dashboard';
import { Main } from '../../components/Themes/Main/Main';
import { getCostumers } from '../../services/costumer/costumerService';
import './costumer.css';

export type listType = {
    name: string,
    email: string
}

export type ModalToggle = {
    modalToggle: boolean
}

export const Costumer = () => {

    const [modalToggle, setModalToggle] = useState<boolean>(false);
    const [modalSearch, setModalSerach] = useState<boolean>(false);
    const [costumer, setCostumer] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [dataModal, setDataModal] = useState<any>();

    useEffect(() => {
        setLoading(true);
        (async () => {
            const response =  await getCostumers();
            if(response.status) {
                setCostumer(response.data);
                setLoading(false);
            }
        })()
    },[]);

    const closeModal = (): void => {
        setModalToggle(false);
    }

    const handleModal = (item: ICostumer) => {
        setModalToggle(true);
        setDataModal(item);
    }

    const openModalSearch = (): void => {
        setModalSerach(true);
    }



    return (
        <Dashboard>
            {loading ? <Loading /> : <div></div> }
            {modalToggle ? <ModalUserDetails closeModal={closeModal} costumer={dataModal} /> : <div></div>}
            {modalSearch ? <ModalCostumerSearch closeModalSearch={() => setModalSerach(false)} /> : <div></div>}
            <Main>
                <Content>
                    <div className="g__box__list">
                        <header className="g__list__header">
                            <span>Clientes</span>
                            <FaSearch className="icon-search" />
                        </header>

                        <ul className="g__list__ul">
                            {costumer ?
                                costumer?.map((item: any, index: number) => (
                                    <li className="g__list__li" key={index} onClick={() => handleModal(item)} >
                                        <span className="g__list__li__name">Nome:</span>
                                        <span className="g__list__li__value">{item.name}</span>
                                    </li>
                                ))
                                :
                                <li className="g__list__li" >
                                    <span className="g__list__li__name">Nenhum cliente cadastrado.</span>
                                </li>

                            }
                        </ul>
                    </div>
                </Content>
            </Main>
        </Dashboard>
    );
}