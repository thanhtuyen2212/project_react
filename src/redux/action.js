// export const SAVEUSER = 'SAVEUSER';
//
// export const CART = 'CART';
// export const DISCOUNTCART = 'DISCOUNTCART';

export const SAVEBASKET = 'SAVEBASKET';
export const UPDATEBASKET = 'UPDATEBASKET';

export const savebasket = (item) => ({
    type: SAVEBASKET,
    item
})

export const updateBasket = (method, item) => ({
    type: UPDATEBASKET,
    method,
    item
})


