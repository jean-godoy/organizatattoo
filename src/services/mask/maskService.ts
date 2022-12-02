import { maskCEP, maskCpf, maskDate, maskPhone } from "../../utils/mask/mask";

export const handleCpf = (data: string | number) => {
    return maskCpf(data);
}

export const handlePhone = (data: string | number) => {
    return maskPhone(data);
}

export const handleDate = (data: string | number) => {
    return maskDate(data);
}

export const handleCep = (data: string | number) => {
    return maskCEP(data);
}

export const handleFormatDateToOutput = (date: string) => {
    const dateArray = date.split("-");
    return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
    
}