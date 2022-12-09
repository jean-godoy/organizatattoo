import { useEffect, useState } from "react";
import { FaAngleDown, FaPalette } from "react-icons/fa";
import { hookGetItem } from "../../hooks/hookGetItem";
import { getAll } from "../../services/category/categoryService";

type TItem = {
    id: string;
    category: string;
}

type TBoxDropdownProps = {
    url: string;
    indexMap?: string;
    title: string;
    itemSelected: (item: TItem) => TItem;
}

export const BoxDropdown = ({ url, indexMap, title, itemSelected }: TBoxDropdownProps) => {

    const [category, setCategory] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [header, setHeader] = useState<string>(title);

    useEffect(() => {
        (async () => {
            const u:string = url    
            const response = await hookGetItem(url);
            if (response.status) {
                setCategory(response.data);
            }
        })();
    }, []);

    const handleList = (data: any) => {
        setHeader(data.category);
        itemSelected(data);
    }

    return (
        <div className="box-dropdown-select">
            <div className="dropdown-select-header">
                <span>{header}</span>
                <FaAngleDown />
            </div>

            <div className="box-dropdown-list-option">
                {
                    category ? (
                        category?.map((item: any, index: number) => (
                            <div
                                className="dropdown-list-option"
                                onClick={() => handleList(item)}
                                key={index}
                            >
                                { item.category }
                            </div>
                        ))
                    )
                        : <div className="dropdown-list-option">Nehuma categoria cadastrada</div>
                }
            </div>
        </div>
    );
}