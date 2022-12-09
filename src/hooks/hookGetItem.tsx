import { getBy } from "./useAPI";

type TProps = {
    url: string;
}

export const hookGetItem = async (url: string) => {

    try {
        const response = await getBy(url);
        return response?.data;
    } catch (error) {
        console.log("ERROR BY USE GET ITEM");
        return false;
        
    }


}