import { ReactNode } from 'react';
import './templateModal.css';

interface TProps {
    children: ReactNode
}

export const TemplateModal = ({ children }: TProps) => {

    return (
        <div id="template__modal">
            { children }
        </div>
    );
}