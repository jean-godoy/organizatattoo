import { FaRegTimesCircle } from 'react-icons/fa';
import { TemplateContentColumn } from '../Template/TemplateContentColumn';
import { TemplateModal } from '../Template/TemplateModal';
import './modalMaterial.css';
import { ChangeEvent, useState } from 'react';
import { handleDate } from '../../../services/mask/maskService';
import { registerBrand } from '../../../services/material/materialService';

type TProductData = {
    product_id: string,
    product_name: string
    category_id: string,
    material_category: string,
}

type TMaterial = {
    closeModal: () => void,
    productData?: TProductData;
}

type IBrand = {
    brand: string
}

type TForm = {
    product_id: string,
    product: string,
    icategory_id: string,
    category_name: string,
    product_measure: string,
    minimum_amount: string,
    product_brand: string,
    descartable: boolean,
    sterilizable: boolean
}


export const ModalMaterialProductDetailsStore = ({ productData, closeModal }: TMaterial) => {

    const [data, setData] = useState<TForm>({} as TForm);
    const [descartable, setDescartable] = useState<boolean>(true);
    const [sterilizable, setSterilizable] = useState<boolean>(true);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const dataPost = {
            product_id: productData?.product_id,
            product_name: productData?.product_name,
            category_id: productData?.category_id,
            category_name: productData?.material_category,
            product_measure: data.product_measure,
            minimum_amount: data.minimum_amount,
            product_brand: data.product_brand,
            descartable: descartable,
            sterilizable: sterilizable
        }
        
        const response = await registerBrand(dataPost);
        console.log(response);
        

    }

    return (
        <TemplateModal>
            <TemplateContentColumn>
                <header className="m__budget__header">
                    <span className="header__title">Adicionar detalhes do produto - {productData?.product_name} - {productData?.material_category} </span>
                    <FaRegTimesCircle className="modal__budget__icon" onClick={closeModal} />
                </header>
                <form onSubmit={handleSubmit} className="global__form__column">

                    <div className="input__group__border">

                        <h3>Dados do Produto</h3>

                        {/* <div className="input__store__group">
                            <input required className="global-input" defaultValue={productData?.product_name} type="text" name="product" />
                            <label className="g__input__label">Produto *</label>
                        </div>

                        <div className="input__store__group">
                            <input required className="global-input" defaultValue={productData?.material_category} type="text" name="category" />
                            <label className="g__input__label">Categoria *</label>
                        </div> */}

                        <div className="input__store__group">
                            <input required className="global-input" type="text" name="product_brand" onChange={handleInput} />
                            <label className="g__input__label">Marca *</label>
                        </div>

                        {/* <div className="input__store__group">
                            <input required className="global-input" type="text" name="client" />
                            <label className="g__input__label">Tipo de produto *</label>
                        </div> */}

                        <div className="input__store__group">
                            <input required className="global-input" type="text" name="product_measure" onChange={handleInput} />
                            <label className="g__input__label">Medida do produto *</label>
                        </div>

                        <div className="input__store__group">
                            <input required className="global-input" type="number" name="minimum_amount" onChange={handleInput} />
                            <label className="g__input__label">Quantidade minima para estoque *</label>
                        </div>

                    </div>

                    <div className="g__box__radio">
                        <fieldset>
                            <legend>Descartável *</legend>
                            <div className="box-input-radio">
                                <div className="box-group-radio">
                                    <input
                                        className="input-radio"
                                        type="radio"
                                        id="hueys"
                                        name="descartable"
                                        onClick={() => setDescartable(true)}
                                        value="true"
                                        defaultChecked
                                    // defaultChecked={(data.is_active === 1) ? true : false}
                                    />
                                    <label>Sim</label>
                                </div>
                                <div className="box-group-radio">
                                    <input
                                        className="input-radio"
                                        type="radio"
                                        id="huey"
                                        name="descartable"
                                        onClick={() => setDescartable(false)}
                                        value="false"
                                    // defaultChecked={(data.is_active === 0) ? true : false}
                                    />
                                    <label>Não</label>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                    <div className="g__box__radio">
                        <fieldset>
                            <legend>Esterelizado *</legend>
                            <div className="box-input-radio">
                                <div className="box-group-radio">
                                    <input
                                        className="input-radio"
                                        type="radio"
                                        id="hueys"
                                        name="sterilized"
                                        onClick={() => setSterilizable(true)}
                                        value="true"
                                        defaultChecked
                                    // defaultChecked={(data.is_active === 1) ? true : false}
                                    />
                                    <label>Sim</label>
                                </div>
                                <div className="box-group-radio">
                                    <input
                                        className="input-radio"
                                        type="radio"
                                        id="huey"
                                        name="sterilized"
                                        onClick={() => setSterilizable(true)}
                                        value="false"
                                    // defaultChecked={(data.is_active === 0) ? true : false}
                                    />
                                    <label>Não</label>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                    {/* <div className="input__group__border">
                        <h3>Detalhes do Lote *</h3>

                        <div className="input__store__group">
                            <input required className="global-input" type="text" name="number_batch" onChange={handleInput} />
                            <label className="g__input__label">Número do Lote *</label>
                        </div>

                        <div className="input__store__group">
                            <input required className="global-input" type="text" name="wholesale_price" onChange={handleInput} />
                            <label className="g__input__label">Preço de custo *</label>
                        </div>


                        <div className="input__store__group">
                            <input required className="global-input" type="text" name="sale_price" onChange={handleInput} />
                            <label className="g__input__label">Preço de venda</label>
                        </div>

                        <div className="input__store__group">
                            <input
                                required
                                className="global-input"
                                type="text"
                                name="manufacturing_date"
                                value={manufacturingDate}
                                onChange={e => setManufacturingDate(handleDate(e.target.value))}
                            />
                            <label className="g__input__label">Data de Fabricação *</label>
                        </div>


                        <div className="input__store__group">
                            <input
                                required
                                className="global-input"
                                type="text"
                                name="expiration_date"
                                value={expirationDate}
                                onChange={e => setExpirationDate(handleDate(e.target.value))}
                            />
                            <label className="g__input__label">Válido até *</label>
                        </div>

                        <div className="input__store__group">
                            <input required className="global-input" type="number" name="batch_quantity" onChange={handleInput} />
                            <label className="g__input__label">Quantidade referente ao lote *</label>
                        </div>

                    </div> */}

                    <div className="box-button">
                        <button className="btn bt-cancel" onClick={closeModal} >Cancelar</button>
                        <button className="btn">Salvar</button>
                    </div>

                </form>
            </TemplateContentColumn>
        </TemplateModal>
    );

}