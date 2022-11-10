import { ChangeEvent, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { ICostumer } from '../../@types';
import './modal.css';

export type TCostumer = {
    costumer: ICostumer;
    closeModal: () => void;
}

export const ModalEditCostumer = ({ costumer, closeModal }: TCostumer) => {

    const [costumerEdit, setCostumerEdit] = useState<ICostumer>(costumer);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCostumerEdit({ ...costumerEdit, [name]: value });
        console.log(costumer);

    }

    const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(costumer);

    }

    const deleteUser = () => {
        alert(`Deseja realmente deletar o clente ${costumer.name}`)
    }

    return (
        <div className="modal">
            <form onSubmit={onSubmit} className="costumer-form mt-200 mb-50">
                <div className="box-header">
                    <header>Editar cliente</header>
                    <FaTrashAlt className="modal-icon" onClick={deleteUser} />
                </div>
                <div className="box-form">
                    <label htmlFor="name">Nome Completo</label>
                    <input onChange={handleInput} value={costumer.name} type="text" required id="name" name="name" />
                </div>

                <div className="box-form">
                    <label htmlFor="phone">Telefone</label>
                    <input onChange={handleInput} value={costumer.phone} type="text" required id="phone" name="phone" />
                </div>

                <div className="box-form">
                    <label htmlFor="email">E-mail</label>
                    <input onChange={handleInput} value={costumer.email} type="email" required id="email" name="email" />
                </div>

                <div className="box-form">
                    <label htmlFor="cpf">CPF</label>
                    <input onChange={handleInput} value={costumer.cpf} type="text" required id="cpf" name="cpf" />
                </div>

                <div className="box-form">
                    <label htmlFor="birth_date">Data De Nascimento</label>
                    <input onChange={handleInput} value={costumer.birth_date} type="date" required id="birth_date" name="birth_date" />
                </div>

                <div className="box-form">
                    <label htmlFor="address">Endereço</label>
                    <input onChange={handleInput} value={costumer.address} type="text" name="address" required id="address" />
                </div>

                <div className="box-form">
                    <label htmlFor="district">bairro</label>
                    <input onChange={handleInput} value={costumer.district} type="text" required id="district" name="district" />
                </div>

                <div className="box-form">
                    <label htmlFor="city">Cidade</label>
                    <input onChange={handleInput} value={costumer.city} type="text" required id="city" name="city" />
                </div>

                <div className="box-form">
                    <label htmlFor="cep">Cep</label>
                    <input onChange={handleInput} value={costumer.cep} type="text" required id="cep" name="cep" />
                </div>

                <div className="box-form">
                    <label htmlFor="uf">Estado</label>
                    <input onChange={handleInput} value={costumer.uf} type="text" required id="uf" name="uf" />
                </div>

                <div className="button-group">
                    <button className="form-button-submit">Editar</button>
                    <button className="form-button-submit bt-cancel" onClick={closeModal}>Cancelar</button>
                </div>

            </form>
        </div>
    );
}