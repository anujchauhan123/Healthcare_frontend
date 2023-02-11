import axios from "axios"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CART_ADD_ITEM, CART_FAIL_ITEM } from "../contants"



export const addToCart = (product_id, quantity, token) => async (dispatch) => {
    if (!token) {
        const navigate = useNavigate();
        toast.error('Kindly Login/Register for adding the Cart', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
      navigate("/login")
    } else {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }
            const { data } = await axios.post(`${process.env.REACT_APP_HOSTNAME}addToCart`, { product_id, quantity }, config)
            dispatch({ type: CART_ADD_ITEM, payload: data })
        }
        catch (err) {
            dispatch({ type: CART_FAIL_ITEM, payload: err.response && err.response.data.message ? err.response.data.message : err.message })
        }
    }
}

export const removeToCart = () => async (dispatch) => {

}

export const getCart = (token) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        const { data } = await axios.get(`${process.env.REACT_APP_HOSTNAME}getCart`, config)
        dispatch({ type: CART_ADD_ITEM, payload: data })
    }
    catch (err) {
        dispatch({ type: CART_FAIL_ITEM, payload: err.response && err.response.data.message ? err.response.data.message : err.message })
    }
}