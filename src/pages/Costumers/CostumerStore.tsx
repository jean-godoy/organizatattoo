import { ChangeEvent, useState } from 'react';
import { ICostumer } from '../../@types';
import { Content } from '../../components/Themes/Content/Content';
import { Dashboard } from '../../components/Themes/Dashboard/Dashboard';
import { Main } from '../../components/Themes/Main/Main';
import './costumer.css';

//mask
import { clearMask, maskCEP, maskCpf, maskDate, maskPhone } from '../../utils/mask/mask';
import Loading from '../../components/Loading/Loading';
import { createCostumer } from '../../services/costumer/costumerService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export const CostumerStore = () => {

    const navigate = useNavigate();

    const [phone, setPhone] = useState<string | number>('');
    const [cpf, setCpf] = useState<string | number>('');
    const [date, setDate] = useState<string>('');
    const [cep, setCep] = useState<string | number>('');
    const [sex, setSex] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [active, setActive] = useState<boolean | null>(null)

    const [costumer, setCostumer] = useState<ICostumer>({} as ICostumer);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCostumer({ ...costumer, [name]: value });

    }

    const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(maskPhone(e.target.value));
    }

    const handleCpf = (e: ChangeEvent<HTMLInputElement>) => {
        setCpf(maskCpf(e.target.value));
    }

    const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
        setDate(maskDate(e.target.value));
    }

    const handleCep = (e: ChangeEvent<HTMLInputElement>) => {
        setCep(maskCEP(e.target.value));
    }

    const handleSex = (e: any) => {
        const { value } = e.target;
        setSex(value);
    }

    const handleActive = (e: any) => {
        setActive(e.target.value)
    }

    const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {

        e.preventDefault();
        setLoading(true)
        if (costumer) {
            const values = {
                name: costumer.name,
                phone: parseInt(clearMask(phone)),
                email: costumer.email,
                cpf: parseInt(clearMask(cpf)),
                birth_date: date,
                address: costumer.address,
                district: costumer.district,
                city: costumer.city,
                cep: parseInt(clearMask(cep)),
                uf: costumer.uf,
                sex: sex,
                is_active: active
            };

               const res = await createCostumer(values);

               if(res.status) {
                setLoading(false);
                toast.success("Cliente cadastrado com sucesso.")
                navigate('/clientes');
               }

        }
    }

    return (
        <Dashboard>
            {loading ? <Loading /> : <div></div>}
            <Main>
                <Content>
                    <header className="content__header" >Cadastrar novo cliente</header>
                    <form className="box__form__store" onSubmit={onSubmit}>
                        <div className="input__group__border">
                            <div className="input__store__group">
                                <input className="mc-input" onChange={handleInput} type="text" required id="name" name="name" />
                                <label className="mc-label" >Nome Completo</label>
                            </div>

                            <div className="input__store__group">
                                <input className="mc-input" value={phone} onChange={handlePhone} type="text" required id="phone" name="phone" />
                                <label className="mc-label" >Telefone</label>
                            </div>

                            <div className="input__store__group">
                                <input className="mc-input" onChange={handleInput} type="email" required id="email" name="email" />
                                <label className="mc-label" >E-mail</label>
                            </div>

                            <div className="input__store__group">
                                <input className="mc-input" value={cpf} onChange={handleCpf} type="text" required id="cpf" name="cpf" />
                                <label className="mc-label" >CPF</label>
                            </div>

                            <div className="input__store__group">
                                <input className="mc-input" value={date} onChange={handleDate} type="text" required id="birth_date" name="birth_date" />
                                <label className="mc-label" >Data De Nascimento</label>
                            </div>

                            <div className="input__store__group">
                                <input className="mc-input" onChange={handleInput} type="text" name="address" required id="address" />
                                <label className="mc-label" >Endereço</label>
                            </div>

                            <div className="input__store__group">
                                <input className="mc-input" onChange={handleInput} type="text" required id="district" name="district" />
                                <label className="mc-label" >bairro</label>
                            </div>

                            <div className="input__store__group">
                                <input className="mc-input" onChange={handleInput} type="text" required id="city" name="city" />
                                <label className="mc-label" >Cidade</label>
                            </div>

                            <div className="input__store__group">
                                <input className="mc-input" value={cep} onChange={handleCep} type="text" required id="cep" name="cep" />
                                <label className="mc-label" >Cep</label>
                            </div>

                            <div className="input__store__group">
                                <input className="mc-input" onChange={handleInput} type="text" required id="uf" name="uf" />
                                <label className="mc-label" >Estado</label>
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
                                    </div>
                                </fieldset>
                            </div>

                            <div className="g__box__radio">
                                <fieldset>
                                    <legend>Usuário ativo</legend>
                                    <div className="box-input-radio">
                                        <div className="box-group-radio">
                                            <input className="input-radio" type="radio" id="hueys" name="is_active" onClick={handleActive} value={1} />
                                            <label>Ativo</label>
                                        </div>
                                        <div className="box-group-radio">
                                            <input className="input-radio" type="radio" id="huey" name="is_active" onClick={handleActive} value={0} />
                                            <label>Desativado</label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                        </div>
                        <button className="form-button-submit">Cadastrar</button>

                    </form>
                </Content>
            </Main>
        </Dashboard >
    );
}