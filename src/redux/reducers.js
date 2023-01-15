import {set_mobileno,set_password} from './actions';

const initialState = {
    MobileNo:"",
    Password:"",
}

function userReducer(state=initialState,action){
   switch(action.type){
    case set_mobileno:
        return {...state,MobileNo:action.payload};
    case set_password:
        return {...state,Password:action.payload};
    default:
        return state;
   }
}

export default userReducer;