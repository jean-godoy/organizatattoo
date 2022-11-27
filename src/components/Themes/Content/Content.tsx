import { ReactNode } from 'react';
import './content.css';

interface TProps {
    children: ReactNode;
}

export const Content = ({ children }: TProps) => {

    return (
        <div className="box-content">
            { children }
        </div>
    );
}