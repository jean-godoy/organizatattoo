import { FaSearch } from 'react-icons/fa';
import './modalSearch.css';

export interface IModalCostumerSearch {
    closeModalSearch: () => void;

}

export const ModalCostumerSearch = ({ closeModalSearch }: IModalCostumerSearch) => {

    return (
        <div className="modal">
            <div className="search">
                <header className="box-header-search">
                    <input className="search-input" type="text" placeholder="Digite um nome, e-mail ou cpf" />
                    <i className="icon"><FaSearch className="icon-search" /> </i>
                </header>
            </div>
        </div>
    );
}