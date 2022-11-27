import { Main } from '../../components/Themes/Main/Main';
import { Content } from '../../components/Themes/Content/Content';
import { Dashboard } from '../../components/Themes/Dashboard/Dashboard';
import { ChangeEvent, useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { userStore } from '../../services/user/userService'

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import './user.css';

type TUser = {
    name: string,
    email: string,
    password: string,
    check_password?: string,
    rules: string,
    is_active: boolean,
    studio_uuid: string | null
}

export const UserStore = () => {

    const { userData } = useContext(AuthContext);
    const navigate = useNavigate();
    const studioUuid: string | null = userData ? userData.studioUuid : null;
    const [user, setUser] = useState<TUser>({} as TUser);

    // const schema = yup.object().shape({
    //     name: yup.string().required(),
    //     email: yup.string().required(),
    //     password: yup.string().required(),
    //     is_active: yup.boolean().required(),
    //     rules: yup.string().required(),
    // });

    const hanldeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleAdmin = (e: any) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleRules = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (studioUuid) {
            setUser({ ...user, ['studio_uuid']: studioUuid });

            if (user) {
                delete user.check_password
            }

            if (!(await validateSchema())) return;

            const post = {
                name: user.name,
                email: user.email,
                password: user.password,
                rules: user.rules,
                is_active: 1,
                studio_uuid: studioUuid
            }

            const response = await userStore(post);
            if (response.status) {
                toast.success('Usuario registrado com sucesso');
                navigate('/usuarios');
            }
        }

    }

    const validateSchema = async () => {
        const schema = yup.object().shape({
            name: yup.string().required("Erro: é necessário preencher o campo Nome"),
            email: yup.string().required("Erro: é necessário preencher o campo E-mail"),
            password: yup.string().required("Erro: é necessário preencher o campo Senha"),
            check_password: yup.string().oneOf([yup.ref('password')], 'As senhas não conferem.'),
            rules: yup.string().required("Erro: é necessário escolher uma regra"),
            is_active: yup.boolean().required("Erro: é necessário definir campo ativo"),
        });

        try {
            await schema.validate(user);
            return true;
        } catch (error: any) {
            toast.warning(`${error.errors}`);
            return false;
        }
    }

    return (
        <Dashboard>
            <Main>
                <Content>
                    <header className="content__header">
                        <span>Adicionar Usuário</span>
                    </header>

                    <form onSubmit={handleSubmit} className="box__form__store">
                        <div className="g__box__radio">

                            <fieldset>
                                <legend>Dados do Usuário</legend>

                                <div className="input__store__group">
                                    <input className="mc-input" onChange={hanldeInput} type="text" name="name" />
                                    <label className="mc-label">Nome *</label>
                                </div>

                                <div className="input__store__group">
                                    <input className="mc-input" onChange={hanldeInput} type="email" name="email" />
                                    <label className="mc-label">E-mail *</label>
                                </div>

                                <div className="input__store__group">
                                    <input

                                        className="mc-input"
                                        type="password"
                                        name="password"
                                        onChange={hanldeInput}
                                    />
                                    <label className="mc-label">Senha *</label>
                                </div>

                                <div className="input__store__group">
                                    <input

                                        className="mc-input"
                                        onChange={hanldeInput}
                                        type="password"
                                        name="check_password" />
                                    <label className="mc-label">Confirmar Senha *</label>
                                </div>
                            </fieldset>
                        </div>

                        <div className="g__box__radio">
                            <fieldset>
                                <legend>Usuário ativo</legend>
                                <div className="box-input-radio">
                                    <div className="box-group-radio">
                                        <input className="input-radio" type="radio" id="hueys" name="is_active" onClick={handleAdmin} value={1} />
                                        <label>Ativo</label>
                                    </div>
                                    <div className="box-group-radio">
                                        <input className="input-radio" type="radio" id="huey" name="is_active" onClick={handleAdmin} value={0} />
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
                                        <input className="input-radio" onChange={handleRules} type="radio" id="huey" name="rules" value="admin" />
                                        <label>Administrador</label>
                                    </div>
                                    <div className="box-group-radio">
                                        <input className="input-radio" onChange={handleRules} type="radio" id="hueys" name="rules" value="user" />
                                        <label>Usuário</label>
                                    </div>
                                    <div className="box-group-radio">
                                        <input className="input-radio" onChange={handleRules} type="radio" id="huey" name="rules" value="professional" />
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
                            <button className="btn bt-cancel">Cancelar</button>
                            <button className="btn" type="submit">Cadastrar</button>
                        </div>

                    </form>
                </Content>
            </Main>
        </Dashboard>
    );
}