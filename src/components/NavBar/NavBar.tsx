import { useContext } from 'react';
import { FaAlignJustify, FaSearch, FaUserAlt } from 'react-icons/fa';
import { PropsNavBar } from '../../@types';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import './navBar.css';

export const NavBar = ({ sidebarOpen, openSidebar}: PropsNavBar) => {

    const { userData } = useContext(AuthContext);

    return(
        <nav className="navbar">
            <div className="navbar-icon" onClick={() => openSidebar()} >
                <FaAlignJustify  />
            </div>

            <div className="navbar-left">
                <a href="#">Produtos</a>
                <a href="#">Usuários</a>
                <a href="#" className="active-link">Admin</a>
            </div>

            <div className="navbar-right">
                <a href="#" className="box-link">
                   <FaSearch className="icon-search" />
                </a>

                <a className="user-logged">
                    <FaUserAlt className="user-logged-icon" />
                    <p>{ userData && userData.name }</p>
                </a>
            </div>
        </nav>
    );
}