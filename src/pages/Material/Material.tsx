import { useState } from 'react';
import { FaPlus, FaUser } from 'react-icons/fa';
import { ModalMaterialProductDetailsStore } from '../../components/Modal/Material/ModalMaterialProductDetailsStore';
import { Content } from '../../components/Themes/Content/Content';
import { Dashboard } from '../../components/Themes/Dashboard/Dashboard';
import { Main } from '../../components/Themes/Main/Main';
import './material.css';


export const Material = () => {

    const [modal, setModal] = useState<boolean>(false);

    const handleOpenModal = () => {
        setModal(true);
    }
    const handleCloseModal = () => {
        setModal(false);
    }

    return (
        <Dashboard>
            {modal ? <ModalMaterialProductDetailsStore closeModal={handleCloseModal} /> : <div></div>}
            <Main>
                <Content>

                    <header className="content__header">
                        <span>Materias de Procedimeto</span>
                        <div className="header__right" onClick={handleOpenModal}>
                            <span>Adicionar Material</span>
                            <FaPlus />
                        </div>
                    </header>


                </Content>
            </Main>

        </Dashboard>
    );
}