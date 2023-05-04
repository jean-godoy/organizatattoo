import { create, all, destroy,  } from '../../hooks/useAPI';
import API from '../../utils/API';
import { checkCredentialService } from '../auth/checkCredentialService';

export const registerBudget = async (data: any) => {
    try {
        const response = await API.post('/api/budget', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                // 'Access': 'application/json'
            }});
        return response?.data;
    } catch (error) {
        console.log("ERROR BUDGET STORE", error);

    }
}

export const showBudgets = async () => {
    try {
        const response = await all('/api/budget');

        return response?.data;
    } catch (error) {
        console.log("ERROR SHOW BUDGETS ", error);
        
    }
}

export const destroyBudget = async (url: string, id: string) => {
    try {
        const response = await destroy(url, id);
        return response?.data;
    } catch (error) {
        console.log("ERROR SHOW BUDGETS DESTROY ", error);
        
    }
}   