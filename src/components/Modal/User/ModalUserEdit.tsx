import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IModalUser, TUser, TUserInput } from '../../../@types';
import { userEdit } from '../../../services/user/userService';
import Loading from '../../Loading/Loading';
import { TemplateContentColumn } from '../Template/TemplateContentColumn';
import { TemplateModal } from '../Template/TemplateModal';
import './userModal.css';


export const ModalUserEdit = ({ user, closeModal }: IModalUser) => {

    const [data, setData] = useState<TUserInput>(user);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const hanldeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleAdmin = (e: any) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleRules = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        if (data.studio_uuid) {
            setData({ ...data, ['studio_uuid']: data.studio_uuid });
            if (data) {
                delete data.check_password
            }

            const post = {
                uuid: data.uuid,
                name: data.name,
                email: data.email,
                // password: data.password,
                rules: data.rules,
                is_active: data.is_active,
            }
            
            const response = await userEdit(post);

            
            if (response.status) {
                setLoading(false);
                toast.success('Usuario editado com sucesso');
                navigate ('/usuarios');
            }
        }

    }
    
    return (
        <TemplateModal>
            { loading ? <Loading /> :  <div></div> }
            <TemplateContentColumn>
                <header className="m__budget__header">
                    <span>Editar Usuário</span>
                </header>

                <form onSubmit={handleSubmit} className="box__form__store">
                    <div className="input__group__border">

                        <h3>Dados do Usuário</h3>

                        <div className="input__store__group">
                            <input required className="mc-input" onChange={hanldeInput} value={data.name} type="text" name="name" />
                            <label className="mc-label">Nome *</label>
                        </div>

                        <div className="input__store__group">
                            <input required className="mc-input" onChange={hanldeInput} value={data.email} type="email" name="email" />
                            <label className="mc-label">E-mail *</label>
                        </div>

                        <div className="input__store__group">
                            <input
                                required
                                className="mc-input"
                                type="password"
                                name="password"
                                onChange={hanldeInput}
                                value={data.password}
                            />
                            <label className="mc-label">Senha *</label>
                        </div>

                        <div className="g__box__radio">
                            <fieldset>
                                <legend>Usuário ativo</legend>
                                <div className="box-input-radio">
                                    <div className="box-group-radio">
                                        <input 
                                            className="input-radio" 
                                            type="radio" 
                                            id="hueys" 
                                            name="is_active" 
                                            onClick={handleAdmin} 
                                            value={1} 
                                            defaultChecked={(data.is_active === 1) ? true : false}
                                        />
                                        <label>Ativo</label>
                                    </div>
                                    <div className="box-group-radio">
                                        <input 
                                            className="input-radio" 
                                            type="radio" 
                                            id="huey" 
                                            name="is_active" 
                                            onClick={handleAdmin} 
                                            value={0} 
                                            defaultChecked={(data.is_active === 0) ? true : false}
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
                                            defaultChecked={(data.rules === "admin") ? true : false}
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
                                            defaultChecked={(data.rules === "user") ? true : false}
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
                                            defaultChecked={(data.rules === "professional") ? true : false}
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

                    </div>

                    <div className="box-button">
                        <button className="btn bt-cancel" onClick={closeModal}>Cancelar</button>
                        <button className="btn" type="submit">Editar</button>
                    </div>

                </form>
            </TemplateContentColumn>
        </TemplateModal>
    );
}