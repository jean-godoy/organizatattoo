import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import { handleDate, handleDateFormatAmerican, handlePrice, handlePriceAmerican } from "../../../services/mask/maskService";
import { TemplateModal } from "../Template/TemplateModal";
import { FaAngleDown, FaCalculator, FaClock, FaEdit, FaExpandAlt, FaFemale, FaFileUpload, FaPalette, FaRegEdit, FaRegTimesCircle, FaUser, FaUserTie, FaWindowRestore, FaWpforms } from 'react-icons/fa';
import { SearchList } from "../../Search/SearchList";
import { BoxDropdown } from "../../BoxDropdown/BoxDropdown";
import { BoxDropdownSub } from "../../BoxDropdown/BoxDropdownSub";


type TProps = {
    budget?: any;
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

export const ModalBudgetEdit = ({ closeModal, budget }: TProps) => {

    const { userData } = useContext(AuthContext);
    const navigate = useNavigate();

    const [typeService, setTypeService] = useState<any>();
    const [subCategory, setSubCategory] = useState<any>();
    const [costumer, setCostumer] = useState<any>();
    const [professional, setProfessional] = useState<any>();
    const [image, setImage] = useState<any>();
    const [data, setData] = useState<any>();
    const [price, setPrice] = useState<string>('');
    const [date, setDate] = useState<string>('');

    useEffect(() => {
        setData(budget);
        setDate(budget.validated_at);
        setPrice(budget.price);
        setCostumer({ costumer_id: budget.costumer_id, costumer_name: budget.costumer_name });
    }, []);

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
            formData.append('price', handlePriceAmerican(price));
            formData.append('validated_at', handleDateFormatAmerican(date));
            formData.append('note', data.note);
        }

        // if (formData) {
        //     const response = await registerBudget(formData);
        //     console.log("RESPONSE" , response);
        //     if(response.status) {
        //         toast .success("Orçamento criado com sucesso.");
        //         navigate('/orcamentos')
        //     }

        //     if(!response.status) {
        //        toast.warning("Ocoreu algum erro ao gerar orçamento.")        
        //     }
        // }
    }
    console.log(costumer);

    return (
        <TemplateModal>
            <div className="m__budget__box">
                <header className="m__budget__header">
                    <span className="header__title">Editar Orçamento</span>
                    <FaRegTimesCircle className="modal__budget__icon" onClick={closeModal} />
                </header>

                <form onSubmit={handleSubmit} className="m__budget__form" >

                    <div className="box-input-content">
                        <header className="box-input-content-header">
                            <FaRegEdit />
                            <span>Nome do Orçamento *</span>
                        </header>
                        <div className="input-group">
                            <input required className="mc-input" name="name" value={data?.name} onChange={handleInput} type="text" />
                            <label className="mc-label">Região</label>
                        </div>
                    </div>

                    <div className="box-input-content">
                        <header className="box-input-content-header">
                            <FaUser />
                            <span>Selecione um Cliente *</span>
                        </header>

                        <SearchList
                            url="/api/costumer-search"
                            result={(data) => setCostumer(data)}
                            edit={budget.costumer_name}
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
                            edit={budget.professional_name}
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
                            <input required className="mc-input" name="body_region" value={data?.body_region} onChange={handleInput} type="text" />
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
                        </div>
                    </div>

                    <div className="box-input-content">
                        <header className="box-input-content-header">
                            <FaWindowRestore />
                            <span>Sessoẽs *</span>
                        </header>
                        <div className="input__group__orizontal">
                            <div className="input-group">
                                <input required className="mc-input" value={data?.sessions} type="number" name="sessions" onChange={handleInput} />
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
                            <input required className="mc-input" type="text" name="width" value={data?.width} onChange={handleInput} />
                            <label className="mc-label">Largura em centimetros</label>
                        </div>
                        <div className="input-group">
                            <input required className="mc-input" type="text" name="heigth" value={data?.heigth} onChange={handleInput} />
                            <label className="mc-label">Altura em centimetros</label>
                        </div>
                    </div>

                    <div className="box-input-content">
                        <header className="box-input-content-header">
                            <FaCalculator />
                            <span>Total *</span>
                        </header>
                        <div className="input-group">
                            <input required className="mc-input" type="text" name="validated_at" value={date} onChange={e => setDate(handleDate(e.target.value))} />
                            <label className="mc-label">Válido até...</label>
                        </div>
                        <div className="input-group">
                            <input required className="mc-input" type="text" name="price" value={price} onChange={(e) => setPrice(handlePrice(e.target.value))} />
                            <label className="mc-label">Valor R$</label>
                        </div>
                    </div>

                    <div className="box-input-content">
                        <header className="box-input-content-header">
                            <FaEdit />
                            <span>Observações </span>
                        </header>
                        <div className="input-group">
                            <input required className="mc-input" type="text" name="note" value={data?.note} onChange={handleInput} />
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