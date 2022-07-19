import { USER_SIGNIN } from "./actions_types";
import axios from "axios";

export const user_sigin = (dispatch,data) => {
    axios.post("/user/signin", data)
    .then(response => {dispatch({
                type: USER_SIGNIN,
                payload: response.data.msg,
            })
            localStorage.setItem("user_session", JSON.stringify({
                token: response.data.token, 
                name: response.data.name
            }));
        }
        ).catch(err=> dispatch({
            type: USER_SIGNIN,
            payload: err.response.data.error
        }))
}