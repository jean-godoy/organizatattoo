import React from 'react';
import './main.css';

interface TProps {
    children: React.ReactNode
}

/**
 * Componente div com display flex, 
 * alinhamentos ao centro.
 * @param param0 
 * @returns children
 */
export const Main = ( {children}: TProps ) => {

    return <div className="container-content">{ children }</div>
}