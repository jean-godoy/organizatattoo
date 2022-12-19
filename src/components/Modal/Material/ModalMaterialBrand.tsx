import { useEffect, useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { getBrandByProductId } from "../../../services/material/materialService";
import { TemplateContentColumn } from "../Template/TemplateContentColumn";
import { TemplateModal } from "../Template/TemplateModal";
import { BoxFormBrand } from "./BoxFormBrand";

type TSubCategoryProps = {
    closeModal: () => void;
    product: any;
}

export const ModalMaterialBrand = ({ closeModal, product }: TSubCategoryProps) => {

    const [brand, setBrand] = useState<any>();

    useEffect(() => {
        (async () => {
            const response = await getBrandByProductId(product.id);
            if(response.status) {
                setBrand(response.data);
            }
        })();
    }, []);
    
    return (
        <TemplateModal>
            <TemplateContentColumn>
                <header className="m__budget__header">
                    <span className="header__title">Marcas de { product?.product_name }</span>
                    <FaRegTimesCircle className="modal__budget__icon" onClick={closeModal} />
                </header>

                <BoxFormBrand productId={product?.id} />

                <ul className="g__ul__list">
                        {brand?.map((item: any, index: number) => (
                            <li className="g__list__li" key={index} >
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