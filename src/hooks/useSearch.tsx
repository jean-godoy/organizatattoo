import API from "../utils/API";
import { getBy } from "./useAPI";

/**
 * Retorna uma pesquisa na API pelo nome.
 * ex url: api/professional-search
 * ex data: Jon 
 * @param url 
 * @param data 
 * @returns 
 */
const getSearch = async (url:string, data: string) => {
    try {
        const response = await API.get(`${url}/${data}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access': 'application/json'
            }
        });
        if (response) {
            return response.data;
        }
    } catch (error) {
        console.log('ERROR  SEARCH PROFESSIONAL', error);
    }
}

export default getSearch;