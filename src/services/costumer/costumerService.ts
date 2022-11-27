import { ICostumer } from "../../@types";
import { TCostumer } from "../../components/ModalCostumer/ModalEditCostumer";
import API from "../../utils/API"



export const createCostumer = async (costumer: any) => {

    try {
        const response = await API.post('/api/costumer', costumer, {
            headers: {
                'Content-Type': 'application/json',
                'Access': 'application/json'
            }
        });
       
        return response.data;

    } catch (error) {
        console.log("Error: ",error);
        
    }
}

export const getCostumers = async () => {
    try {
        const response = await API.get('/api/costumer', {
            headers: {
                'Content-Type': 'application/json',
                'Access': 'application/json'
            }
        });
       
        return response.data;

    } catch (error) {
        console.log("Error: ",error);
        
    }
}


export const editCostumers = async (costumer: ICostumer) => {
    try {
        const response = await API.patch('/api/costumer', costumer, {
            headers: {
                'Content-Type': 'application/json',
                'Access': 'application/json'
            }
        });
       
        return response.data;

    } catch (error) {
        console.log("Error: ",error);
        
    }
}
