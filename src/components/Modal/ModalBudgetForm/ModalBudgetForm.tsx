import { ChangeEvent, useContext, useState } from 'react';
import { FaAngleDown, FaCalculator, FaClock, FaEdit, FaExpandAlt, FaFemale, FaFileUpload, FaPalette, FaRegTimesCircle, FaUser, FaUserTie, FaWindowRestore, FaWpforms } from 'react-icons/fa';
import { eventManager } from 'react-toastify/dist/core';
import { AuthContext } from '../../../contexts/Auth/AuthContext';
import { registerBudget } from '../../../services/budget/budgetService';
import { BoxDropdown } from '../../BoxDropdown/BoxDropdown';
import { BoxDropdownSub } from '../../BoxDropdown/BoxDropdownSub';
import { SearchList } from '../../Search/SearchList';
import { TemplateModal } from '../Template/TemplateModal';
import './modalBudgetForm.css';

interface IModalForm {
    closeModal: () => void;
}

type TDataForm = {
    body_region: string,
    sessions: string,
    width: string,
    heigth: string,
    price: string,
    validated_at: string,
    note: string
}

export const ModalBudgetForm = ({ closeModal }: IModalForm) => {

    const { userData } = useContext(AuthContext);

    const [typeService, setTypeService] = useState<any>();
    const [subCategory, setSubCategory] = useState<any>();
    const [costumer, setCostumer] = useState<any>();
    const [professional, setProfessional] = useState<any>();
    const [image, setImage] = useState<any>();
    const [data, setData] = useState<TDataForm>({} as TDataForm);


    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const getTypeService = (item: any): any => {
        setTypeService(item);
    }

    const getSubCategory = (data: any): any => {
        setSubCategory(data);
    }

    const handImage = (e: ChangeEvent<HTMLInputElement>) => setImage(e.target?.files?.[0]);

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        const userId = userData.studioUuid

        const formData = new FormData();

        if (userData.studioUuid) {
            formData.append('user_id ', userId);
            formData.append('studio_id', userData.studioUuid);
            formData.append('costumer_id', costumer.uuid);
            formData.append('costumer_name', costumer.name);
            formData.append('professional_id', professional.id);
            formData.append('professional_name', professional.name);
            formData.append('type_service', typeService.category);
            formData.append('style_service', subCategory.sub_category);
            formData.append('body_region', data.body_region);
            formData.append('project_image', image);
            formData.append('sessions', data.sessions);
            formData.append('width', data.width);
            formData.append('heigth', data.heigth);
            formData.append('price', data.price);
            formData.append('validated_at', data.validated_at);
            formData.append('note', data.note);
        }

        // console.log("image", image);

        if (formData) {
            const response = await registerBudget(formData);
            console.log(response);
        }


    }

    return (
        <TemplateModal>
            <div className="m__budget__box">
                <header className="m__budget__header">
                    <span className="header__title">Novo Orçamento</span>
                    <FaRegTimesCircle className="modal__budget__icon" onClick={closeModal} />
                </header>
                <form onSubmit={handleSubmit} className="m__budget__form" >

                    <div className="box-input-content">
                        <header className="box-input-content-header">
                            <FaUser />
                            <span>Selecione um Cliente *</span>
                        </header>

                        <SearchList
                            url="/api/costumer-search"
                            result={(data) => setCostumer(data)}
                        />
                    </div>

                    <div className="box-input-content">
                        <header className="box-input-content-header">
                            <FaUserTie />
                            <span>Selecione um Proficional *</span>
                        </header>

                        <SearchList
                            url="/api/professional-search"
                            result={(data) => setProfessional(data)}
                        />

                    </div>

                    <div className="box-input-content">
                        <header className="box-input-content-header">
                            <FaWpforms />
                            <span>Tipo do Serviço *</span>
                        </header>

                        <div className="input__group__orizontal">
                            <BoxDropdown
                                url="/api/category"
                                title="Tipo do Serviço *"
                                itemSelected={(item) => getTypeService(item)}
                            />

                            {typeService ?
                                <BoxDropdownSub
                                    url={`/api/sub-category/${typeService.id}`}
                                    title="Categoria *"
                                    itemSelected={(item) => getSubCategory(item)}
                                />
                                :
                                <div></div>
                            }

                        </div>
                    </div>

                    <div className="box-input-content">
                        <header className="box-input-content-header">
                            <FaFemale />
                            <span>Região do Corpo *</span>
                        </header>
                        <div className="input-group">
                            <input required className="mc-input" name="body_region" onChange={handleInput} type="text" />
                            <label className="mc-label">Região</label>
                        </div>
                    </div>

                    <div className="box-input-content">
                        <header className="box-input-content-header">
                            <FaWindowRestore />
                            <span>Projeto *</span>
                        </header>
                        <div className="input__group__orizontal">
                            <div className="input-group">
                                <input required className="mc-input" type="file" name="project_image" id="file" onChange={handImage} />
                                <label className="label__input" htmlFor="file">
                                    <span>Selecione um projeto</span>
                                    <FaFileUpload />
                                </label>
                            </div>

                            <div className="input-group">
                                <input required className="mc-input" type="number" name="sessions" onChange={handleInput} />
                                <label className="mc-label">Número de Sessões</label>
                            </div>
                        </div>
                    </div>

                    <div className="box-input-content">
                        <header className="box-input-content-header">
                            <FaExpandAlt />
                            <span>Tamanho </span>
                        </header>
                        <div className="input-group">
                            <input required className="mc-input" type="text" name="width" onChange={handleInput} />
                            <label className="mc-label">Largura</label>
                        </div>
                        <div className="input-group">
                            <input required className="mc-input" type="text" name="heigth" onChange={handleInput} />
                            <label className="mc-label">Altura</label>
                        </div>
                    </div>

                    <div className="box-input-content">
                        <header className="box-input-content-header">
                            <FaCalculator />
                            <span>Total *</span>
                        </header>
                        <div className="input-group">
                            <input required className="mc-input" type="text" name="validated_at" onChange={handleInput} />
                            <label className="mc-label">Válido até...</label>
                        </div>
                        <div className="input-group">
                            <input required className="mc-input" type="text" name="price" onChange={handleInput} />
                            <label className="mc-label">Valor R$</label>
                        </div>
                    </div>

                    <div className="box-input-content">
                        <header className="box-input-content-header">
                            <FaEdit />
                            <span>Observações </span>
                        </header>
                        <div className="input-group">
                            <input required className="mc-input" type="text" name="note" onChange={handleInput} />
                            <label className="mc-label">Obs..</label>
                        </div>
                    </div>

                    <div className="box-button">
                        <button className="btn bt-cancel" onClick={closeModal} >Cancelar</button>
                        <button className="btn">Gerar Orçamento</button>
                    </div>

                </form>
            </div>
        </TemplateModal>
    );
}