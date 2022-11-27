import { ICostumer } from "../@types";
import API from "../utils/API";

export const create = async (costumer: ICostumer) => {
    const res = await API.post('/costumer', {costumer});
    return res;
}