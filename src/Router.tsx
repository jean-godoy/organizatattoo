import { useContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom"
import { TSidebarOpen } from './@types';
import { Loading } from "./components /Loading/styles";

// Pages
import { Main } from "./components /Main/Main"
import { AuthContext } from "./contexts/Auth/AuthContext";
import { Costumer } from "./pages/Costumers/Costumer";
import { CostumerStore } from "./pages/Costumers/CostumerStore";
import { Login } from "./pages/Login/Login";

export const Router = () => {

    const [sidebarOpen, setSidebarOpen] = useState<TSidebarOpen | any>(false);
    const { loading, authenticated } = useContext(AuthContext);

    const Private = ({ children }: { children: JSX.Element }) => {
        console.log('private', loading);

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
                <Route path="/main" element={<Private><Main /></Private>} />
                <Route path="/clientes" element={<Private><Costumer /></Private>} />
                <Route path="/cliente-cadastro" element={<Private><CostumerStore /></Private>} />
                <Route path='*' element={<h1>Not Found</h1>} />
            </Routes>
    );
}