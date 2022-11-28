import { ChangeEvent, useContext, useState } from 'react';
import { FaFileUpload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading/Loading';
import { Content } from '../../components/Themes/Content/Content';
import { Dashboard } from '../../components/Themes/Dashboard/Dashboard';
import { Main } from '../../components/Themes/Main/Main';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { register } from '../../services/auth/Professional/professionalService';
import { handleCep, handleCpf, handleDate, handlePhone } from '../../services/mask/maskService';
import { clearMask } from '../../utils/mask/mask';
import './professional.css';

export const ProfessionalStore = () => {

    const studioId = useContext(AuthContext)?.userData?.studioUuid;
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
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<any>([]);

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

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const dataPost = {
            studio_id: studioId,
            name: data.name,
            email: data.email,
            cell_phone: parseInt(clearMask(cell)),
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

        const response = await register(dataPost);
        
        if(response.status) {
            setLoading(false);
            toast.success(`${response.message}`);
            navigate('/profissional');
        }   
    }
    
    return (
        <Dashboard>
            { loading ? <Loading/> : <div></div> }
            <Main>
                <Content>
                    <header className="content__header">
                        <span>Adicionar Novo Profissional</span>
                    </header>

                    <form onSubmit={handleSubmit} className="box__form__store">
                        <div className="input__group__border">

                            <h3>Dados Pessoais</h3>

                            <div className="input__store__group">
                                <input required className="mc-input" type="text" onChange={handleInput} name="name" />
                                <label className="mc-label">Nome *</label>
                            </div>

                            <div className="input__store__group">
                                <input required className="mc-input" type="text" onChange={handleInput} name="email" />
                                <label className="mc-label">E-mail *</label>
                            </div>

                            <div className="input__store__group">
                                <input required className="mc-input" value={cell} onChange={(e) => setCell(handlePhone(e.target.value))} type="text" name="cell_phone" />
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
                                <input required className="mc-input" value={cpf} onChange={(e) => setCpf(handleCpf(e.target.value))} type="text" name="cpf_cnpj" />
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
                                <input required className="mc-input" type="text" onChange={handleInput}  name="bank" />
                                <label className="mc-label">Banco </label>
                            </div>

                            <div className="input__store__group">
                                <input required className="mc-input" type="text" onChange={handleInput}  name="agency" />
                                <label className="mc-label">Agência </label>
                            </div>

                            <div className="input__store__group">
                                <input required className="mc-input" type="text" onChange={handleInput}  name="account" />
                                <label className="mc-label">Conta </label>
                            </div>

                            <div className="input__store__group">
                                <input required className="mc-input" type="text" onChange={handleInput}  name="pix" />
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
                            <button className="btn bt-cancel" >Cancelar</button>
                            <button className="btn">Cadastrar</button>
                        </div>

                    </form>
                </Content>
            </Main>
        </Dashboard>
    );
}