
import axios from "../helpers/axios";
import { addressConstants, cartConstants } from "./constants";

export const getAddress = () => {
    return async dispatch => {
        try {
            const res = await axios.post('/user/getaddress')
            dispatch({ type: addressConstants.GET_USER_ADDRESS_REQUEST })
            if (res.status === 200) {
                const { address } = res.data.userAddress;
                dispatch({
                    type: addressConstants.GET_USER_ADDRESS_SUCCESS,
                    payload: {
                        address
                    }
                })
            } else {
                const { error } = res.data;
                dispatch({
                    type: addressConstants.GET_USER_ADDRESS_FAILURE,
                    payload: {
                        error
                    }
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
}


export const addAddress = (payload) => {
    return async dispatch => {
        try {
            const res = await axios.post('/user/address/create', { payload });
            dispatch({ type: addressConstants.ADD_USER_ADDRESS_REQUEST })
            if (res.status === 201) {
    
                const { address } = res.data.address;
                dispatch({
                    type: addressConstants.ADD_USER_ADDRESS_SUCCESS,
                    payload: {
                        address
                    }
                })
            } else {
                const { error } = res.data;
                dispatch({
                    type: addressConstants.ADD_USER_ADDRESS_FAILURE,
                    payload: {
                        error
                    }
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const addOrder = (payload) => {
    return async dispatch => {
        try {
            const res = await axios.post('/addOrder', payload);
            dispatch({ type: addressConstants.ADD_USER_ORDER_REQUEST })
            if (res.status === 201) {
            
                dispatch({
                    type: cartConstants.RESET_CART
                })
               
                const { order } = res.data;
                dispatch({
                    type: addressConstants.ADD_USER_ORDER_SUCCESS,
                    payload: { order }
                });

            } else {
                const { error } = res.data;
                dispatch({
                    type: addressConstants.ADD_USER_ORDER_FAILURE,
                    payload: { error }
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
}


export const getOrders = () => {
    return async dispatch => {
        try {
            const res = await axios.get('/getOrders');
            dispatch({ type: addressConstants.GET_USER_ORDER_REQUEST })
            if (res.status === 200) {
             
                const { orders } = res.data;
                dispatch({
                    type: addressConstants.GET_USER_ORDER_SUCCESS,
                    payload: { orders }
                })

            } else {
                const { error } = res.data;
                dispatch({
                    type: addressConstants.GET_USER_ORDER_FAILURE,
                    payload: { error }
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
}

// single order with complete info and delivery location
export const getOrder = (payload) => {
    return async (dispatch) => {
        try {
            const res = await axios.post('/getOrder', payload);
            dispatch({ type: addressConstants.GET_USER_ORDER_DETAILS_REQUEST })
            if (res.status === 200) {
                
                dispatch({
                    type: addressConstants.GET_USER_ORDER_DETAILS_SUCCESS,
                    payload: {
                        order: res.data.order
                    }
                })

            } else {
                const { error } = res.data;
                dispatch({
                    type: addressConstants.GET_USER_ORDER_DETAILS_FAILURE,
                    payload: { error },
                });
            }

        } catch (error) {
            console.log(error);
        }
    }
}

