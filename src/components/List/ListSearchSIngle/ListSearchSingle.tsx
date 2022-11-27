import { ChangeEvent, useState } from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import './style.css';

interface IProps {
    description:string;
    placeholder: string;
    liTitle: string;
    service: (data: string) => any;
    result: (brand: string) => any;
}


/**
 * Componente de lista que retorna um unico resultado,
 * Especificamos os Titulo e nome do campo.
 * Retorna resultado do campo selecionado.
 * @param param0 
 * @returns 
 */
export const ListSearchSingle = ({ description, placeholder, liTitle, service, result }: IProps) => {

    const [brand, setBrand] = useState<any>();

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value.length > 2) {

            getResult(value);

            setBrand([
                { brand: 'Intenze' },
                { brand: 'Star Brigth' },
                { brand: 'Viper' },
                { brand: 'Eletric Ink' }
            ])
        }

        if (value.length <= 0) {
            setBrand([]);
        }

    }

    const getResult = (data: string) => {
        const res = service(data);
        result(res)
    }

    const List = () => {

        return (<div className="g__result__seacrh">
            <ul className="g__input__ul__search">
                {brand && brand.map((item: any, index: number) => (
                    <li className="g__input__li__search" key={index}>
                        <span className="item__search__result" >{liTitle}:</span>
                        <span className="item__search__value" >{item.brand}</span>
                    </li>
                ))}
            </ul>
        </div>);
    }

    return (
        <div className="g__input__content__seacrh">
            <header className="g__input__content__header">
                <FaSearch />
                <span>{ description }</span>
            </header>
            <div className="g__input__group">
                <input required className="global-input" type="text" name="search" onChange={handleSearch} />
                <label className="g__input__label">{ placeholder }</label>
            </div>

            <List />
        </div>
    );
}