import { all, create, getBy } from '../../hooks/useAPI';

export const handleGetAllProducts = async () => {

    try {
        
        const response = await all('/api/material-products');
        return response?.data;

    } catch (error) {
        
    }
}

/**
 * Pega todas marcas relacionadas a um produto
 * pelo ID.
 * @param product_id 
 */
export const getBrandByProductId = async (product_id: string) => {
    try {
        const response = await getBy(`/api/get-brand-by-product-id/${product_id}`);
        return response?.data;
    } catch (error) {
        
    }
}

export const registerBrand = async (data: any) => {
    try {
        const response = await create('/api/material-brand', data);
        return response?.data;
    } catch (error) {
        console.log("ERROR REGISTER BRAND", error);
        
    }
}