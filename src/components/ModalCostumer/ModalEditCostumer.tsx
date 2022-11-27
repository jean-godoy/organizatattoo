import { ChangeEvent, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ICostumer } from '../../@types';
import { editCostumers } from '../../services/costumer/costumerService';
import Loading from '../Loading/Loading';
import { TemplateContentColumn } from '../Modal/Template/TemplateContentColumn';
import { TemplateModal } from '../Modal/Template/TemplateModal';
// import './modal.css';

export type TCostumer = {
    costumer: ICostumer;
    closeModal: () => void;
}

export const ModalEditCostumer = ({ costumer, closeModal }: TCostumer) => {

    const navigate = useNavigate();
    const [data, setData] = useState<ICostumer>(costumer);
    const [loading, setLoading] = useState<boolean>(false);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });

    }

    const handleActive = (e: any) => {
        setData({ ...data, ['is_active']: parseInt(e.target.value) });
    }

    const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        
        if (data) {
            const response = await editCostumers(data);
            
            if(response.status) {
                setLoading(false);
                toast.success(`${response.message}`);
                navigate('/clientes');
            }

            if(!response.status) {
                toast.error("Erro ao atualizar o cliente, Por favor tente mais tarde.");
            }

        }
    }

    return (
        <TemplateModal>
            { loading ? <Loading /> : <div></div> }
            <TemplateContentColumn>
                <header className="m__budget__header">
                    <span>Editar Cliente</span>
                </header>

                <form onSubmit={onSubmit} className="box__form__store">
                    <div className="input__group__border">
                        <div className="input__store__group">
                            <input className="mc-input" onChange={handleInput} value={data.name} type="text" required id="name" name="name" />
                            <label className="mc-label" htmlFor="name">Nome Completo</label>
                        </div>

                        <div className="input__store__group">
                            <input className="mc-input" onChange={handleInput} value={data.phone} type="text" required id="phone" name="phone" />
                            <label className="mc-label" htmlFor="phone">Telefone</label>
                        </div>

                        <div className="input__store__group">
                            <input className="mc-input" onChange={handleInput} value={data.email} type="email" required id="email" name="email" />
                            <label className="mc-label" htmlFor="email">E-mail</label>
                        </div>

                        <div className="input__store__group">
                            <input className="mc-input" onChange={handleInput} value={data.cpf} type="text" required id="cpf" name="cpf" />
                            <label className="mc-label" htmlFor="cpf">CPF</label>
                        </div>

                        <div className="input__store__group">
                            <input className="mc-input" onChange={handleInput} value={data.birth_date} type="date" required id="birth_date" name="birth_date" />
                            <label className="mc-label" htmlFor="birth_date">Data De Nascimento</label>
                        </div>

                        <div className="input__store__group">
                            <input className="mc-input" onChange={handleInput} value={data.address} type="text" name="address" required id="address" />
                            <label className="mc-label" htmlFor="address">Endereço</label>
                        </div>

                        <div className="input__store__group">
                            <input className="mc-input" onChange={handleInput} value={data.district} type="text" required id="district" name="district" />
                            <label className="mc-label" htmlFor="district">bairro</label>
                        </div>

                        <div className="input__store__group">
                            <input className="mc-input" onChange={handleInput} value={data.city} type="text" required id="city" name="city" />
                            <label className="mc-label" htmlFor="city">Cidade</label>
                        </div>

                        <div className="input__store__group">
                            <input className="mc-input" onChange={handleInput} value={data.cep} type="text" required id="cep" name="cep" />
                            <label className="mc-label" htmlFor="cep">Cep</label>
                        </div>

                        <div className="input__store__group">
                            <input className="mc-input" onChange={handleInput} value={data.uf} type="text" required id="uf" name="uf" />
                            <label className="mc-label" htmlFor="uf">Estado</label>
                        </div>

                        <div className="g__box__radio">
                            <fieldset>
                                <legend>Status</legend>
                                <div className="box-input-radio">
                                    <div className="box-group-radio">
                                        <input
                                            className="input-radio"
                                            type="radio"
                                            id="hueys"
                                            name="is_active"
                                            onClick={handleActive}
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
                                            onClick={handleActive}
                                            value={0}
                                            defaultChecked={(data.is_active === 0) ? true : false}
                                        />
                                        <label>Desativado</label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>

                    </div>
                    <div className="box-button">
                        <button className="btn bt-cancel" onClick={closeModal}>Cancelar</button>
                        <button type="submit" className="btn">Editar</button>
                    </div>

                </form>
            </TemplateContentColumn>
        </TemplateModal>
    );
}