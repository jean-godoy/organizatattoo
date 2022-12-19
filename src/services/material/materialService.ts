import { all, create, getBy } from '../../hooks/useAPI';

export const handleGetAllProducts = async () => {

    try {
        
        const response = await all('/api/material-products');
        return response?.data;

    } catch (error) {
        
    }

}