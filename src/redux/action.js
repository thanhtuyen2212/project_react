// export const SAVEUSER = 'SAVEUSER';
//
// export const CART = 'CART';
// export const DISCOUNTCART = 'DISCOUNTCART';

export const SAVEBASKET = 'SAVEBASKET';
export const UPDATEBASKET = 'UPDATEBASKET';



// export const saveuser = (user) =>{
//     return{
//         type:SAVEUSER,
//         data:user
//     };
// }
// export const addcart = (number) =>{
//     return{
//         type:CART,
//         data:number
//     };
// }
//
// export const discountcart = (number) =>{
//     return{
//         type:DISCOUNTCART,
//         data:number
//     };
// }

export const savebasket = (item) => ({
    type: SAVEBASKET,
    item
})

export const updateBasket = (method, item) => ({
    type: UPDATEBASKET,
    method,
    item
})


