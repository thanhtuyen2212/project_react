import {SAVEUSER} from "./action";
import {CART} from "./action";
import {DISCOUNTCART} from "./action";
import {SAVEBASKET} from "./action";
import {UPDATEBASKET} from "./action";


const init={
    user:'',
    // cart: 0,
    cart: [],
    idres: '',
    total: 0
}
const appReducer =  (preState=init,action)=>{
    switch (action.type) {
        case SAVEUSER:{
            return{ ...preState, user: action.data };
        }
        case CART: {
            return {...preState, cart: preState.cart + action.data }
        }
        case DISCOUNTCART: {
            if((preState.cart - action.data) >= 0)
                return {...preState, cart: preState.cart - action.data }
            return preState;
        }
        case SAVEBASKET:
        {
            let isfound = false;
            let total = preState.total;
            let cart = preState.cart.map((item) => {
                if (item.id === action.item.id) {
                    item.qty++;
                    total += item.price;
                    isfound = true;
                }
                return item;
            })
            if (!isfound) {
                cart = [
                    ...cart,
                    {
                        id: action.item.id,
                        name: action.item.name,
                        price: action.item.price,
                        qty: 1
                    }
                ];
                total += action.item.price;
            }
            return {
                ...preState,
                cart,
                total
            };
        }
        case UPDATEBASKET:
        {
            return {
                ...preState,
                cart: preState.cart.map((item) => {
                    if (item.id === action.item.id) {
                        if (action.method === "+") {
                            item.qty ++;
                            preState.total += item.price;
                        } else if (action.method === "-" && item.qty > 1) {
                            item.qty --;
                            preState.total -= item.price;
                        }
                    return item;
                }
                })

            };
        }
        default:
            return preState;
    }
}
export default appReducer;