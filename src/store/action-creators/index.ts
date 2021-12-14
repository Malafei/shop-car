import * as AuthAction from "../../components/auth/Login/actions";
import * as RegisterUser from "../../components/auth/Register/actions"

const actions = {
    ...AuthAction,
    ...RegisterUser
}

export default actions