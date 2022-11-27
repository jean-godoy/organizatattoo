import { mask, unMask } from 'remask';

export const maskPhone = value => {
    return mask(unMask(value), ['(99) 9999-9999', '(99) 9 9999-9999']);
}

export const maskCpf = value => {
    return mask(unMask(value), ['999.999.999-99']);
};

export  const maskDate = value => {
    return mask(unMask(value), ['99/99/9999']);
};

export const maskCEP = value => {
    return mask(unMask(value), ['99.999-999']);
}

export const clearMask = value => {
    return unMask(value);
}


