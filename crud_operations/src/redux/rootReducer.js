import { combineReducers } from "redux";
import usersReducer from "./reducers"
import {cartData} from "./productReducer"

const rootReducer = combineReducers({data:usersReducer,cart:cartData})
export default rootReducer
