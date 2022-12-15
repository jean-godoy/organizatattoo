import { create } from '../hooks/useAPI';


export const registerSubCategory = async(data: any, url: string) => {
    try {
        const response = await create(url, data);
        return response?.data;
    } catch (error) {
        console.log("ERROR REGISTER SUB CATEGORY");
        
    }
}