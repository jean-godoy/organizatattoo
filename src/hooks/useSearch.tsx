import API from "../utils/API";
import { getBy } from "./useAPI";

const getSearch = async (data: string) => {
    try {
        const response = await API.get(`/api/professional-search/${data}`, {
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