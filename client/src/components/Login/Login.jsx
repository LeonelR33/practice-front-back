import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { user_sigin } from "../../redux/actions/actions";

const Login = () => {
    const [data, setData] = useState({})
    const dispatch = useDispatch();
    const {estado, session} = useSelector(store => store);

    const handleChange = (event) => {
        
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        user_sigin(dispatch,data);
    }

    if(session){return (<p>ya estas logueado</p>)}

    return(
    <>
    <form onSubmit={e => handleSubmit(e) }>
        <label>Usuario:
            <input name="email" type={"email"} onChange={e => handleChange(e)}></input>
        </label>
    
        <label>Contraseña:
            <input name="password" type={"password"} onChange={e => handleChange(e)}></input>
        </label>
        <input type={"submit"}></input>
    </form>
    <p>{estado}</p>
    </>
    )
}

export default Login;