import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { getCategoryByProductId } from "../../../services/material/materialService";
import { TemplateContentColumn } from "../Template/TemplateContentColumn";
import { TemplateModal } from "../Template/TemplateModal";
import { BoxFormCategory } from "./BoxFormCategory";
import { ModalMaterialProductBrands } from "./ModalMaterialProductBrands";

type TSubCategoryProps = {
    closeModal: () => void;
    brand?: any;
    product: any;
}

export const ModalMaterialCategory = ({ closeModal, product }: TSubCategoryProps) => {

    const [category, setCategory] = useState<any>();
    const [dataNull, setDataNull] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);
    const [data, setData] = useState<any>({});
    const [dataProd, setDataProd] = useState<any>({});

    useEffect(() => {
        (async () => {
            const response = await getCategoryByProductId(product.id);

            if (response.status) {
                setCategory(response.data);
            }

            if (!response.status) {
                setDataNull(true);
            }
        })();
    }, []);

    const handleOpenModal = (data: any) => {
        setModal(true);
        setData(data);  
        setDataProd({
            'product_id': product.id,
            'product_name': product.product_name,
        });
    }

    const handleCloseModal = () => {
        setModal(false);
    }
    
    return (
        <TemplateModal>
            { modal ? <ModalMaterialProductBrands dataProd={dataProd} data={data} closeModal={handleCloseModal} /> : <div></div> }
            <TemplateContentColumn>
                <header className="m__budget__header">
                    <span className="header__title">Categorias de {product?.product_name} </span>
                    <FaArrowLeft className="modal__budget__icon" onClick={closeModal} />
                </header>

                <BoxFormCategory product={product} />

                <ul className="g__ul__list">
                    {category?.map((item: any, index: number) => (
                        <li className="g__list__li" key={index} onClick={() => handleOpenModal(item)} >
                            <span className="g__list__li__name">Categoria:</span>
                            <span className="g__list__li__value">{item.material_category}</span>
                        </li>
                    )
                    )}
                    {
                        dataNull ?
                            <li className="g__list__li"  >
                                <span className="g__list__li__name">Nenhum item salvo.</span>
                            </li>
                            : <div></div>
                    }
                </ul>
            </TemplateContentColumn>
        </TemplateModal>
    );
}