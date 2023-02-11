import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS } from "../contants"
import axios from "axios"

export const address = (data, token) => async (dispatch) => {
    
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        const { datae } = await axios.post(`${process.env.REACT_APP_HOSTNAME}address/getPost`, data, config)
        // dispatch({ type: CART_ADD_ITEM, payload: datae })
    }
    catch (err) {
        // dispatch({ type: CART_FAIL_ITEM, payload: err.response && err.response.data.message ? err.response.data.message : err.message })
    }
}


export const useraddress = (city, state, pincode, data_address, landmark, token) => async (dispatch) => {
    try {
        dispatch({ type: USER_DETAILS_REQUEST })
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        const { datae } = await axios.post('/useraddress/getPost', { city, state, pincode, data_address, landmark }, config)
        dispatch({ type: USER_DETAILS_SUCCESS, payload: datae })
    }
    catch (err) {
        console.log(err)
        dispatch({ type: USER_DETAILS_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.message })
    }
}