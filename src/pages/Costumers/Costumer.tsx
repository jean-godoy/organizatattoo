import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ICostumer } from '../../@types';
import { Modal } from '../../components /ModalCostumer/Modal';
import { ModalCostumerSearch } from '../../components /ModalCostumer/ModalCostumerSearch';
import { Dashboard } from '../../components /Themes/Dashboard/Dashboard';
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
    const [costumer, setCostumer] = useState<ICostumer>({} as ICostumer);
    const costumers = [
        {
            address: "Rua Jackson",
            birth_date: "2022-11-10",
            cep: "89.130.000",
            city: "Indaial",
            cpf: "111.111.111-11",
            district: "tapajo",
            email: "seidecapital@gmail.com",
            name: "Jean Carlos Seide",
            phone: "47989079276",
            uf: "Sc"
        },
        {
            address: "Rua Jackson",
            birth_date: "2022-11-10",
            cep: "89.130.000",
            city: "Indaial",
            cpf: "111.111.111-11",
            district: "tapajo",
            email: "seidecapital@gmail.com",
            name: "Jhon Doe",
            phone: "47989079276",
            uf: "Sc"
        },
    ];

    const closeModal = (): void => {
        setModalToggle(false);
    }

    const openModal = (item: ICostumer) => {
        setModalToggle(true);
        setCostumer(item);
    }

    const openModalSearch = ():void => {
        setModalSerach(true);
    }



    return (
        <Dashboard>
            {modalToggle ? <Modal closeModal={closeModal} costumer={costumer} /> : <div></div>}
            {modalSearch ? <ModalCostumerSearch closeModalSearch={() => setModalSerach(false)} /> : <div></div> }
            <div className="box-costumer">
                <div className="box-list">
                    <div className="header">
                        <header>Clientes</header>
                        <FaSearch className="icon-search" onClick={openModalSearch} />
                    </div>
                    <ul className="list-ul">
                        {costumers.map((item: any, index: number) => (
                            <li onClick={() => openModal(item)} className="list-li" key={index}>
                                <label>{item.name}</label>
                                <label className="list-modal-email">{item.email}</label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Dashboard>
    );
}