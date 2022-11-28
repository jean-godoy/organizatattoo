import API from "../utils/API";

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


