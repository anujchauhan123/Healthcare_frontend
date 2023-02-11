import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_LOGOUT, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../contants"
import axios from "axios"
import { toast } from "react-toastify"
const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const user_login = (phone, password) => async (dispatch) => {
    try {
        if (phone.length === 0 || password.length === 0) {
            toast.error('Kindly fill all the fields.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            dispatch({ type: USER_LOGIN_REQUEST })
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const { data } = await axios.post('https://backend.proteinfarm.in/user/login', { phone, password }, config)
            if (data.status == 400) {
                toast.error('Invalid Credentials', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else {
                localStorage.setItem("userInfo", JSON.stringify(data))
                dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
                window.location.reload();
            }
        }
    }
    catch (err) {
        dispatch({ type: USER_LOGIN_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.message })
    }
}

export const user_logout = () => async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGIN_LOGOUT });
    window.location.reload();
    window.location.href("/login")
}

export const user_register = (userName, email, password, phone) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST })
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const { data } = await axios.post('https://backend.proteinfarm.in/user/register', { userName, email, password, phone }, config)
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
        localStorage.setItem("userInfo", JSON.stringify(data))
    }
    catch (err) {
        dispatch({ type: USER_REGISTER_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.message })
    }
}


export const user_details = (token) => async (dispatch) => {

    try {
        dispatch({ type: USER_DETAILS_REQUEST })
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `BEARER ${token}`
            }
        }
        const { data } = await axios.get('https://backend.proteinfarm.in/user/details', config)
        if (data) {
            dispatch({ type: USER_DETAILS_SUCCESS, payload: data })

        } else {
            dispatch(user_logout());
        }
    }
    catch (err) {
        dispatch(user_logout());
        dispatch({ type: USER_DETAILS_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.message })
    }
}