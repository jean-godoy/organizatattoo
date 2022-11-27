import API from "../../utils/API"

const loginService = async (email: string, password: string) => {


    // API.post('/api/login', { email, password }, {
    //     headers: {
    //         'Content-Type': 'multipart/form-data',
    //         'Access': 'application/json'
    //     },
    // }).then((response) => {
    //     return response.data;
    // }).catch(error => {
    //     console.log("LOGIN ERROR", error);

    // });

    try {
        const response = await API.post('/api/login', {email, password}, {
            headers: {
                'Content-Type': 'application/json',
                'Access': 'application/json'
            },
        });
        console.log("RESPONSE::", response);
        
        return response.data;
    } catch (error) {
        console.log("LOGIN ERROR", error);

    }
}

export default loginService;