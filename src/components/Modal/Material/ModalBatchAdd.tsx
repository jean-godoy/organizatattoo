import { FaExclamationTriangle } from "react-icons/fa";
import { TemplateContentColumn } from "../Template/TemplateContentColumn";
import { TemplateModal } from "../Template/TemplateModal";
import { ChangeEvent, useState } from "react";

type TProps = {
    closeModal: () => void;
    brandId: string;
}

type TFom = {
    brand_id: string,
    batch: string,
    quantity: number,
    manufacturing_date: string,
    valid_for: string,
    expiration_date: string
}

export const ModalBatchAdd = ({ brandId, closeModal }: TProps) => {

    const [data, setData] = useState<TFom>({} as TFom);
    const [manfacturing, setManufacturing] = useState<string>();
    const [expiration, setExpiration] = useState<string>();

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleSubmit = () => {

    }
    console.log("brand id", brandId);
    
    return (
        <TemplateModal>
            <TemplateContentColumn>
                <header className="m__budget__header">
                    <span className="header__title">Adicionar Lote</span>
                    <FaExclamationTriangle className="modal__budget__icon" />
                </header>

                <form onSubmit={handleSubmit} className="global__form__column">

                    {/* <div className="input__group__border"> */}

                        <div className="input__group__border">

                            <h3>Adicionar Lote</h3>

                            <div className="input__store__group">
                                <input required className="global-input" type="text" name="batch" onChange={handleInput} />
                                <label className="g__input__label">Lote *</label>
                            </div>

                            <div className="input__store__group">
                                <input required className="mc-input" type="text" onChange={handleInput} name="quantity" />
                                <label className="mc-label">Quantidade *</label>
                            </div>

                            <div className="input__store__group">
                                <input required className="mc-input" type="text" onChange={handleInput} name="manufacturing_date" />
                                <label className="mc-label">Data de fabricação *</label>
                            </div>

                            <div className="input__store__group">
                                <input required className="mc-input" type="text" onChange={handleInput} name="valid_for" />
                                <label className="mc-label">Válido por</label>
                            </div>

                            <div className="input__store__group">
                                <input required className="mc-input" type="text" onChange={handleInput} name="expiration_date" />
                                <label className="mc-label">Data de válidade</label>
                            </div>

                        </div>

                        <div className="box-button">
                            <button className="btn bt-cancel" onClick={closeModal} >Cancelar</button>
                            <button className="btn">Salvar Categoria</button>
                        </div>

                    {/* </div> */}

                </form>

            </TemplateContentColumn>
        </TemplateModal>
    );
}