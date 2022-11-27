import { FaClock, FaFileImage, FaMoneyCheckAlt, FaRegClock, FaRegTimesCircle, FaUser, FaWpforms } from 'react-icons/fa';
import './calendarModal.css';

export type TProps = {
    closeModal: () => void
}

export const CalendarModal = ({ closeModal }: TProps) => {

    const handleStartHour = (hour: number) => {
        alert(hour)
    }

    return (
        <div className="calendar-modal">
            <div className="box-modal-calendar">
                <header className="modal-calendar-header">
                    <span>Agendar Nova Sessão</span>
                    <FaRegTimesCircle className="moda-calendar-icon" onClick={closeModal} />
                </header>

                <div className="box-form">

                    <form className="modal-calendar-form">

                        <div className="box-input-content">
                            <header className="box-input-content-header">
                                <FaUser />
                                <span>Selecione um Proficional *</span>
                            </header>
                            <div className="input-group">
                                <input required className="mc-input" type="text" name="client" />
                                <label className="mc-label">Profissional</label>
                            </div>
                        </div>

                        <div className="box-input-content">
                            <header className="box-input-content-header">
                                <FaUser />
                                <span>Selecione um Cliente *</span>
                            </header>
                            <div className="input-group">
                                <input required className="mc-input" type="text" name="client" />
                                <label className="mc-label">Cliente</label>
                            </div>
                        </div>

                        <div className="box-input-content">
                            <header className="box-input-content-header">
                                <FaWpforms />
                                <span>Teve Orçamento *</span>
                            </header>
                            <div className="input-group">
                                <input required className="mc-input" type="text" name="client" />
                                <label className="mc-label">Orçamento</label>
                            </div>
                        </div>

                        <div className="box-input-content">
                            <header className="box-input-content-header">
                                <FaWpforms />
                                <span>Tipo de Serviço *</span>
                            </header>
                            <div className="box-select-radio">
                                <fieldset>
                                    <div className="box-input-radio">
                                        <div className="box-group-radio">
                                            <input className="input-radio" type="radio" id="service_type" name="drone" value="tattoo" checked />
                                            <label>Tatuagem</label>
                                        </div>
                                        <div className="box-group-radio">
                                            <input className="input-radio" type="radio" id="service_type" name="drone" value="tattoo" checked />
                                            <label>Piercing</label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>

                        <div className="box-input-content">
                            <header className="box-input-content-header">
                                <FaFileImage />
                                <span>Tatuagem - Referências *</span>
                            </header>
                            <div className="input-group">
                                <input required className="mc-input" type="text" name="client" />
                                <label className="mc-label">Selecione o desenho</label>
                            </div>
                            <div className="input-group">
                                <input required className="mc-input" type="text" name="client" />
                                <label className="mc-label">Observações</label>
                            </div>
                        </div>

                        <div className="box-input-content">
                            <header className="box-input-content-header">
                                <FaRegClock />
                                <span>Horário</span>
                            </header>

                            <div className="box-groupt-input-date">
                                <div className="input-group">
                                    <input required value={`14-11-2022`} className="mc-input" id="date" type="text" name="client" />
                                    {/* <label className="mc-label" htmlFor="date">Selecione uma data *</label> */}
                                </div>

                                <div className="box-dropdown-select">
                                    <div className="dropdown-select-header">
                                        <FaClock className="icon-clock" />
                                        <span>Selecione um horário</span>
                                    </div>

                                    <div className="box-dropdown-list-option">
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(700)}>7:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(730)}>7:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(800)}>8:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(830)}>8:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(900)}>9:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(930)}>9:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(1000)}>10:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(1030)}>10:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(1100)}>11:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(1130)}>11:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(1200)}>12:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(1230)}>12:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(1300)}>13:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(1330)}>13:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(1400)}>14:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(1430)}>14:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(1500)}>15:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(1530)}>15:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(1600)}>16:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(1630)}>16:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(1700)}>17:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(1730)}>17:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(1800)}>18:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(1830)}>18:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(1900)}>19:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(1930)}>19:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(2000)}>20:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(2030)}>20:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(2100)}>21:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(2130)}>21:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(2200)}>22:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(2230)}>22:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(2300)}>23:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour(2330)}>23:30</div>
                                        {/* <div className="dropdown-list-option" onClick={() => handleStartHour(0000)}>00:00</div> */}
                                    </div>
                                </div>
                                <div className="input-group mb-0">
                                    <input required className="mc-input" type="text" name="client" />
                                    <label className="mc-label" htmlFor="date">Tempo de Duração *</label>
                                </div>
                            </div>
                        </div>

                        <div className="box-input-content">
                            <header className="box-input-content-header">
                                <FaMoneyCheckAlt />
                                <span>Forma de pagamento *</span>
                            </header>

                            <div className="input-group">
                                <input required className="mc-input" type="text" name="total_value" />
                                <label className="mc-label">Valor Total R$</label>
                            </div>

                            <div className="box-select-radio">
                                <fieldset>
                                    <div className="box-input-radio">
                                        <div className="box-group-radio">
                                            <input className="input-radio" type="radio" id="huey" name="money" value="money" />
                                            <label>Dinheiro</label>
                                        </div>
                                        <div className="box-group-radio">
                                            <input className="input-radio" type="radio" id="hueys" name="pix" value="pix" />
                                            <label>Pix</label>
                                        </div>
                                        <div className="box-group-radio">
                                            <input className="input-radio" type="radio" id="huey" name="bank_transfer" value="bank_transfer" />
                                            <label>Transferencia Bancária</label>
                                        </div>
                                        <div className="box-group-radio">
                                            <input className="input-radio" type="radio" id="huey" name="credit_card" value="credit_card" />
                                            <label>Cartão de crédito</label>
                                        </div>
                                        <div className="box-group-radio">
                                            <input className="input-radio" type="radio" id="huey" name="debit_card" value="debit_card" />
                                            <label>Cartão de débito</label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>

                        <div className="box-input-content">
                            <header className="box-input-content-header">
                                <FaMoneyCheckAlt />
                                <span>Pagamento de Sinal *</span>
                            </header>
                            <div className="input-group">
                                <input required className="mc-input" type="text" name="client" />
                                <label className="mc-label">Valor do Sinal R$</label>
                            </div>
                            <div className="box-select-radio">
                                <fieldset>
                                    <div className="box-input-radio">
                                        <div className="box-group-radio">
                                            <input className="input-radio" type="radio" id="huey" name="money" value="money" />
                                            <label>Dinheiro</label>
                                        </div>
                                        <div className="box-group-radio">
                                            <input className="input-radio" type="radio" id="hueys" name="pix" value="pix" />
                                            <label>Pix</label>
                                        </div>
                                        <div className="box-group-radio">
                                            <input className="input-radio" type="radio" id="huey" name="bank_transfer" value="bank_transfer" />
                                            <label>Transferencia Bancária</label>
                                        </div>
                                        <div className="box-group-radio">
                                            <input className="input-radio" type="radio" id="huey" name="credit_card" value="credit_card" />
                                            <label>Cartão de crédito</label>
                                        </div>
                                        <div className="box-group-radio">
                                            <input className="input-radio" type="radio" id="huey" name="debit_card" value="debit_card" />
                                            <label>Cartão de débito</label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>

                        <div className="box-button">
                            <button className="btn bt-cancel">Cancelar</button>
                            <button className="btn">Finalizar Agendamento</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );

}