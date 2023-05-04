import { ChangeEvent, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { registerBrand, registerCategory } from "../../../services/material/materialService";

type TProduct = {
    id: string,
    product_name: string,
}

type TBoxFormSimpleProps = {
    product: TProduct;
}

export const BoxFormCategory = ({ product }: TBoxFormSimpleProps) => {

    const [value, setValue] = useState<string>('');

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            "material_product_id": product.id,
            "material_category": value
        }
        
        const response = await registerCategory(data);
        
        if (response.replicated) {
            return toast.warning(`${response.message}`)
        }

        if (response.status) {
            return toast.success("Categoria registrada com sucesso.")
        }

        if (!response.status) {
            return toast.error("Erro ao registrar categoria, tente novamente.")
        }

    }
    
    return (
        <form onSubmit={handleSubmit} className="g__box__form__simple">
            <input
                type="text"
                className="g__form__simple__input"
                placeholder="Adicionar categoria"
                onChange={handleInput}
            />
            <button className="g__form__simple__btn" type="submit">
                <FaPlus className="g__form__simple__icon" />
            </button>
        </form>
    );
}