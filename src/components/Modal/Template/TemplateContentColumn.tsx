import { ReactNode } from 'react';
import './templateModal.css';

type TProps = {
    children: ReactNode
}

export const TemplateContentColumn = ({ children }: TProps) => {

    return(
        <div id="content__column">
            { children }
        </div>
    );
}