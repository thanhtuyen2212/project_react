import { AUTHENTICATION_REQUEST, AUTHENTICATION_SUCCESS, AUTHENTICATION_FAILURE,SIGN_OUT, UPDATE_USER } from './AuthenticationAction';

const initialState = {
    isAuthenticating: false,
    isAuthenticated: false,
    userInfo: null,
    accessToken: null,
    idUser:null
}

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATION_SUCCESS:
        {
            return { ...state,
                isAuthenticating: false,
                isAuthenticated: true,
                userInfo: {
                    email: action.data !== null ? action.data.email : null,
                },
                accessToken: action.data !== null ? action.data.token : null,
            };
        }
        case AUTHENTICATION_REQUEST:
        {
            return { ...state,
                isAuthenticating: true,
                isAuthenticated: false,
                accessToken: null,

            };
        }
        case AUTHENTICATION_FAILURE:
        {
            return { ...state,
                isAuthenticated: false,
                isAuthenticating: false,
                userInfo: null,
                accessToken: null,

            };
        }
        case SIGN_OUT:
        {
            return { ...state
            };
        }
        case UPDATE_USER:
        {
            return { ...state,
                userInfo: action.data
            }
        }
        default:
            return state;
    }
}

export default authenticationReducer;