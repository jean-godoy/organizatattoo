import { useContext, useEffect, useState } from 'react';
import { ToastifyContext } from '../../contexts/Toastify/ToastifyContext';
import './toastify.css';

const Toastify = () => {

    const { isMessage, message } = useContext(ToastifyContext);
    const [visible, setVisible] = useState('');

    useEffect(() => {

        setVisible('visible')

        const timer = setTimeout(() => {
            setVisible('...');
        }, 3000)
    }, []);

    function ContentToastify(text: any) {
        return (
            <div className="container__toastify">
                <div className={`toastify__content ${visible}`}>
                    <h3>Teste de Toastify</h3>
                </div>
            </div>
        );
    }

    return (
        <>
            {isMessage && <ContentToastify text={message} />}
        </>
    );
}

export default Toastify;