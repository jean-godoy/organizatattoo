import { ChangeEvent, useState } from 'react';
import { FaClock, FaFileImage, FaMoneyCheckAlt, FaRegClock, FaRegTimesCircle, FaWpforms } from 'react-icons/fa';
import { handleHour } from '../../services/mask/maskService';
import { BudgetSearch } from '../Budget/BudgetSearch';
import './calendarModal.css';

export type TProps = {
    closeModal: () => void;
    selectedDate: string;
}

export const CalendarModal = ({ closeModal, selectedDate }: TProps) => {

    const [budget, setBudget] = useState<any>();
    const [hour, setHour] = useState<string>('Selecione um horário');
    const [duration, setDuration] = useState<string>('');

    const handleBudget = (data: any) => {
        setBudget(data)
    }

    const handleStartHour = (hour: string) => {
        setHour(hour);
    }

    const handleDuration = (e: ChangeEvent<HTMLInputElement>) => {
        setDuration(handleHour(e.target.value));
        
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
                                <FaWpforms />
                                <span>Selecione um Orçamento *</span>
                            </header>
                
                            <BudgetSearch
                                url="/api/budget-search"
                                result={(data) => setBudget(data)}
                            />
                        </div>


                        <div className="box-input-content">
                            <header className="box-input-content-header">
                                <FaFileImage />
                                <span>Data selecionada *</span>
                            </header>
                            <div className="input-group">
                                <input required className="mc-input" type="text" name="date_select" defaultValue={selectedDate} />
                                <label className="mc-label">Data</label>
                            </div>
                        </div>

                        <div className="box-input-content">
                            <header className="box-input-content-header">
                                <FaRegClock />
                                <span>Horário</span>
                            </header>

                            <div className="box-groupt-input-date">

                                <div className="box-dropdown-select">
                                    <div className="dropdown-select-header">
                                        <FaClock className="icon-clock" />
                                        <span>{hour}</span>
                                    </div>

                                    <div className="box-dropdown-list-option">
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('7:00')}>7:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('7:30')}>7:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('8:00')}>8:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('8:30')}>8:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('9:00')}>9:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('9:30')}>9:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('10:00')}>10:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('10:30')}>10:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('11:00')}>11:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('11:30')}>11:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('12:00')}>12:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('12:30')}>12:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('13:00')}>13:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('13:30')}>13:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('14:00')}>14:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('14:30')}>14:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('15:00')}>15:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('15:30')}>15:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('16:00')}>16:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('16:30')}>16:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('17:00')}>17:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('17:30')}>17:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('18:00')}>18:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('18:30')}>18:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('19:00')}>19:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('19:30')}>19:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('20:00')}>20:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('20:30')}>20:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('21:00')}>21:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('21:30')}>21:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('22:00')}>22:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('22:30')}>22:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('23:00')}>23:00</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('23:30')}>23:30</div>
                                        <div className="dropdown-list-option" onClick={() => handleStartHour('00:00')}>00:00</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="box-input-content">
                            <header className="box-input-content-header">
                                <FaFileImage />
                                <span>Tempo de Duração *</span>
                            </header>
                            <div className="input-group mb-0">
                                    <input required className="mc-input" type="text" name="duration" value={duration} onChange={handleDuration} />
                                    <label className="mc-label" htmlFor="date">Tempo de Duração *</label>
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
                                            <input className="input-radio" type="radio" id="huey" name="money" defaultValue="money" />
                                            <label>Dinheiro</label>
                                        </div>
                                        <div className="box-group-radio">
                                            <input className="input-radio" type="radio" id="hueys" name="pix" defaultValue="pix" />
                                            <label>Pix</label>
                                        </div>
                                        <div className="box-group-radio">
                                            <input className="input-radio" type="radio" id="huey" name="bank_transfer" defaultValue="bank_transfer" />
                                            <label>Transferencia Bancária</label>
                                        </div>
                                        <div className="box-group-radio">
                                            <input className="input-radio" type="radio" id="huey" name="credit_card" defaultValue="credit_card" />
                                            <label>Cartão de crédito</label>
                                        </div>
                                        <div className="box-group-radio">
                                            <input className="input-radio" type="radio" id="huey" name="debit_card" defaultValue="debit_card" />
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
                                            <input className="input-radio" type="radio" id="huey" name="money" defaultValue="money" />
                                            <label>Dinheiro</label>
                                        </div>
                                        <div className="box-group-radio">
                                            <input className="input-radio" type="radio" id="hueys" name="pix" defaultValue="pix" />
                                            <label>Pix</label>
                                        </div>
                                        <div className="box-group-radio">
                                            <input className="input-radio" type="radio" id="huey" name="bank_transfer" defaultValue="bank_transfer" />
                                            <label>Transferencia Bancária</label>
                                        </div>
                                        <div className="box-group-radio">
                                            <input className="input-radio" type="radio" id="huey" name="credit_card" defaultValue="credit_card" />
                                            <label>Cartão de crédito</label>
                                        </div>
                                        <div className="box-group-radio">
                                            <input className="input-radio" type="radio" id="huey" name="debit_card" defaultValue="debit_card" />
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