import {AUTH_ACTION} from '../actions/actionfile';

const initialState={
    token:null,
    isAuth: false
}

export default function authReducer (state,action){
    state= state || initialState;
    switch(action.type){
        case AUTH_ACTION.LOGIN:
            return {token: action.payload, isAuth:true}
        case AUTH_ACTION.LOGOUT:
            return {token: null, isAuth:false}
        default:
            return false
    }

}
