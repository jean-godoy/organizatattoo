import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ModalSubCategory } from "../../components/Modal/Category/ModalSubCategory";
import { ModalServiceStore } from "../../components/Modal/Service/ModalServiceStore";
import { Content } from "../../components/Themes/Content/Content";
import { Dashboard } from "../../components/Themes/Dashboard/Dashboard";
import { Main } from "../../components/Themes/Main/Main";
import { getAll } from "../../services/category/categoryService";

export const Service = () => {

    const [modal, setModal] = useState<boolean>(false);
    const [category, setCategory] = useState<any>();
    const [modalSubCategory, setModalSubCategory] = useState<boolean>(false);
    const [item, setItem] = useState<any>();

    useEffect(() => {
        (async () => {
            const response = await getAll();
            if (response.status) {
                setCategory(response.data);
            }

        })();
    }, []);

    const handleOpenModal = () => {
        setModal(true);
    }

    const handleCloseModal = () => {
        setModal(false);
    }

    const handleOpenModalSubCategory = (item: any) => {
        setModalSubCategory(true);
        setItem(item);
    }

    const handleModalSubCategory = () => {
        setModalSubCategory(false);
    }

    return (
        <Dashboard>
            {modal ? <ModalServiceStore closeModal={handleCloseModal} /> : <div></div>}
            { modalSubCategory ? <ModalSubCategory category={item} closeModal={handleModalSubCategory}  /> : <div></div> }
            <Main>
                <Content>
                    <header className="content__header">
                        <span>Categorias de Serviços</span>
                        <div className="header__right" onClick={handleOpenModal}>
                            <span>Novo Categoria</span>
                            <FaPlus />
                        </div>
                    </header>

                    <ul className="g__ul__list">
                        {category?.map((item: any, index: number) => (
                            <li className="g__list__li" key={index} onClick={() => handleOpenModalSubCategory(item)} >
                                <span className="g__list__li__name">Categoria:</span>
                                <span className="g__list__li__value">{item.category}</span>
                            </li>
                             )
                        )}
                    </ul>
                </Content>
            </Main>
        </Dashboard>
    );
}