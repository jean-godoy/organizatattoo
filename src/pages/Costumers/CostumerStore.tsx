import { ChangeEvent, useState } from 'react';
import { ICostumer } from '../../@types';
import { Dashboard } from '../../components /Themes/Dashboard/Dashboard';
import './costumer.css';


export const CostumerStore = () => {

    const [costumer, setCostumer] = useState<ICostumer>({} as ICostumer);

    const handleInput = (e: ChangeEvent <HTMLInputElement>) => {
        const {name, value} = e.target;
        setCostumer({ ...costumer,[name]:value });
        console.log(costumer);
        
    }

    const onSubmit = (e: ChangeEvent <HTMLFormElement>) => {
        e.preventDefault();
        console.log(costumer);
        
    }

    return (
        <Dashboard>
            <div className="box-costumer">
                <form className="costumer-form">
                    <header>Cadastrar novo cliente</header>
                    <div className="box-form">
                        <label htmlFor="name">Nome Completo</label>
                        <input onChange={handleInput} type="text" required id="name" name="name"  />
                    </div>

                    <div className="box-form">
                        <label htmlFor="phone">Telefone</label>
                        <input onChange={handleInput} type="text" required id="phone" name="phone" />
                    </div>

                    <div className="box-form">
                        <label htmlFor="email">E-mail</label>
                        <input onChange={handleInput} type="email" required id="email" name="email" />
                    </div>

                    <div className="box-form">
                        <label htmlFor="cpf">CPF</label>
                        <input onChange={handleInput} type="text" required id="cpf" name="cpf" />
                    </div>

                    <div className="box-form">
                        <label htmlFor="birth_date">Data De Nascimento</label>
                        <input onChange={handleInput} type="date" required id="birth_date" name="birth_date" />
                    </div>

                    <div className="box-form">
                        <label htmlFor="address">Endereço</label>
                        <input onChange={handleInput} type="text" name="address" required id="address" />
                    </div>

                    <div className="box-form">
                        <label htmlFor="district">bairro</label>
                        <input onChange={handleInput} type="text" required id="district" name="district" />
                    </div>

                    <div className="box-form">
                        <label htmlFor="city">Cidade</label>
                        <input onChange={handleInput} type="text" required id="city"  name="city" />
                    </div>

                    <div className="box-form">
                        <label htmlFor="cep">Cep</label>
                        <input onChange={handleInput} type="text" required id="cep" name="cep" />
                    </div>

                    <div className="box-form">
                        <label htmlFor="uf">Estado</label>
                        <input onChange={handleInput} type="text" required id="uf" name="uf" />
                    </div>
                    
                    <button className="form-button-submit">Cadastrar</button>

                </form>
            </div>
        </Dashboard>
    );
}