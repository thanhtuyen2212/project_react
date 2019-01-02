export const AUTHENTICATION_REQUEST = 'AUTHENTICATION_REQUEST';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE';
export const SIGN_OUT = 'SIGN_OUT';

export const UPDATE_USER = 'UPDATEUSER';

export const auth_req = () => ({
    type: AUTHENTICATION_REQUEST
});

export const auth_succ = (data) => ({
    type: AUTHENTICATION_SUCCESS,
    data
});

export const auth_fail = () => ({
    type: AUTHENTICATION_FAILURE
});

export const signOut = () => ({
    type: SIGN_OUT
});

export const updateUser = (data) => {
    type: UPDATE_USER,
        data
}

