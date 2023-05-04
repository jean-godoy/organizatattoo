import { useEffect, useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { getBrandByCategoryId } from "../../../services/material/materialService";
import { TemplateContentColumn } from "../Template/TemplateContentColumn";
import { TemplateModal } from "../Template/TemplateModal";
import { BoxFormBrand } from "./BoxFormBrand";
import { ModalMaterialCategory } from "./ModalMaterialCategory";

type TSubCategoryProps = {
    closeModal: () => void;
    product: any;
}

export const ModalMaterialBrand = ({ closeModal, product }: TSubCategoryProps) => {

    const [brand, setBrand] = useState<any>();
    const [modal, setModal] = useState<boolean>(false);
    const [data, setData] = useState<any>({});

    useEffect(() => {
        (async () => {
            const response = await getBrandByCategoryId(product.id);
            if(response.status) {
                setBrand(response.data);
            }
        })();
    }, []);

    const handleOpenModal = (data: any) => {
        setModal(true);
        setData(data);
    }

    const handleCloseModal = () => {
        setModal(false);
    }
    
    return (
        <TemplateModal>
            { modal ? <ModalMaterialCategory product={product} brand={data} closeModal={handleCloseModal} /> : <div></div> }
            <TemplateContentColumn>
                <header className="m__budget__header">
                    <span className="header__title">Marcas de { product?.product_name }</span>
                    <FaRegTimesCircle className="modal__budget__icon" onClick={closeModal} />
                </header>

                <BoxFormBrand productId={product?.id} />

                <ul className="g__ul__list">
                        {brand?.map((item: any, index: number) => (
                            <li className="g__list__li" key={index} onClick={() => handleOpenModal(item)} >
                                <span className="g__list__li__name">Marca:</span>
                                <span className="g__list__li__value">{item.product_brand}</span>
                            </li>
                             )
                        )}
                    </ul>
            </TemplateContentColumn>
        </TemplateModal>
    );
}