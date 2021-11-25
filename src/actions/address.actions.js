
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
                console.log(res);
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
                console.log(res);
                dispatch({
                    type: cartConstants.RESET_CART
                })

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
                console.log(res);
                const {orders} = res.data;
                dispatch({
                    type:addressConstants.GET_USER_ORDER_SUCCESS,
                    payload:{orders}
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

