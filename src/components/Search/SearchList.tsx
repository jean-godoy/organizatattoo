import { ChangeEvent, useEffect, useState } from "react";
import getSearch from "../../hooks/useSearch";

import '../../styles/list.css';
import '../../components/Modal/Budget/modalBudgetForm.css';

type TSearchListProps = {
    url: string;
    result: (data: any) => any;
    placeholder?: string;
}

export const SearchList = ({ url, result, placeholder }: TSearchListProps) => {

    const [res, setRes] = useState<any | null>(null);
    const [search, setSearch] = useState<string>('');
    const [value, setValue] = useState<string>('');

    useEffect(() => {
        (async () => {
            if (search.length > 2) {
                const response = await getSearch(url, search);
                
                if (response.status) {
                    setRes(response.data)
                }
            }
        })();

    }, [search]);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        if(result.length <= 1) {
            result([]);
            setRes(null)
        }
        const { value } = e.target;
        setSearch(value);
    }
    
    const handleResult = (data: any) => {
        setRes(null);
        result(data);
        setSearch(data.name);
    }
    
    return (
        <div>
            <input 
                required 
                className="mc-input"    
                value={search} 
                type="text" 
                name="search" 
                onChange={handleSearch} 
                placeholder={ placeholder ? placeholder : "Digite pelo menos três letras..." }
            />
            {/* ---------------------------------------------------- */}
            <ul className="g__ul__search">
                {res?.map((item: any, index: number) => (
                    <li className="g__li__search" key={index} onClick={() => handleResult(item)}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}