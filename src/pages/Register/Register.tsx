import { ChangeEvent } from 'react';
import './register.css';
import '../../styles/form.css';

export const Register = () => {

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {

    }

    return (
        <div className="box__register" >
            <div className="register__content">

                <header className="register__header">
                    <h1>Organiza Tattoo</h1>
                </header>

                <form className="box__form__store">
                    <div className="input__group__border">

                        <h3>Dados de Cadastro</h3>

                        <div className="input__store__group">
                            <input className="mc-input" onChange={handleInput} type="text" name="name" />
                            <label className="mc-label">Nome do Studio*</label>
                        </div>

                        <div className="input__store__group">
                            <input className="mc-input" onChange={handleInput} type="email" name="email" />
                            <label className="mc-label">Nome do Usuário *</label>
                        </div>

                        <div className="input__store__group">
                            <input className="mc-input" onChange={handleInput} type="email" name="email" />
                            <label className="mc-label">E-mail *</label>
                        </div>

                        <div className="input__store__group">
                            <input className="mc-input" onChange={handleInput} type="password" name="password" />
                            <label className="mc-label">Senha *</label>
                        </div>

                        <div className="input__store__group">
                            <input className="mc-input" onChange={handleInput} type="password" name="confirm_password" />
                            <label className="mc-label">Confirmar Senha *</label>
                        </div>

                    </div>

                    <div className="g__box__radio__column">
                        <fieldset>
                            <legend className="g__radio__column__legend">Escolha seu Plano</legend>
                            <div className="g__box__input__radio__column">

                                <div className="g__box__group__radio__column">
                                    <input
                                        className="input-radio"
                                        type="radio"
                                        id="hueys"
                                        name="is_active"
                                        // onClick={handleActive}
                                        value={1}
                                    // defaultChecked={(data.is_active === 1) ? true : false}
                                    />
                                    <label>Básico R$19,90</label>
                                    <p>(Para um usuário)</p>
                                </div>

                                <div className="g__box__group__radio__column">
                                    <input
                                        className="input-radio"
                                        type="radio"
                                        id="huey"
                                        name="is_active"
                                        // onClick={handleActive}
                                        value={0}
                                    // defaultChecked={(data.is_active === 0) ? true : false}
                                    />
                                    <label>Intermediário R$49,90</label>
                                    <p>(Até cinco usuário)</p>
                                </div>

                                <div className="g__box__group__radio__column">
                                    <input
                                        className="input-radio"
                                        type="radio"
                                        id="huey"
                                        name="is_active"
                                        // onClick={handleActive}
                                        value={0}
                                    // defaultChecked={(data.is_active === 0) ? true : false}
                                    />
                                    <label>Intermediário 2 R$99,90</label>
                                    <p>(Até dez usuários)</p>
                                </div>

                                <div className="g__box__group__radio__column">
                                    <input
                                        className="input-radio"
                                        type="radio"
                                        id="huey"
                                        name="is_active"
                                        // onClick={handleActive}
                                        value={0}
                                    // defaultChecked={(data.is_active === 0) ? true : false}
                                    />
                                    <label>Avançado R$199,90</label>
                                    <p>(Sem limetes de usuários)</p>
                                </div>

                                <div className="g__box__group__radio__column">
                                    <input
                                        className="input-radio"
                                        type="radio"
                                        id="huey"
                                        name="is_active"
                                        // onClick={handleActive}
                                        value={0}
                                    // defaultChecked={(data.is_active === 0) ? true : false}
                                    />
                                    <label>Empresarial R$499,90</label>
                                    <p>(Sem limetes de filiais e usuários)</p>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                    <div className="box-button">
                        <button className="btn bt-cancel" >Cancelar</button>
                        <button className="btn">Cadastrar</button>
                    </div>

                </form>
            </div>
        </div>
    );
}