import { Main } from '../../components/Themes/Main/Main';
import { Content } from '../../components/Themes/Content/Content';
import { Dashboard } from '../../components/Themes/Dashboard/Dashboard';
import './professional.css';
import { useEffect, useState } from 'react';
import { getAll } from '../../services/auth/Professional/professionalService';

export const Professional = () => {

    const [data, setData] = useState<any>();
    const [modal, setModal] = useState<boolean>(false);


    useEffect(() => {
        (async () => {
            const response = await getAll();
            if (response.status) {
                setData(response.data);
            }
        })();
    }, []);

    const openModal = (data: any) => {
        setModal(true);

    }

    return (
        <Dashboard>
            <Main>
                <Content>
                    <div className="g__box__list">
                        <header className="g__list__header">
                            <span>Proficionais</span>
                        </header>

                        <ul className="g__list__ul">
                            {data?.map((item: any, index: number) => (
                                 <li className="g__list__li" key={index} onClick={() => openModal(item)} >
                                 <span className="g__list__li__name">Nome:</span>
                                 <span className="g__list__li__value">{ item.name }</span>
                             </li>
                            )) }
                        </ul>
                    </div>


                </Content>
            </Main>
        </Dashboard>
    );
}