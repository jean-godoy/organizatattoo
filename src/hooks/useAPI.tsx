import API from "../utils/API";

/**
 * Hook for get all data in DB.
 * @param url 
 * @returns 
 */
export const all = async (url: string) => {
    try {
        const response = await API.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Access': 'application/json'
            }
        });

        return response;
    } catch (error) {
        console.log("ERROR", error);
    }
}

/**
 * Hook for get all data by ID in DB.
 * @param url 
 * @returns 
 */
export const getBy = async (url: string) => {
    try {
        const response = await API.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Access': 'application/json'
            }
        });

        return response;
    } catch (error) {
        console.log("ERROR", error);
    }
}

/**
 * Hook for create in DB.
 * @param url 
 * @param data 
 * @returns 
 */
export const create = async (url: string, data: any) => {
    try {
        const response = await API.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'Access': 'application/json'
            }
        });

        return response;
    } catch (error) {
        console.log("ERROR", error);

    }
}





