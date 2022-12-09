import { create } from '../../hooks/useAPI';
import API from '../../utils/API';

export const registerBudget = async (data: any) => {
    try {
        const response = await API.post('/api/budget', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Access': 'application/json'
            }});
        return response?.data;
    } catch (error) {
        console.log("ERROR BUDGET STORE", error);

    }
}