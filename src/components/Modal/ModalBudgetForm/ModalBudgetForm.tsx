import { FaAngleDown, FaCalculator, FaClock, FaEdit, FaExpandAlt, FaFemale, FaFileUpload, FaPalette, FaRegTimesCircle, FaUser, FaUserTie, FaWindowRestore, FaWpforms } from 'react-icons/fa';
import { TemplateModal } from '../Template/TemplateModal';
import './modalBudgetForm.css';

interface IModalForm {
    closeModal: () => void;
}

export const ModalBudgetForm = ({ closeModal }: IModalForm) => {

    return (
        <TemplateModal>
            <div className="m__budget__box">
                <header className="m__budget__header">
                    <span className="header__title">Novo Orçamento</span>
                    <FaRegTimesCircle className="modal__budget__icon" onClick={closeModal} />
                </header>
                <form className="m__budget__form">

                    <div className="box-input-content">
                        <header className="box-input-content-header">
                            <FaUser />
                            <span>Selecione um Cliente *</span>
                        </header>
                        <div className="input-group">
                            <input required className="mc-input" type="text" name="client" />
                            <label className="mc-label">Entre com o nome do cliente</label>
                        </div>
                    </div>

                    <div className="box-input-content">
                        <header className="box-input-content-header">
                            <FaUserTie />
                            <span>Selecione um Proficional *</span>
                        </header>
                        <div className="input-group">
                            <input required className="mc-input" type="text" name="client" />
                            <label className="mc-label">Entre com o nome do profissional</label>
                        </div>
                    </div>

                    <div className="box-input-content">
                        <header className="box-input-content-header">
                            <FaWpforms />
                            <span>Tipo do Serviço *</span>
                        </header>
                        <div className="input-group">
                            <input required className="mc-input" type="text" name="client" />
                            <label className="mc-label">Selecione tipo de serviço</label>
                        </div>
                    </div>

                    <div className="box-input-content">
                        <header className="box-input-content-header">
                            <FaFemale />
                            <span>Região do Corpo *</span>
                        </header>
                        <div className="input-group">
                            <input required className="mc-input" type="text" name="client" />
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
                                <input required className="mc-input" type="file" name="client" id="file" />
                                <label className="label__input" htmlFor="file">
                                    <span>Selecione um projeto</span>
                                    <FaFileUpload />
                                </label>
                            </div>

                            <div className="box-dropdown-select">
                                <div className="dropdown-select-header">
                                    <FaPalette className="icon-clock" />
                                    <span>Selecione um Estilo</span>
                                    <FaAngleDown />
                                </div>

                                <div className="box-dropdown-list-option">
                                    <div className="dropdown-list-option" onClick={() => (+1)}>Preto e Branco</div>
                                    <div className="dropdown-list-option" onClick={() => (-1)}>Preto e Cinza</div>
                                    <div className="dropdown-list-option" onClick={() => (-1)}>Colorida</div>
                                    <div className="dropdown-list-option" onClick={() => (-1)}>Realismo</div>
                                    <div className="dropdown-list-option" onClick={() => (-1)}>Outros...</div>
                                </div>
                            </div>

                            <div className="input-group">
                                <input required className="mc-input" type="number" name="client" />
                                <label className="mc-label">Número de Sessões</label>
                            </div>
                        </div>
                    </div>

                    <div className="box-input-content">
                        <header className="box-input-content-header">
                            <FaExpandAlt />
                            <span>Tamanho *</span>
                        </header>
                        <div className="input-group">
                            <input required className="mc-input" type="text" name="client" />
                            <label className="mc-label">Largura</label>
                        </div>
                        <div className="input-group">
                            <input required className="mc-input" type="text" name="client" />
                            <label className="mc-label">Altura</label>
                        </div>
                    </div>

                    <div className="box-input-content">
                        <header className="box-input-content-header">
                            <FaCalculator />
                            <span>Total *</span>
                        </header>
                        <div className="input-group">
                            <input required className="mc-input" type="text" name="client" />
                            <label className="mc-label">Válido até...</label>
                        </div>
                        <div className="input-group">
                            <input required className="mc-input" type="text" name="client" />
                            <label className="mc-label">Valor R$</label>
                        </div>
                    </div>

                    <div className="box-input-content">
                        <header className="box-input-content-header">
                            <FaEdit />
                            <span>Observações </span>
                        </header>
                        <div className="input-group">
                            <input required className="mc-input" type="text" name="client" />
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