import API from "../../utils/API"

export const loginInfo = async (email: string) => {
    try {
        const response = await API.get(`/api/login-info/${email}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access': 'application/json'
            }
        });
        
        return response.data;

    } catch (error) {
        console.log("ERROR::", error);

    }
}