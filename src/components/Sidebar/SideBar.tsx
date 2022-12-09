import { useContext } from 'react';
import {
    FaHome,
    FaPowerOff,
    FaRegTimesCircle,
    FaUserPlus,
    FaUsers,
    FaAngleDown,
    FaUserFriends,
    FaBoxes,
    FaClipboardList,
    FaSyringe,
    FaRegChartBar,
    FaMoneyBillAlt,
    FaRegEdit,
    FaRegPlusSquare,
    FaRegPlayCircle,
    FaUserCheck,
    FaRegCalendarAlt,
    FaRegCalendarCheck,
    FaUserTie,
    FaUser,
    FaListOl
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PropsSideBar } from '../../@types';
import avatar from '../../assets/images/avatar.jpg';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import './sidebar.css';

export const SideBar = ({ sidebarOpen, closeSidebar }: PropsSideBar) => {

    const { logout, userData } = useContext(AuthContext);

    const handleMenuCostumer = () => {
        const menu: any = document.querySelector(".box-drop");
        menu.classList.toggle("visible");
    }

    const handleMenuProfessional = () => {
        const menu: any = document.querySelector(".professional");
        menu.classList.toggle("visible");
    }

    const handleMenuInventory = () => {
        const menu: any = document.querySelector(".inventory");
        menu.classList.toggle("visible");
    }

    const handleMenuFinancial = () => {
        const menu: any = document.querySelector(".financial");
        menu.classList.toggle("visible");
    }

    const handleMenuBudget = () => {
        const menu: any = document.querySelector(".budget");
        menu.classList.toggle("visible");
    }

    const handleMenuAttendance = () => {
        const menu: any = document.querySelector(".attendance");
        menu.classList.toggle("visible");
    }

    const handleMenuService = () => {
        const menu: any = document.querySelector(".service");
        menu.classList.toggle("visible");
    }

    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-img">
                    <img src={avatar} alt="Foto de perfil." />
                    <h1>Organiza Tattoo</h1>
                </div>
                <FaRegTimesCircle className="sidebar-icon" onClick={() => closeSidebar()} />
            </div>

            <div className="sidebar-menu">
                <div className="sidebar-link active_menu_link">
                    <FaHome className="sidebar-link-icon" />
                    <Link to="/">Home</Link>
                </div>

                {/* <h2>Clientes</h2>
                <div className="sidebar-link">
                    <FaUsers className="sidebar-link-icon" />
                    <Link to="/clientes">Clientes</Link>
                </div>
                <div className="sidebar-link">
                    <FaUserPlus className="sidebar-link-icon" />
                    <Link to="/cliente-cadastro">Cadastro</Link>
                </div> */}

                <div className="menu-drop" onClick={handleMenuCostumer}>
                    <div className="menu-drop-header">
                        <h2 className="drop-h2">
                            <FaUserFriends className="icon-drop-h2" />
                            Clientes
                        </h2>
                        <FaAngleDown className="icon-drop-down" />
                    </div>
                    {/* ---------------------- DROP DOWN ------------------------- */}
                    <div id="boxDrop" className="box-drop">
                        <Link to="/clientes" className="sidebar-link-drop">
                            <FaUsers className="sidebar-link-icon" />
                            <label>Clientes</label>
                        </Link>
                        <Link to="/cliente-cadastro" className="sidebar-link-drop">
                            <FaUserPlus className="sidebar-link-icon" />
                            <span>Cadastro</span>
                        </Link>
                    </div>
                </div>

                <div className="menu-drop" onClick={handleMenuBudget}>
                    <div className="menu-drop-header">
                        <h2 className="drop-h2">
                            <FaRegEdit className="icon-drop-h2" />
                            Orçamentos
                        </h2>
                        <FaAngleDown className="icon-drop-down" />
                    </div>
                    {/* ---------------------- DROP DOWN ------------------------- */}
                    <div className="box-drop budget">
                        <Link to="/orcamentos" className="sidebar-link-drop">
                            <FaRegPlusSquare className="sidebar-link-icon" />
                            <label>Orçamentos</label>
                        </Link>
                        <Link to="/orcamentos/novo-orcamento" className="sidebar-link-drop">
                            <FaRegPlusSquare className="sidebar-link-icon" />
                            <label>Novo Orçamento</label>
                        </Link>
                    </div>
                </div>

                <div className="menu-drop" onClick={handleMenuAttendance}>
                    <div className="menu-drop-header">
                        <h2 className="drop-h2">
                            <FaRegCalendarAlt className="icon-drop-h2" />
                            Agendamentos
                        </h2>
                        <FaAngleDown className="icon-drop-down" />
                    </div>
                    {/* ---------------------- DROP DOWN ------------------------- */}
                    <div className="box-drop attendance">
                        <Link to="/agenda/calendario" className="sidebar-link-drop">
                            <FaRegCalendarCheck className="sidebar-link-icon" />
                            <label>Calendario</label>
                        </Link>
                    </div>
                </div>

                <div className="menu-drop" onClick={handleMenuAttendance}>
                    <div className="menu-drop-header">
                        <h2 className="drop-h2">
                            <FaUserCheck className="icon-drop-h2" />
                            Atendimento
                        </h2>
                        <FaAngleDown className="icon-drop-down" />
                    </div>
                    {/* ---------------------- DROP DOWN ------------------------- */}
                    <div className="box-drop attendance">
                        <Link to="/gerar-orcamento" className="sidebar-link-drop">
                            <FaRegPlayCircle className="sidebar-link-icon" />
                            <label>Iniciar sessão</label>
                        </Link>
                        <Link to="/gerar-orcamento" className="sidebar-link-drop">
                            <FaSyringe className="sidebar-link-icon" />
                            <label>Aplicação Piercing</label>
                        </Link>
                    </div>
                </div>

                <h2>Admin</h2>
                <div className="menu-drop" onClick={handleMenuFinancial}>
                    <div className="menu-drop-header">
                        <h2 className="drop-h2">
                            <FaUser className="icon-drop-h2" />
                            Usuários
                        </h2>
                        <FaAngleDown className="icon-drop-down" />
                    </div>
                    {/* ---------------------- DROP DOWN ------------------------- */}
                    <div className="box-drop financial">
                        <Link to="/usuarios" className="sidebar-link-drop">
                            <FaUserFriends className="sidebar-link-icon" />
                            <label>Usuários</label>
                        </Link>
                        <Link to="/usuarios/adicionar" className="sidebar-link-drop">
                            <FaUserPlus className="sidebar-link-icon" />
                            <span>Adicionar</span>
                        </Link>
                        <Link to="/relatorio" className="sidebar-link-drop">
                            <FaRegChartBar className="sidebar-link-icon" />
                            <span>Relatórios</span>
                        </Link>
                    </div>
                </div>

                <div className="menu-drop" onClick={handleMenuProfessional}>
                    <div className="menu-drop-header">
                        <h2 className="drop-h2">
                            <FaUserTie className="icon-drop-h2" />
                            <label>Profissionais</label>
                        </h2>
                        <FaAngleDown className="icon-drop-down" />
                    </div>
                    {/* ---------------------- DROP DOWN ------------------------- */}
                    <div className="box-drop professional">
                        <Link to="/profissional" className="sidebar-link-drop">
                            <FaUsers className="sidebar-link-icon" />
                            <label>Profissionais</label>
                        </Link>
                        <Link to="/profissional/cadastro" className="sidebar-link-drop">
                            <FaUserPlus className="sidebar-link-icon" />
                            <span>Cadastro</span>
                        </Link>
                    </div>
                </div>
                
                {/* --------------------- CATEGORIES -------------------------- */}
                <div className="menu-drop" onClick={handleMenuService}>
                    <div className="menu-drop-header">
                        <h2 className="drop-h2">
                            <FaListOl className="icon-drop-h2" />
                            <label>Categorias</label>
                        </h2>
                        <FaAngleDown className="icon-drop-down" />
                    </div>
                    {/* ---------------------- DROP DOWN ------------------------- */}
                    <div className="box-drop service">
                        <Link to="/categoria-servico" className="sidebar-link-drop">
                            <FaUsers className="sidebar-link-icon" />
                            <label>Categorias</label>
                        </Link>
                        {/* <Link to="/profissional/cadastro" className="sidebar-link-drop">
                            <FaUserPlus className="sidebar-link-icon" />
                            <span>Cadastro</span>
                        </Link> */}
                    </div>
                </div>
                {/* -------------------- AND SERVICES ---------------------- */}

                <div className="menu-drop" onClick={handleMenuInventory}>
                    <div className="menu-drop-header">
                        <h2 className="drop-h2">
                            <FaBoxes className="icon-drop-h2" />
                            Estoque
                        </h2>
                        <FaAngleDown className="icon-drop-down" />
                    </div>
                    {/* ---------------------- DROP DOWN ------------------------- */}
                    <div className="box-drop inventory">
                        <Link to="/estoque/material-de-procedimentos" className="sidebar-link-drop">
                            <FaClipboardList className="sidebar-link-icon" />
                            <label>Material</label>
                        </Link>
                        <Link to="/estoque/piercing" className="sidebar-link-drop">
                            <FaSyringe className="sidebar-link-icon" />
                            <span>Piercings</span>
                        </Link>
                        <Link to="/estoque/relatorios" className="sidebar-link-drop">
                            <FaRegChartBar className="sidebar-link-icon" />
                            <span>Relatórios</span>
                        </Link>
                    </div>
                </div>


                <div className="sidebar-link">
                    <i className="fa fa-tachometer"></i>
                    <a href="#">Área Administrativa</a>
                </div>

                <div className="menu-drop" onClick={handleMenuFinancial}>
                    <div className="menu-drop-header">
                        <h2 className="drop-h2">
                            <FaMoneyBillAlt className="icon-drop-h2" />
                            Financeiro
                        </h2>
                        <FaAngleDown className="icon-drop-down" />
                    </div>
                    {/* ---------------------- DROP DOWN ------------------------- */}
                    <div className="box-drop financial">
                        <Link to="/despesas" className="sidebar-link-drop">
                            <FaClipboardList className="sidebar-link-icon" />
                            <label>Despesas</label>
                        </Link>
                        <Link to="/receita" className="sidebar-link-drop">
                            <FaSyringe className="sidebar-link-icon" />
                            <span>Receitas</span>
                        </Link>
                        <Link to="/relatorio" className="sidebar-link-drop">
                            <FaRegChartBar className="sidebar-link-icon" />
                            <span>Relatórios</span>
                        </Link>
                    </div>
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