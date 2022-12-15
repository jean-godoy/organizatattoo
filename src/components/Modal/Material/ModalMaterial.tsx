import { ChangeEvent, useState } from 'react';
import { FaRegTimesCircle, FaUser } from 'react-icons/fa';
import { searchCategoryService } from '../../../services/search/searchCategoryService';
import { searchSingleService } from '../../../services/search/searSingleService';
import { ListSearchSingle } from '../../List/ListSearchSIngle/ListSearchSingle';
import { TemplateContentColumn } from '../Template/TemplateContentColumn';
import { TemplateModal } from '../Template/TemplateModal';
import './modalMaterial.css';

type TMaterial = {
    closeModal: () => void,
}

type IBrand = {
    brand: string
}

const getResult = (data: any) => {
    console.log("result", data);

}

const getCategory = (data: any) => {
    console.log("category", data);

}

export const ModalMaterial = ({ closeModal }: TMaterial) => {

    return (
        <TemplateModal>
            <TemplateContentColumn>
                <header className="m__budget__header">
                    <span className="header__title">Adicionar Produto</span>
                    <FaRegTimesCircle className="modal__budget__icon" onClick={closeModal} />
                </header>
                <form className="global__form__column">

                    <ListSearchSingle
                        description="Selecione uma Categoria *"
                        liTitle="Categoria"
                        placeholder="Digite a categoria"
                        service={searchCategoryService}
                        result={getCategory}
                    />

                    <ListSearchSingle
                        description="Selecione uma Marca *"
                        liTitle="Marca"
                        placeholder="Digite o nome da marca"
                        service={searchSingleService}
                        result={getResult}
                    />

                    <div className="g__input__content">
                        <header className="g__input__content__header">
                            <FaUser />
                            <span>Selecione uma Marca *</span>
                        </header>
                        <div className="g__input__group">
                            <input required className="global-input" type="text" name="client" />
                            <label className="g__input__label">Entre com o nome do cliente</label>
                        </div>
                    </div>

                </form>
            </TemplateContentColumn>
        </TemplateModal>
    );

}