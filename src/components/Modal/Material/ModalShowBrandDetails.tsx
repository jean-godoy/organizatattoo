import { useEffect, useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { getBrandByCategoryId, getBrandByCategoryIdShow } from "../../../services/material/materialService";
import { TemplateContentColumn } from "../Template/TemplateContentColumn";
import { TemplateModal } from "../Template/TemplateModal";
import Loading from "../../Loading/Loading";
import { Link } from "react-router-dom";
import { ModalBatchAdd } from "./ModalBatchAdd";

type TBrand = {
    id: string,
    product_brand: string
}

type TSubCategoryProps = {
    closeModal: () => void;
    brand: TBrand;
    data: any
}

export const ModalShowBrandDetails = ({ closeModal, brand, data }: TSubCategoryProps) => {

    const [details, setDetails] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [modalStore, setModalStore] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await getBrandByCategoryIdShow(data.category_id, brand.id);
            if (response.status) {
                setDetails(response.data);
                setLoading(false);
            }

        })();
    }, []);

    const handleModalSotre = () => {
        setModalStore(true);
    }

    const handleModalStoreClose = () => setModalStore(false);

    console.log("details", data, brand);

    return (
        <TemplateModal>
            {loading ? <Loading /> : <div></div>}
            { modalStore ? <ModalBatchAdd brandId={brand.id} closeModal={handleModalStoreClose} /> : <div></div> }
            <TemplateContentColumn>
                <header className="m__budget__header">
                    <span className="header__title">Descrição de {brand.product_brand} - {data.material_category} </span>
                    <FaRegTimesCircle className="modal__budget__icon" onClick={closeModal} />
                </header>
                <nav className="g__modal__nav">
                    <span className="g__modal__nav__span" onClick={handleModalSotre} >Adicionar Lote</span>
                    <span className="g__modal__nav__span">Lotes</span>
                </nav>


                {details && (
                    <ul className="box-ul">
                        <li className="box-li">
                            <samp className="li-title">Marca:</samp>
                            <samp>{details.product_brand}</samp>
                        </li>

                        <li className="box-li">
                            <samp className="li-title">Produto:</samp>
                            <samp>{data.product_name}</samp>
                        </li>

                        <li className="box-li">
                            <samp className="li-title">Categoria:</samp>
                            <samp>{data.material_category}</samp>
                        </li>

                        <li className="box-li">
                            <samp className="li-title">Medida:</samp>
                            <samp>{details.product_measure}</samp>
                        </li>

                        <li className="box-li">
                            <samp className="li-title">Quantidade minima:</samp>
                            <samp>{details.minimum_amount}</samp>
                        </li>

                        <li className="box-li">
                            <samp className="li-title">Quantidade Total:</samp>
                            <samp>{details.total_amount ? details.total_amount : 0}</samp>
                        </li>

                        <li className="box-li">
                            <samp className="li-title">Esterelizado:</samp>
                            <samp>{details.sterilizable ? "Sim" : "Não"}</samp>
                        </li>

                        <li className="box-li">
                            <samp className="li-title">Descartavel:</samp>
                            <samp>{details.descartable ? "Sim" : "Não"}</samp>
                        </li>

                        <li className="box-li">
                            <samp className="li-title">Produto Disponivel:</samp>
                            <samp>{details.is_active ? "Ativo" : "Desativado"}</samp>
                        </li>

                        <button onClick={() => closeModal()} className="modal-button">OK</button>

                    </ul>

                )}

            </TemplateContentColumn>
        </TemplateModal>
    );
}

// https://pornosfilmes.com/socando-no-cuzinho-apertado-de-uma-novinha-magrela/