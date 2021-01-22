import {PROFILE_ACTION} from '../actions/actionfile';

const initialProfile={
    email:'',
    name:'',
    imageUrl:'',
    firstName:'',
    lastName:'',
    googleId:'',
}

export default function profileReducer (state,action){
    state= state || initialProfile;
    switch(action.type){
        case PROFILE_ACTION.SET:
            return {
                email:action.payload.email,
                name:action.payload.name,
                imageUrl:action.payload.imageUrl,
                firstName:action.payload.givenName,
                lastName:action.payload.familyName,
                googleId:action.payload.googleId
            }
        case PROFILE_ACTION.RESET:
            return {...initialProfile}
        default:
            return state
    }

}
