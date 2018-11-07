import {SAVEUSER} from "./action";

const init={
    user:'',
}
const appReducer =  (preState=init,action)=>{
    switch (action.type) {
        case SAVEUSER:{
            return{
                ...preState,
                user:action.data
            };

        }
        default: return preState;
    }
}
export default appReducer;