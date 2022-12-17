import { useState, ChangeEvent, useContext, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading/Loading';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { ToastifyContext } from '../../contexts/Toastify/ToastifyContext';

import './login.css';

export const Login = () => {

    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const { writeMessage } = useContext(ToastifyContext);
 
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (auth.authenticated) {
            navigate('/');
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
        setIsLoading(true);
        
        if (email && password) {
            const res: any = await auth.login(email, password);

            if(res.code === 401) {
                setIsLoading(false);
            }
            
            if (!auth.loading) {
                toast.success('Usuário logado com sucesso');
                setIsLoading(false);
                navigate('/');
                window.location.reload();
                
            }
        }
    }

    return (
        <div className="login">
            {isLoading ? <Loading /> : <div></div>}
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
                            <input type="password" id="password" className="input" name="password" onChange={handlePasswordInput} />
                        </div>

                        <button type="submit" className="form-button">Entrar</button>

                    </form>

                    <div className="create-account">
                        <h3>Faça seu cadastro</h3>
                        <Link to="/register" className="link-create-account">Criar conta</Link>
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