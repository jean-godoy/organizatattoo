import { ChangeEvent, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { registerBrand } from "../../../services/material/materialService";

type TBoxFormSimpleProps = {
    productId: string;
}

export const BoxFormBrand = ({ productId }: TBoxFormSimpleProps) => {

    const [value, setValue] = useState<string>('');

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            product_id: productId,
            product_brand: value
        }
        
        const response = await registerBrand(data);
        
        if(response.replicated) {
            toast.warning(`${response.message}`)
        }

        if(response.status) {
            toast.success("Marca registrada com sucesso.")
        }

        if(!response.status) {
            toast.error ("Erro ao registrar marca, tente novamente.")
        }
        
    }

    return(
        <form onSubmit={handleSubmit} className="g__box__form__simple">
            <input 
                type="text" 
                className="g__form__simple__input" 
                placeholder="Adicionar marca"
                onChange={handleInput}
            />
            <button className="g__form__simple__btn" type="submit">
                <FaPlus className="g__form__simple__icon" />
            </button>
        </form>
    );
}