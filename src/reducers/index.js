import { combineReducers } from "redux";
import categoryReducers from "./category.reducers";
import productReducers from "./product.reducer";

const rootReducer = combineReducers({
    category : categoryReducers,
    product : productReducers
})

export default rootReducer;