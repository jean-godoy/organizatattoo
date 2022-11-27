import API from "../../utils/API"

export const userStore = async (data: any) => {
    
    try {
        const response = await API.post('/api/user', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Access': 'application/json'
            }
        });

        return response.data;

    } catch (error) {
        console.log("ERROR:: ", error);
        
    }

}

export const getUsers = async () => {
    
    try {
        const response = await API.get('/api/user', {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Access': 'application/json'
            }
        });

        return response.data;

    } catch (error) {
        console.log("ERROR:: ", error);
        
    }

}

export const userEdit =  async (user: any) => {
  
    try {
        const response = await API.patch('/api/user', user,{
            headers: {
                'Content-Type': 'application/json',
                'Access': 'application/json'
            }
        });

        return response.data;

    } catch (error) {
        console.log("ERROR:: ", error);
        
    }

}