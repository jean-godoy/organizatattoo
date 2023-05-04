import { FaArrowLeft, FaFolderPlus, FaRegTimesCircle } from "react-icons/fa";
import { TemplateContentColumn } from "../Template/TemplateContentColumn";
import { TemplateModal } from "../Template/TemplateModal";
import { useEffect, useState } from "react";
import { boolean } from "yup/lib/locale";
import { ModalMaterialProductDetailsStore } from "./ModalMaterialProductDetailsStore";
import { getBrandByCategoryId } from "../../../services/material/materialService";
import { ModalShowBrandDetails } from "./ModalShowBrandDetails";

type TBrand = {
    id: string,
    product_brand: string
}

type TProps = {
    closeModal: () => void;
    data: any;
    dataProd: any;
}

export const ModalMaterialProductBrands = ({ dataProd, data, closeModal }: TProps) => {

    const [details, setDetails] = useState<any>();
    const [modal, setModal] = useState<boolean>(false);
    const [modalDetails, setModalDetails] = useState<boolean>(false);
    const [brand, setBrand] = useState<TBrand>({} as TBrand);

    useEffect(() => {
        (async () => {
            const response = await getBrandByCategoryId(data.id);
            if (response.status) {
                setDetails(response.data);
            }
        })();
    }, []);

    const handleOpenModal = () => {
        setModal(true);
    }

    const handleCloseModal = () => {
        setModal(false);
    }

    const handleOpenModalDetails = (data: any) => {
        setBrand(data);
        setModalDetails(true);
    }

    const handleCloseModalDetails = () => setModalDetails(false);

    const productData = {
        product_id: dataProd.product_id,
        product_name: dataProd.product_name,
        category_id: data.id,
        material_category: data.material_category
    }
    // console.log('data prod', dataProd);
    // console.log('data', data);


    return (
        <TemplateModal>
            {modal ? <ModalMaterialProductDetailsStore productData={productData} closeModal={handleCloseModal} /> : <div></div>}
            {modalDetails ? <ModalShowBrandDetails data={productData} brand={brand} closeModal={handleCloseModalDetails} /> : <div></div>}
            <TemplateContentColumn>
                <header className="m__budget__header">
                    <span className="header__title">Marcas de {dataProd.product_name} - {data.material_category} </span>
                    <FaArrowLeft className="modal__budget__icon" onClick={closeModal} />
                </header>


                <ul className="g__ul__list">

                <li className="g__list__li" >
                        <span className="g__list__li__name">Quantidade total: 23</span>
                        <FaFolderPlus className="modal__budget__icon" />
                    </li>

                    <li className="g__list__li" onClick={handleOpenModal} >
                        <span className="g__list__li__name">Cadastrar nova marca e dados do produto.</span>
                        <FaFolderPlus className="modal__budget__icon" />
                    </li>
                    {details?.map((item: any, index: number) => (
                        <li className="g__list__li" key={index} onClick={() => handleOpenModalDetails(item)} >
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