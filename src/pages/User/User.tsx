import { Main } from '../../components/Themes/Main/Main';
import { Content } from '../../components/Themes/Content/Content';
import { Dashboard } from '../../components/Themes/Dashboard/Dashboard';
import './user.css';
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { getUsers } from '../../services/user/userService';
import Loading from '../../components/Loading/Loading';
import { UserDetails } from '../../components/Modal/User/UserDetails';

export const User = () => {

    const [users, setUsers] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);
    const [data, setData] = useState<any>();

    useEffect(() => {
        setLoading(true);
        (async () => {
            const res = await getUsers();
            if(res.status) {
                setUsers(res.data);
                setLoading(false);
            }
        })();
    }, []);

    const openModal = (user: any) => {
        setData(user);
        setModal(true);
    }

    const closeModal = () => {
        setModal(false)
    }

    return (
        <Dashboard>
            { loading ? <Loading /> : <div></div> }
            { modal ? <UserDetails user={data} closeModal={closeModal} /> : <div></div> }
            <Main>
                <Content>
                    <div className="g__box__list">
                        <header className="g__list__header">
                            <span>Usuários</span>
                            <FaSearch className="icon-search" />
                        </header>

                        <ul className="g__list__ul">
                            {users?.map((item:any, index:number) => (
                                <li className="g__list__li" key={index} onClick={() => openModal(item)} >
                                    <span className="g__list__li__name">Nome:</span>
                                    <span className="g__list__li__value">{ item.name }</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Content>
            </Main>
        </Dashboard>
    );
}