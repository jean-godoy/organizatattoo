import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ModalMaterialCategory } from "../../components/Modal/Material/ModalMaterialCategory";
import { Content } from "../../components/Themes/Content/Content";
import { Dashboard } from "../../components/Themes/Dashboard/Dashboard";
import { Main } from "../../components/Themes/Main/Main";

export const MaterialCategory = () => {

    const [modal, setModal] = useState<boolean>(false);

    const handleModal = () => {
        setModal(true);
    }

    const handleCloseModal = () => {
        setModal(false);
    }

    return (
        <Dashboard>
            {modal ? <ModalMaterialCategory
                url=""
                title="Novo Produto"
                label="Produto *"
                closeModal={handleCloseModal}
            /> : <div></div>}
            <Main>
                <Content>

                    <header className="content__header">
                        <span>Categoria de Materiais</span>
                        <div className="header__right" onClick={handleModal} >
                            <span>Adicionar Produto</span>
                            <FaPlus />
                        </div>
                    </header>


                </Content>
            </Main>
        </Dashboard>
    );
}