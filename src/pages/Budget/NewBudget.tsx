import { Main } from '../../components/Themes/Main/Main'; import { Content } from "../../components/Themes/Content/Content";
import { Dashboard } from "../../components/Themes/Dashboard/Dashboard";
import { ChangeEvent, useEffect, useState } from 'react';
import getSearch from '../../hooks/useSearch';

export const NewBudget = () => {

    const [search, setSearch] = useState<string>("");
    const [result, setResult] = useState<any>([]);

    useEffect(() => {
        (async () => {
            if (search.length > 2) {
                const response = await getSearch(search);

                if (response.status) {
                    setResult(response.data);
                }
            }
        })();

    }, [search]);
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        if(result.length <= 1) {
            setResult([]);
        }
        const { name, value } = e.target;
        setSearch(value);
    }

    console.log(result);

    return (
        <Dashboard>
            <Main>
                <Content>
                    <header className="content__header">
                        <span>Novo Orçamento</span>
                    </header>

                    <form className="box__form__store">

                        <div className="input__group__border">

                            <div className="input__store__group">
                                <input required className="mc-input" type="text" name="search" onChange={handleSearch} />
                                <label className="mc-label">Nome do Cliente *</label>
                                {/* ---------------------------------------------------- */}
                                <ul className="g__ul__search">
                                    {result?.map((item: any, index:number) => (
                                        <li className="g__li__search" key={index}>
                                            {item.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>

                    </form>
                </Content>
            </Main>
        </Dashboard>
    );
}