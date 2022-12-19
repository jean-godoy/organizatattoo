import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ModalGenericCategoryForm } from "../../components/Modal/Material/ModalGenericCategoryForm";
import { ModalMaterialBrand } from "../../components/Modal/Material/ModalMaterialBrand";
import { Content } from "../../components/Themes/Content/Content";
import { Dashboard } from "../../components/Themes/Dashboard/Dashboard";
import { Main } from "../../components/Themes/Main/Main";
import { handleGetAllProducts } from "../../services/material/materialService";

export const MaterialCategory = () => {

    const [modal, setModal] = useState<boolean>(false);
    const [modalBrand, setModalBrand] = useState<boolean>(false);
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

    const handelOpenModalBrand = (data: any) => {
        setdata(data);
        setModalBrand(true);
    }

    const handelCloseModalBrand = () => {
        setModalBrand(false);
    }

    return (
        <Dashboard>
            { modalBrand ? <ModalMaterialBrand product={data} closeModal={handelCloseModalBrand} /> : <div></div> }
            {modal ? <ModalGenericCategoryForm
                url="/api/material"
                title="Novo Produto"
                label="Produto *"
                closeModal={handleCloseModal}
            /> : <div></div>}
            <Main>
                <Content>

                    <header className="content__header">
                        <span>Categoria de Materiais</span>
                        <div className="header__right" onClick={handleModal} >
                            <span>Adicionar Categoria</span>
                            <FaPlus />
                        </div>
                    </header>

                    <ul className="g__ul__list">
                        {products?.map((item: any, index: number) => (
                            <li className="g__list__li" key={index} onClick={() => handelOpenModalBrand(item)} >
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