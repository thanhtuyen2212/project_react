import {SAVEUSER} from "./action";
import {CART} from "./action";
import {DISCOUNTCART} from "./action";

const init={
    user:'',
    cart: 0,
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
        default: 
        return preState;
    }
}
export default appReducer;