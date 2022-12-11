import { mask, unMask } from 'remask';

export const maskPhone = value => {
    return mask(unMask(value), ['(99) 9999-9999', '(99) 9 9999-9999']);
}

export const maskCpf = value => {
    return mask(unMask(value), ['999.999.999-99']);
};

export const maskDate = value => {
    return mask(unMask(value), ['99/99/9999']);
};

export const maskCEP = value => {
    return mask(unMask(value), ['99.999-999']);
}

export const clearMask = value => {
    return unMask(value);
}

export const maskPrice = value => {
    return mask(unMask(value),
        ['9,99', '99,99', '999,99', '9.999,99', '99.999,99', '999.999,99', '9.999.999,99', '99.999.999,99']
    );
}

export const maskPriceFormatAmerican = value => {
    return mask(unMask(value),
        ['9.99', '99.99', '999.99', '9999.99', '99999.99', '999999.99', '9999999.99', '99999999.99']
    );
}

