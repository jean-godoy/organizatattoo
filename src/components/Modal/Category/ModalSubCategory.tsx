import { useEffect, useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { getSubCategories } from "../../../services/category/categoryService";
import { BoxFormSimple } from "../../BoxFormSimple/BoxFormSimple";
import { TemplateContentColumn } from "../Template/TemplateContentColumn";
import { TemplateModal } from "../Template/TemplateModal";

type TSubCategoryProps = {
    closeModal: () => void;
    category: any;
}

export const ModalSubCategory = ({ closeModal, category }: TSubCategoryProps) => {

    const [subCategory, setSubCategory] = useState<any>();

    useEffect(() => {
        (async () => {
            const response = await getSubCategories(category.id);
            if(response.status) {
                setSubCategory(response.data);
            }
        })();
    }, []);
    
    return (
        <TemplateModal>
            <TemplateContentColumn>
                <header className="m__budget__header">
                    <span className="header__title">Sub Categorias de { category?.category }</span>
                    <FaRegTimesCircle className="modal__budget__icon" onClick={closeModal} />
                </header>

                <BoxFormSimple categoryId={category?.id} />

                <ul className="g__ul__list">
                        {subCategory?.map((item: any, index: number) => (
                            <li className="g__list__li" key={index} >
                                <span className="g__list__li__name">Sub Categoria:</span>
                                <span className="g__list__li__value">{item.sub_category}</span>
                            </li>
                             )
                        )}
                    </ul>
            </TemplateContentColumn>
        </TemplateModal>
    );
}