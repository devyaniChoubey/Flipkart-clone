import { addressConstants } from "../actions/constants";


const initState = {
    address: [],
    orders: [],
    error: null,
    loading: false,
    orderFetching: false,
    orderDetails: {},
    placedOrderId: null

}

export default (state = initState, action) => {
    switch (action.type) {
        case addressConstants.GET_USER_ADDRESS_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case addressConstants.GET_USER_ADDRESS_SUCCESS:
            state = {
                ...state,
                address: action.payload.address,
                loading: false
            }
            break;
        case addressConstants.GET_USER_ADDRESS_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;
        case addressConstants.ADD_USER_ADDRESS_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;
        case addressConstants.ADD_USER_ADDRESS_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case addressConstants.ADD_USER_ADDRESS_SUCCESS:
            state = {
                ...state,
                address: action.payload.address,
                loading: false
            }
            break;
        case addressConstants.GET_USER_ORDER_REQUEST:
            state = {
                ...state,
                orderFetching: true
            }
            break;
        case addressConstants.GET_USER_ORDER_SUCCESS:
            state = {
                ...state,
                orders: action.payload.orders,
                orderFetching: false
            }
            break;
        case addressConstants.GET_USER_ORDER_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                orderFetching: false
            }
            break;
        case addressConstants.GET_USER_ORDER_DETAILS_REQUEST:
            break;
        case addressConstants.GET_USER_ORDER_DETAILS_SUCCESS:
            state = {
                ...state,
                orderDetails: action.payload.order,
            };
            break;
        case addressConstants.GET_USER_ORDER_DETAILS_FAILURE:
            break;
        case addressConstants.ADD_USER_ORDER_SUCCESS:
            state = {
                ...state,
                placedOrderId: action.payload.order._id,
            };
            break;


    }
    return state;
}

