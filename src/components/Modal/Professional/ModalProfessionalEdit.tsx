import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { handleCep, handleCpf, handleDate, handlePhone } from '../../../services/mask/maskService';
import { getProfessionalFullData } from '../../../services/Professional/professionalService';
import { clearMask } from '../../../utils/mask/mask';
import Loading from '../../Loading/Loading';
import { TemplateContentColumn } from '../Template/TemplateContentColumn';
import { TemplateModal } from '../Template/TemplateModal';
import './modalProfessional.css';

interface IProfessionalEdit {
    closeModal: () => void;
    professional: any
}

export const ModalProfessionalEdit = ({ professional, closeModal }: IProfessionalEdit) => {
    
    const navigate = useNavigate();

    const [paymant, setPaymant] = useState<string | null>(null);
    const [active, setActive] = useState<number | null>(null);
    const [rules, setRules] = useState<string | null>(null);
    const [phone, setPhone] = useState<string | number>('');
    const [cell, setCell] = useState<string | number>('');
    const [cpf, setCpf] = useState<string | number>('');
    const [date, setDate] = useState<string>('');
    const [cep, setCep] = useState<string | number>('');
    const [sex, setSex] = useState<string | null>(null);
    const [data, setData] = useState<any>([]);
    const [address, setAddress] = useState<any>([]);
    const [bank, setBank] = useState<any>([]);
    const [methodPayment, setMethodPayment] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {   
        setLoading(true);
        const getData = async () => {
            const response = await getProfessionalFullData(professional.id);
            if(response.status) {
                setAddress(response.data.address);
                setBank(response.data.bank);
                setMethodPayment(response.data.payment);
                setData(professional);

                setLoading(false);
                console.log(bank);
                
            }
        }

        getData();

    }, []);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handlePayment = (e: any) => {
        const { value } = e.target
        setPaymant(value);
    }

    const handleActive = (e: any) => {
        setActive(parseInt(e.target.value));
    }

    const handleRules = (e: any) => {
        setRules(e.target.value)
    }

    const handleSex = (e: any) => {
        setSex(e.target.value);
    }

    const handleSubmit = async (e: ChangeEvent <HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const dataPost = {
            name: data.name,
            email: data.email,
            cell_phone: parseInt(clearMask (cell)),
            phone: clearMask(phone),
            birth_date: date,
            cpf: clearMask(cpf),
            sex: sex,
            address: data.address,
            number: data.number,
            district: data.district,
            city: data.city,
            cep: clearMask(cep),
            uf: data.uf,
            payment: paymant,
            bank: data.bank,
            agency: clearMask(data.agency),
            account: clearMask(data.account),
            pix: data.pix,
            rules: rules,
            is_active: active,
        }

        // const response = await register(dataPost);
        
        // if(response.status) {
        //     setLoading(false);
        //     toast.success(`${response.message}`);
        //     navigate('/profissional');
        // }   
    }

    return (
        <TemplateModal>
            { loading ? <Loading /> : <div></div> }
            <TemplateContentColumn>
                <header className="m__budget__header">
                    <span>Editar Profissional</span>
                </header>

                <form onSubmit={handleSubmit} className="box__form__store">
                    <div className="input__group__border">

                        <h3>Dados Pessoais</h3>

                        <div className="input__store__group">
                            <input required className="mc-input" type="text" value={data.name} onChange={handleInput} name="name" />
                            <label className="mc-label">Nome *</label>
                        </div>

                        <div className="input__store__group">
                            <input required className="mc-input" type="text" value={data.email} onChange={handleInput} name="email" />
                            <label className="mc-label">E-mail *</label>
                        </div>

                        <div className="input__store__group">
                            <input required className="mc-input" value={data.cell_phone} onChange={(e) => setCell(handlePhone(e.target.value))} type="text" name="cell_phone" />
                            <label className="mc-label">Celular *</label>
                        </div>

                        <div className="input__store__group">
                            <input required className="mc-input" value={phone} onChange={(e) => setPhone(handlePhone(e.target.value))} type="text" name="phone" />
                            <label className="mc-label">Telefone Fixo</label>
                        </div>

                        <div className="input__store__group">
                            <input required className="mc-input" value={date} onChange={(e) => setDate(handleDate(e.target.value))} type="text" name="birth_date" />
                            <label className="mc-label">Data de Nascimento *</label>
                        </div>

                        <div className="input__store__group">
                            <input required className="mc-input" value={data.cpf} onChange={(e) => setCpf(handleCpf(e.target.value))} type="text" name="cpf_cnpj" />
                            <label className="mc-label">CPF ou CNPJ *</label>
                        </div>

                        <div className="input-group">
                            {/* <input required className="mc-input" type="file" name="cover" id="file" />
                                <label className="label__input" htmlFor="file">
                                    <span>Selecione uma foto</span>
                                    <FaFileUpload />
                                </label> */}
                        </div>
                    </div>

                    <div className="g__box__radio">
                        <fieldset>
                            <legend>Sexo</legend>
                            <div className="box-input-radio">
                                <div className="box-group-radio">
                                    <input
                                        className="input-radio"
                                        type="radio"
                                        id="hueys"
                                        name="sex"
                                        value="male"
                                        onClick={handleSex}
                                    />
                                    <label>Masculino</label>
                                </div>
                                <div className="box-group-radio">
                                    <input
                                        className="input-radio"
                                        type="radio"
                                        id="huey"
                                        name="sex"
                                        value="female"
                                        onClick={handleSex}
                                    />
                                    <label>Feminino</label>
                                </div>
                                <div className="box-group-radio">
                                    <input
                                        className="input-radio"
                                        type="radio"
                                        id="huey"
                                        name="sex"
                                        value="undefined"
                                        onClick={handleSex}
                                    />
                                    <label>Não Informar</label>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                    <div className="input__group__border">
                        <h3>Endereço</h3>
                        <div className="input__store__group">
                            <input required className="mc-input" type="text" onChange={handleInput} name="address" />
                            <label className="mc-label">Rua *</label>
                        </div>

                        <div className="input__store__group">
                            <input required className="mc-input" type="text" onChange={handleInput} name="number" />
                            <label className="mc-label">Número *</label>
                        </div>

                        <div className="input__store__group">
                            <input required className="mc-input" type="text" onChange={handleInput} name="district" />
                            <label className="mc-label">Bairro *</label>
                        </div>

                        <div className="input__store__group">
                            <input required className="mc-input" type="text" onChange={handleInput} name="city" />
                            <label className="mc-label">Cidade *</label>
                        </div>

                        <div className="input__store__group">
                            <input required className="mc-input" value={cep} onChange={(e) => setCep(handleCep(e.target.value))} type="text" name="cep" />
                            <label className="mc-label">CEP *</label>
                        </div>

                        <div className="input__store__group">
                            <input required className="mc-input" type="text" onChange={handleInput} name="uf" />
                            <label className="mc-label">Estado *</label>
                        </div>

                    </div>

                    <div className="g__box__radio">
                        <fieldset>
                            <legend>Forma de pagamento</legend>
                            <div className="box-input-radio">
                                <div className="box-group-radio">
                                    <input
                                        className="input-radio"
                                        type="radio"
                                        id="hueys"
                                        name="payment"
                                        onClick={handlePayment}
                                        value="percent"
                                    // defaultChecked={(data.is_active === 1) ? true : false}
                                    />
                                    <label>Porcentagem</label>
                                </div>
                                <div className="box-group-radio">
                                    <input
                                        className="input-radio"
                                        type="radio"
                                        id="huey"
                                        name="payment"
                                        onClick={handlePayment}
                                        value="fixed"
                                    // defaultChecked={(data.is_active === 0) ? true : false}
                                    />
                                    <label>Fixo</label>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                    <div className="input__group__border">
                        <h3>Dados Bancários</h3>

                        <div className="input__store__group">
                            <input required className="mc-input" type="text" value={bank.bank} onChange={handleInput} name="bank" />
                            <label className="mc-label">Banco </label>
                        </div>

                        <div className="input__store__group">
                            <input required className="mc-input" type="text" value={bank.agency} onChange={handleInput} name="agency" />
                            <label className="mc-label">Agência </label>
                        </div>

                        <div className="input__store__group">
                            <input required className="mc-input" type="text" value={bank.account} onChange={handleInput} name="account" />
                            <label className="mc-label">Conta </label>
                        </div>

                        <div className="input__store__group">
                            <input required className="mc-input" type="text" value={bank.pix} onChange={handleInput} name="pix" />
                            <label className="mc-label">Pix </label>
                        </div>

                    </div>

                    <div className="g__box__radio">
                        <fieldset>
                            <legend>Status</legend>
                            <div className="box-input-radio">
                                <div className="box-group-radio">
                                    <input
                                        className="input-radio"
                                        type="radio"
                                        id="hueys"
                                        name="is_active"
                                        onClick={handleActive}
                                        value={1}
                                    // defaultChecked={(data.is_active === 1) ? true : false}
                                    />
                                    <label>Ativo</label>
                                </div>
                                <div className="box-group-radio">
                                    <input
                                        className="input-radio"
                                        type="radio"
                                        id="huey"
                                        name="is_active"
                                        onClick={handleActive}
                                        value={0}
                                    // defaultChecked={(data.is_active === 0) ? true : false}
                                    />
                                    <label>Desativado</label>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                    <div className="g__box__radio">
                        <fieldset>
                            <legend>Regras</legend>
                            <div className="box-input-radio">
                                <div className="box-group-radio">
                                    <input className="input-radio"
                                        onChange={handleRules}
                                        type="radio"
                                        id="huey"
                                        name="rules"
                                        value="admin"
                                    // defaultChecked={(data.rules === "admin") ? true : false}
                                    />
                                    <label>Administrador</label>
                                </div>
                                <div className="box-group-radio">
                                    <input
                                        className="input-radio"
                                        onChange={handleRules}
                                        type="radio"
                                        id="hueys"
                                        name="rules"
                                        value="user"
                                    // defaultChecked={(data.rules === "user") ? true : false}
                                    />
                                    <label>Usuário</label>
                                </div>
                                <div className="box-group-radio">
                                    <input
                                        className="input-radio"
                                        onChange={handleRules}
                                        type="radio"
                                        id="huey"
                                        name="rules"
                                        value="professional"
                                    // defaultChecked={(data.rules === "professional") ? true : false}
                                    />
                                    <label>Profissional</label>
                                </div>
                            </div>
                        </fieldset>
                        <div className="fieldset__content">
                            <p><span>*Administrador: </span>Financeiro, Cadastros, Agendamentos, Agenda.</p>
                            <p><span>*Usuário:</span> Cadastros, Agendamentos, Agenda.</p>
                            <p><span>*Profissionais:</span> Agendamentos, Agenda.</p>
                        </div>
                    </div>

                    <div className="box-button">
                        <button className="btn bt-cancel" onClick={closeModal} >Cancelar</button>
                        <button className="btn">Cadastrar</button>
                    </div>

                </form>
            </TemplateContentColumn>
        </TemplateModal>
    );
}