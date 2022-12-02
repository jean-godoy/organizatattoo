import { all, create, getBy } from '../../hooks/useAPI';

export const getAll = async () => {
    try {
        const response: any = await all('/api/professional');
        return response.data;
    } catch (error) {
        console.log("ERROR PROFESSIONAL", error);
    }
}

// export const getBy = async (data: []) => {
//     const response = await create('/api/professional', data);
//     return response;
// }

export const register = async (data: {}) => {

    try {
        const response: any = await create('/api/professional', data);
        return response.data;
    } catch (error) {
        console.log("ERROR PROFESSIONAL", error);
    }

}

export const edit = async (data: []) => {
    const response = await create('/api/professional', data);
    return response;
}

export const getProfessionalFullData = async (id: string) => {
    try {
        const response: any = await getBy(`/api/professional-full-data/${id}`);
        return response.data;
    } catch (error) {
        console.log("ERROR PROFESSIONAL FUUL DATA", error);
    }
}