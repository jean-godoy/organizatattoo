import { maskCEP, maskCpf, maskDate, maskPhone, maskPrice, maskPriceFormatAmerican } from "../../utils/mask/mask";

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

export const handlePrice = (data: string) => {
    return maskPrice(data);
}

export const handlePriceAmerican = (data: string) => {
    return maskPriceFormatAmerican(data);
}

export const handleDateFormatAmerican = (data:string) => {
    const dateArray = data.split("/");
    return `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
}