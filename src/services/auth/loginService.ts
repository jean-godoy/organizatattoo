import API from "../../utils/API"

const loginService = async (email: string, password: string) => {

    try {
        const response = await API.post('/api/login', {email, password}, {
            headers: {
                'Content-Type': 'application/json',
                'Access': 'application/json'
            },
        });

        return response.data;
    } catch (error) {
        console.log("LOGIN ERROR", error);

    }
}

export default loginService;