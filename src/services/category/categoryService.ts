import { TResponse } from '../../@types';
import { all, create, getBy } from '../../hooks/useAPI';


type TCategoryProps = {
    category: string
}

export const registerCategory = async ( category: any ) => {

    try {
        const response = await create('/api/category', category);
        return response?.data;
    } catch (error) {
        console.log("error category register", error);
        
    }
}

export const getAll = async() => {
    try {
        
        const response: any = await all('/api/category');
        return response.data;

    } catch (error) {
        console.log("error category all", error);
    }
}

export const getSubCategories = async (id: string) => {
    try {
        const response = await getBy(`/api/sub-category/${id}`);
        return response?.data;
    } catch (error) {
        
    }
}

/** */
export const registerSubCategory = async(data: any) => {
    try {
        const response = await create('/api/sub-category', data);
        return response?.data;
    } catch (error) {
        console.log("ERROR REGISTER SUB CATEGORY");
        
    }
}