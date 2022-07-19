import { USER_SIGNIN } from "../actions/actions_types";

const initialState = {
    session: "",
    estado: "",
}

const ls = localStorage.getItem("user_session");

if(ls && JSON.parse(ls)?.token){
    initialState.session = JSON.parse(ls).token;
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        case USER_SIGNIN:
            return {
                ...state,
                estado: action.payload
        };
        default: 
            return state;
    }
}

export default rootReducer;