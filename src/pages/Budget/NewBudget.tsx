import { Main } from '../../components/Themes/Main/Main'; import { Content } from "../../components/Themes/Content/Content";
import { Dashboard } from "../../components/Themes/Dashboard/Dashboard";
import { ChangeEvent, useEffect, useState } from 'react';
import getSearch from '../../hooks/useSearch';
import { SearchList } from '../../components/Search/SearchList';

export const NewBudget = () => {

    const [result, setResult] = useState<any>();

    const getResult = (res: any): any => {
        console.log("ress ", res);

    }

    return (
        <Dashboard>
            <Main>
                <Content>
                    <header className="content__header">
                        <span>Novo Orçamento</span>
                    </header>

                    <form className="box__form__store">

                        <SearchList
                            url="/api/professional-search"
                            result={(data) => getResult(data)}
                        />

                    </form>
                </Content>
            </Main>
        </Dashboard>
    );
}