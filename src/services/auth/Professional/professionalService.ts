import { create } from '../../../hooks/useAPI';

export const getAll = async (data: []) => {
    const response =  await create('/api/professional', data);
    return response;
}

export const getBy = async (data: []) => {
    const response =  await create('/api/professional', data);
    return response;
}

export const register = async (data: {}) => {
    const response:any =  await create('/api/professional', data);
    return response.data;
}

export const edit = async (data: []) => {
    const response =  await create('/api/professional', data);
    return response;
}