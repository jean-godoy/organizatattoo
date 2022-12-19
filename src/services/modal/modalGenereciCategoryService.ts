import { all, create, getBy } from '../../hooks/useAPI';

export const registerModalCategory = async (url: string, data: any) => {

    try {
        
        const response = await create(url, data);
        return response?.data;

    } catch (error) {
        console.log("ERROR MODAL CATEGORY", error);
        
    }

}