import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ModalGenericCategoryForm } from "../../components/Modal/Material/ModalGenericCategoryForm";
import { Content } from "../../components/Themes/Content/Content";
import { Dashboard } from "../../components/Themes/Dashboard/Dashboard";
import { Main } from "../../components/Themes/Main/Main";
import { handleGetAllProducts } from "../../services/material/materialService";
import { ModalMaterialCategory } from "../../components/Modal/Material/ModalMaterialCategory";

export const MaterialCategory = () => {

    const [modal, setModal] = useState<boolean>(false);
    const [modalCategory, setModalCategory] = useState<boolean>(false);
    const [products, setProducts] = useState<any>();
    const [data, setdata] = useState<any>({});
 
    useEffect(() => {
        (async () => {
            const response = await handleGetAllProducts();
            
            if(response.status) {
                setProducts(response.data)
            }

        })();
    }, []);

    const handleModal = () => {
        setModal(true);
    }

    const handleCloseModal = () => {
        setModal(false);
    }

    const handleOpenMOdalCategory = (data: any) => {
        setdata(data);
        setModalCategory(true);
    } 

    const handleCloseModalCategory = () => setModalCategory(false);


    return (
        <Dashboard>
            { modalCategory ? <ModalMaterialCategory product={data} closeModal={handleCloseModalCategory} /> : <div></div> }
            {modal ? <ModalGenericCategoryForm
                url="/api/material"
                title="Novo Produto"
                label="Produto *"
                closeModal={handleCloseModal}
            /> : <div></div>}
            <Main>
                <Content>

                    <header className="content__header">
                        <span>Materiais - Produtos</span>
                        <div className="header__right" onClick={handleModal} >
                            <span>Adicionar produto</span>
                            <FaPlus />
                        </div>
                    </header>

                    <ul className="g__ul__list">
                        {products?.map((item: any, index: number) => (
                            <li className="g__list__li" key={index} onClick={() => handleOpenMOdalCategory(item)} >
                                <span className="g__list__li__name">Produto:</span>
                                <span className="g__list__li__value">{item.product_name}</span>
                            </li>
                        )
                        )}
                    </ul>

                </Content>
            </Main>
        </Dashboard>
    );
}