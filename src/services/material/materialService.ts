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
export const getBrandByCategoryId = async (category_id: string) => {
    try {
        const response = await getBy(`/api/get-brand-by-category-id/${category_id}`);
        return response?.data;
    } catch (error) {

    }
}

export const getBrandByCategoryIdShow = async (category_id: string, brand_id: string) => {
    try {
        const response = await getBy(`/api/get-brand-by-category-id-show/${category_id}/${brand_id}`);
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

export const getCategoryByProductId = async (product_id: string) => {
    try {
        const response = await getBy(`/api/get-category-by-product-id/${product_id}`);
        return response?.data;
    } catch (error) {

    }
}

/**
 * Registra a categoria da marca.
 * @param data 
 * @returns 
 */
export const registerCategory = async (data: any) => {
    try {
        const response = await create('/api/material-category', data);
        return response?.data;
    } catch (error) {
        console.log("ERROR REGISTER MATERIAL CATEGORY");

    }
}

