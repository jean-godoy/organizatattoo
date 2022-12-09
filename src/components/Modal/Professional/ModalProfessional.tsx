import { useEffect, useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { handleCpf, handleFormatDateToOutput, handlePhone } from '../../../services/mask/maskService';
import { getProfessionalFullData } from '../../../services/Professional/professionalService';
import Loading from '../../Loading/Loading';
import { TemplateContentColumn } from '../Template/TemplateContentColumn';
import { TemplateModal } from '../Template/TemplateModal';
import './modalProfessional.css';
import { ModalProfessionalEdit } from './ModalProfessionalEdit';


interface IModalProfessional {
    closeModal: () => void;
    professional: any
}

type TProfessionalData = {
    professional: any;
    address: any;
    bank: any;
    payment: any;
}

export const ModalProfessional = ({ professional, closeModal }: IModalProfessional) => {

    const [modal, setModal] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<TProfessionalData>({} as TProfessionalData);

    useEffect(() => {
        setLoading(true);

        (async () => {
            const response = await getProfessionalFullData(professional.id);
            if (response.status) {
                setData(response.data);
                setLoading(false);
            }
        })();
    }, []);

    const openModal = () => {
        setModal(true);
    }

    const modalClose = () => {
        setModal(false);
    }

    const cpf = handleCpf(`${professional.cpf}`)


    return (
        <TemplateModal>
            {modal ? <ModalProfessionalEdit professional={professional} closeModal={modalClose} /> : <div></div>}
            {loading ? <Loading /> : <div></div>}
            <TemplateContentColumn>
                <header className="m__budget__header">
                    <span className="header__title">Detalhes do Profissional</span>
                    <FaUserPlus className="modal__budget__icon" onClick={openModal} />
                </header>

                <ul className="box-ul">

                    <span className="list__separator" >Dados Cadastrais</span>

                    <li className="box-li">
                        <samp className="li-title">Nome:</samp>
                        <samp>{professional.name}</samp>
                    </li>

                    <li className="box-li">
                        <samp className="li-title">E-mail:</samp>
                        <samp>{professional.email}</samp>
                    </li>

                    <li className="box-li">
                        <samp className="li-title">celular:</samp>
                        <samp>{handlePhone(`${professional.cell_phone}`)}</samp>
                    </li>

                    <li className="box-li">
                        <samp className="li-title">Telefone:</samp>
                        <samp>{handlePhone(`${professional.phone}`)}</samp>
                    </li>

                    <li className="box-li">
                        <samp className="li-title">Data de Nascimento:</samp>
                        <samp>{handleFormatDateToOutput(professional.birth_date)}</samp>
                    </li>

                    <li className="box-li">
                        <samp className="li-title">Sexo:</samp>
                        <samp>{(professional.sex === "male") ? "Masculino" : "Feminino"}</samp>
                    </li>

                    <li className="box-li">
                        <samp className="li-title">CPF:</samp>
                        <samp>{cpf}</samp>
                    </li>

                    <li className="box-li">
                        <samp className="li-title">CNPJ:</samp>
                        <samp>{professional.cnpj}</samp>
                    </li>

                    <li className="box-li">
                        <samp className="li-title">Regras:</samp>
                        <samp>{professional.rules}</samp>
                    </li>

                    <li className="box-li">
                        <samp className="li-title">Usuário Ativo:</samp>
                        <samp>{professional.is_active ? "Ativo" : "Desativado"}</samp>
                    </li>

                    {data.address &&
                        <>
                            <span className="list__separator" >Endereço</span>

                            <li className="box-li">
                                <samp className="li-title">Rua:</samp>
                                <samp>{data?.address.address}</samp>
                            </li>
                            <li className="box-li">
                                <samp className="li-title">Número:</samp>
                                <samp>{data?.address.number}</samp>
                            </li>
                            <li className="box-li">
                                <samp className="li-title">Bairro:</samp>
                                <samp>{data?.address.district}</samp>
                            </li>

                            <li className="box-li">
                                <samp className="li-title">Cidade:</samp>
                                <samp>{data?.address.city}</samp>
                            </li>

                            <li className="box-li">
                                <samp className="li-title">CEP:</samp>
                                <samp>{data?.address.cep}</samp>
                            </li>

                            <li className="box-li">
                                <samp className="li-title">Estado:</samp>
                                <samp>{data?.address.uf}</samp>
                            </li>

                            <span className="list__separator" >Dados Bancários</span>


                            <li className="box-li">
                                <samp className="li-title">Banco:</samp>
                                <samp>{data?.bank.bank}</samp>
                            </li>

                            <li className="box-li">
                                <samp className="li-title">Agencia:</samp>
                                <samp>{data?.bank.agency}</samp>
                            </li>

                            <li className="box-li">
                                <samp className="li-title">Conta:</samp>
                                <samp>{data?.bank.account}</samp>
                            </li>

                            <li className="box-li">
                                <samp className="li-title">Pix:</samp>
                                <samp>{data?.bank.pix}</samp>
                            </li>

                            <span className="list__separator" >Método de Pagamento</span>


                            <li className="box-li">
                                <samp className="li-title">Pagamento:</samp>
                                <samp>{(data?.payment.payment.percent ? "Porcentagem" : "fixo")}</samp>
                            </li>
                        </>
                    }

                </ul>

                <button onClick={() => closeModal()} className="modal-button">OK</button>
            </TemplateContentColumn>
        </TemplateModal>
    );
}
