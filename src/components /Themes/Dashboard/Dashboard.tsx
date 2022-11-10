import { ReactNode, useState } from 'react';
import { TSidebarOpen } from '../../../@types';
import { NavBar } from '../../NavBar/NavBar';
import { SideBar } from '../../Sidebar/SideBar';
import './style.css';

export const Dashboard = ({ children }: { children: ReactNode }) => {

    const [sidebarOpen, setSidebarOpen] = useState<TSidebarOpen | any>(false);

    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    return (
        <div className="container">
            <NavBar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
            <div className="main">
                { children }
            </div>
            <SideBar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        </div>
    );
}