export const set_mobileno = 'set_mobileno';
export const set_password = 'set_password';


export const setMobileNo = MobileNo => dispatch=>{
     dispatch({
        type:set_mobileno,
        payload:MobileNo
     })
};

export const setPassword = Password => dispatch=>{
     dispatch({
        type:set_password,
        payload:Password
     })
}

