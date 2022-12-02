import { useContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom"
import { TSidebarOpen } from './@types';
import { Calendar } from "./pages/Calendar/Calendar";
import { Loading } from "./components/Loading/styles";

// Pages
import { Main } from "./components/Main/Main"
import { AuthContext } from "./contexts/Auth/AuthContext";
import { Costumer } from "./pages/Costumers/Costumer";
import { CostumerStore } from "./pages/Costumers/CostumerStore";
import { Login } from "./pages/Login/Login";
import { Budget } from "./pages/Budget/Budget";
import { Professional } from "./pages/Professional/Professional";
import { ProfessionalStore } from "./pages/Professional/ProfessionalStore";
import { Material } from "./pages/Material/Material";
import { UserStore } from "./pages/User/UserStore";
import { User } from "./pages/User/User";
import { Register } from "./pages/Register/Register";
import { NewBudget } from "./pages/Budget/NewBudget";

export const Router = () => {

    const [sidebarOpen, setSidebarOpen] = useState<TSidebarOpen | any>(false);
    const { loading, authenticated } = useContext(AuthContext);

    const Private = ({ children }: { children: JSX.Element }) => {

        if (loading) {

            return <Loading />
        }

        if(!authenticated) {

            return <Navigate to="/login" />
        }

        return children;
    }

    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    return (
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/" element={<Private><Main /></Private>} />
                <Route path="/clientes" element={<Private><Costumer /></Private>} />
                <Route path="/cliente-cadastro" element={<Private><CostumerStore /></Private>} />

                <Route path="/profissional" element={<Private><Professional /></Private>} />
                <Route path="/profissional/cadastro" element={<Private><ProfessionalStore /></Private>} />

                <Route path="/estoque/material-de-procedimentos" element={<Private><Material /></Private>} />

                <Route path="/orcamentos" element={<Private><Budget /></Private>} />
                <Route path="/orcamentos/novo-orcamento" element={<Private><NewBudget /></Private>} />

                <Route path="/agenda/calendario" element={<Private><Calendar /></Private>} />

                <Route path="/usuarios" element={<Private><User /></Private>} />
                <Route path="/usuarios/adicionar" element={<Private><UserStore /></Private>} />


                <Route path='*' element={<h1>Not Found</h1>} />
            </Routes>
    );
}