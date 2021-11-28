import { productConstants } from "../actions/constants"

const initState = {
    product : [],
    products : [],
    productsByPrice:{},
    priceRange:{},
    categoryName : null,
    pageRequest: false,
    page: {},
    error: null,
    productDetails:{},
    loading:false
}

export default (state = initState, action) =>{
    switch(action.type){
        case productConstants.GET_PRODUCTS_BY_SLUG:
            state= {
                ...state,
                product :action.payload.products,
                productsByPrice:{
                    ...action.payload.productsByPrice
                },
                categoryName:action.payload.categoryName,
                priceRange:action.payload.priceRange
            }
            break;
        case productConstants.GET_PRODUCT_PAGE_REQUEST:
            state={
                ...state,
                pageRequest: true
            }
            break;
        case productConstants.GET_PRODUCT_PAGE_SUCCESS:
            state={
                ...state,
                page : action.payload.page,
                pageRequest:false
            }
            break;
        case productConstants.GET_PRODUCT_PAGE_FAILURE:
            state={
                ...state,
                pageRequest:false,
                error: action.payload.error
            }
            break;
        case productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST:
            state={
                ...state,
                loading: true
            }
            break;
        case productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
            state={
                ...state,
                loading: false,
                productDetails: action.payload.productDetails
            }
            break;
        case productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE:
            state={
                ...state,
                loading: false,
                error:action.payload.error
            }
            break;
        case productConstants.GET_ALL_PRODUCT:
            state= {
                ...state,
                products :action.payload.products
            }
            break;
    }
    return state;
}