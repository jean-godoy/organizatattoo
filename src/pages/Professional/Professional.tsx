import { Main } from '../../components/Themes/Main/Main';
import { Content } from '../../components/Themes/Content/Content';
import { Dashboard } from '../../components/Themes/Dashboard/Dashboard';
import './professional.css';

export const Professional = () => {

    return (
        <Dashboard>
            <Main>
                <Content>
                    <header className="content__header">
                        <span>Proficionais</span>
                    </header>
                </Content>
            </Main>
        </Dashboard>
    );
}