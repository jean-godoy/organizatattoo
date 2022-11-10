import { Dashboard } from '../Themes/Dashboard/Dashboard';
import './main.css';

export const Main = () => {

    return (
      <Dashboard>
         <div className="main-container">
            <div className="main-title">
                <div className="main-greeting">
                    <h1>Olá usuário</h1>
                    <p>Seja bem vindo</p>
                </div>
            </div>
        </div>
      </Dashboard>
    );
}