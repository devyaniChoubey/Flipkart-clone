import { combineReducers } from "redux";
import categoryReducers from "./category.reducers";
import productReducers from "./product.reducer";
import authReducers from './auth.reducers';

const rootReducer = combineReducers({
    category : categoryReducers,
    product : productReducers,
    auth:authReducers
})

export default rootReducer;