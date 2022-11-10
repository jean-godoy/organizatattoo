import { useState, ChangeEvent, useContext, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';

import './login.css';

export const Login = () => {

    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const auth = useContext(AuthContext);
    const nagigate = useNavigate();

    useEffect(() => {
        if(auth.authenticated) {
            nagigate('/main');
        }
    });
    
    // Handle imput E-mail.
    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    //Handle input Password.
    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(email && password) {
            const res = await auth.login(email, password);
        }
    }

    return(
        <div className="login">
            <div className="box-login">

                <div className="box-left">
                    <header className="box-left-title">Organiza Tattoo</header>

                    <form onSubmit={handleSubmit} className="login-register-form">
                        <h3 className="form-title">Login</h3>

                        <div className="form-register-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" className="input" name="email" onChange={handleEmailInput} />
                        </div>

                        <div className="form-register-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className="input" name="password" onChange={handlePasswordInput}/>
                        </div>

                        <button type="submit" className="form-button">Entrar</button>

                    </form>

                    <div className="create-account">
                        <h3>Faça seu cadastro</h3>
                        <Link className="link-create-account" to="#">Criar conta</Link>
                    </div>
                </div>

                <div className="box-right">
                    <h1>Organiza Tattoo</h1>
                    <h3>Sistema de gestão para estudios</h3>
                    <p>Feito de Tatuador para Tatuador</p>
                </div>

            </div>
        </div>
    );
}