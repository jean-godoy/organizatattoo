import { useContext } from 'react';
import { FaHome, FaPowerOff, FaRegTimesCircle, FaUserPlus, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PropsSideBar } from '../../@types';
import avatar from '../../assets/images/avatar.jpg';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import './sidebar.css';

export const SideBar = ({ sidebarOpen, closeSidebar }: PropsSideBar) => {

    const { logout } = useContext(AuthContext);

    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-img">
                    <img src={avatar} alt="Foto de perfil." />
                    <h1>Tarvos O.S.</h1>
                </div>
                <FaRegTimesCircle className="sidebar-icon" onClick={() => closeSidebar()} />
            </div>

            <div className="sidebar-menu">
                {/* <div className="sidebar-link active_menu_link"> */}
                    {/* <FaHome className="sidebar-link-icon" />     */}
                    {/* <Link to="/main">Home</Link> */}
                {/* </div> */}
                <h2 className="active_menu_link">Home</h2>
                <h2>Clientes</h2>
                <div className="sidebar-link">
                    <FaUsers className="sidebar-link-icon" />
                    <Link to="/clientes">Clientes</Link>
                </div>
                <div className="sidebar-link">
                    <FaUserPlus className="sidebar-link-icon" />
                    <Link to="/cliente-cadastro">Cadastro</Link>
                </div>
                <h2>Admin</h2>
                <div className="sidebar-link">
                    <i className="fa fa-tachometer"></i>
                    <a href="#">Área Administrativa</a>
                </div>
                <div className="sidebar-link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Lojas</a>
                </div>
                <div className="sidebar-link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Produtos</a>
                </div>
                <div className="sidebar-link">
                    <i className="fa fa-bars"></i>
                    <a href="#">Categorias</a>
                </div>
                <div className="sidebar-link">
                    <i className="fa fa-cutlery"></i>
                    <a href="#">Pedidos</a>
                </div>
                <div className="sidebar-link">
                    <i className="fa fa-file-text"></i>
                    <a href="#">Poloitica de privacidade</a>
                </div>

                <div className="sidebar-logout" onClick={logout}>
                    <FaPowerOff className="sidebar-logout-icon" />
                    <p>Logout</p>
                </div>
            </div>
        </div>
    );
}