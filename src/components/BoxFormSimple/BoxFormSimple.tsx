import { ChangeEvent, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { registerSubCategory } from "../../services/category/categoryService";

type TBoxFormSimpleProps = {
    categoryId: string
}

export const BoxFormSimple = ({ categoryId }: TBoxFormSimpleProps) => {

    const [value, setValue] = useState<string>('');

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            sub_category: value,
            category_id: categoryId
        }
        
        const response = await registerSubCategory(data);
        
        if(response.replicated) {
            toast.warning(`${response.message}`)
        }

        if(response.status) {
            toast.success("Sub Categoria criada com sucesso.")
        }

        if(!response.status) {
            toast.error ("Erro ao cria sub categoria, tenta novamente.")
        }
        
    }

    return(
        <form onSubmit={handleSubmit} className="g__box__form__simple">
            <input 
                type="text" 
                className="g__form__simple__input" 
                placeholder="Adicionar sub categoria"
                onChange={handleInput}
            />
            <button className="g__form__simple__btn" type="submit">
                <FaPlus className="g__form__simple__icon" />
            </button>
        </form>
    );
}