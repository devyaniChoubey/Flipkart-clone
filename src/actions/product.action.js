import axios from "axios"
import axiosInstance from "../helpers/axios"
import { productConstants } from "./constants";

export const getProductsByslug = (slug) => {
    return async dispatch => {
        const res = await axiosInstance.get(`/products/${slug}`);
        if (res.status === 200) {
            dispatch({
                type: productConstants.GET_PRODUCTS_BY_SLUG,
                payload: res.data
            })
        } else {

        }
        console.log(res);
    }
}

export const getProductsBycategory = (categoryId) => {
    return async dispatch => {
        const res = await axiosInstance.get(`/product1s/${categoryId}`);
        if (res.status === 200) {
            dispatch({
                type: productConstants.GET_PRODUCTS_BY_SLUG,
                payload: res.data
            })
        } else {

        }
        console.log(res);
    }
}


export const getAllProducts = () => {
    return async dispatch => {
        const res = await axiosInstance.get(`/productss/all`);
        if (res.status === 200) {
            dispatch({
                type: productConstants.GET_ALL_PRODUCT,
                payload: {products : res.data.products}
            })
        } else {

        }
        console.log(res);
    }
}




export const getProductPage = (payload) => {
    return async dispatch => {
        try {
            const { cid, type } = payload.params;
            const res = await axiosInstance.get(`/page/${cid}/${type}`);
            dispatch({ type: productConstants.GET_PRODUCT_PAGE_REQUEST })
            if (res.status === 200) {
                const { page } = res.data;
                dispatch({
                    type: productConstants.GET_PRODUCT_PAGE_SUCCESS,
                    payload: { page }
                })
            } else {
                const { error } = res.data;
                dispatch({
                    type: productConstants.GET_PRODUCT_PAGE_FAILURE,
                    payload: { error }
                })
            }

        } catch (error) {
            console.log(error)
        }

    }
}



export const getProductDetailsById =(payload) =>{
    return async dispatch =>{
        dispatch({type:productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST})
        const {productId} = payload.params;
        console.log(productId)
        let res;
        try{
           
            res  =await axiosInstance.get(`/product/${productId}`)
           dispatch({
            type: productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
            payload : {
                productDetails : res.data.product
            }
        })
        }catch(error){
            console.log(error);
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
                payload : {
                    error : res.data.error
                }
            })
        }
    }
}