import { combineReducers } from "redux";
import categoryReducers from "./category.reducers";
import productReducers from "./product.reducer";
import authReducers from './auth.reducers';
import cartReducers from './cart.reducer'

const rootReducer = combineReducers({
    category : categoryReducers,
    product : productReducers,
    auth:authReducers,
    cart:cartReducers
})

export default rootReducer;