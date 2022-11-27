import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { ToastifyContext } from '../../contexts/Toastify/ToastifyContext';
import { Dashboard } from '../Themes/Dashboard/Dashboard';
import './main.css';

export const Main = () => {

    const { userData } = useContext(AuthContext);
    const { writeMessage } = useContext(ToastifyContext);
    
    useEffect(() => {
        // writeMessage('ola Toastify')
    }, []);
    
    return (
      <Dashboard>
         <div className="main-container">
            <div className="main-title">
                <div className="main-greeting">
                    <h1>Olá usuário</h1>
                    <p>Seja bem vindo</p>
                    <p>{ userData && userData.studioUuid }</p>
                </div>
            </div>
        </div>
      </Dashboard>
    );
}