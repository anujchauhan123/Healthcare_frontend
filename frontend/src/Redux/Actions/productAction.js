import { PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST, 
    PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_REQUEST,
    PRODUCT_LIST_PROTIEN_FAIL, PRODUCT_LIST_PROTIEN_SUCCESS, PRODUCT_LIST_PROTIEN_REQUEST,
    PRODUCT_LIST_GAINER_FAIL, PRODUCT_LIST_GAINER_SUCCESS, PRODUCT_LIST_GAINER_REQUEST,
    PRODUCT_LIST_ISORICH_FAIL, PRODUCT_LIST_ISORICH_SUCCESS, PRODUCT_LIST_ISORICH_REQUEST,
    PRODUCT_LIST_WHEYPROTEIN_FAIL, PRODUCT_LIST_WHEYPROTEIN_SUCCESS, PRODUCT_LIST_WHEYPROTEIN_REQUEST
 } from "../contants"
import axios from "axios";

export const productListAction = (page,category,flavour,weight,sort) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const { data } = await axios.get(`${process.env.REACT_APP_HOSTNAME}getProductList?page=${page}&category=${category}&weight=${weight}&flavour=${flavour}&sort=${sort}`,config)
        console.log("PRODUCT_LIST_SUCCESS@@@@@@@@@@",PRODUCT_LIST_SUCCESS)
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    }
    catch (err) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.message })
    }
}

export const verifyProduct = (phone,password) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        console.log("phone,password@@@@@@@@@@@@",phone,password)
        const { data } = await axios.get(`${process.env.REACT_APP_HOSTNAME}verifyProduct?phone=${phone}&password=${password}`,config)
        console.log("datadatadatadatadata@@@@@@@@@@",data)
        // dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    }
    catch (err) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.message })
    }
}


export const productListProtienAction = (page) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        dispatch({ type: PRODUCT_LIST_PROTIEN_REQUEST })
        
        const { data } = await axios.get(`${process.env.REACT_APP_HOSTNAME}getProductList?page=${page}&category=PROTIEN&weight=ALL&flavour=ALL&sort=NEWEST`,config)
        console.log("process.env.REACT_APP_HOSTNAME###########",process.env.REACT_APP_HOSTNAME)
        console.log("PRODUCT_LIST_PROTIEN_SUCCESS@@@@@@@@@@",data);
        dispatch({ type: PRODUCT_LIST_PROTIEN_SUCCESS, payload: data })
    }
    catch (err) {
        dispatch({ type: PRODUCT_LIST_PROTIEN_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.message })
    }
}

export const productListGainerAction = (page) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        dispatch({ type: PRODUCT_LIST_GAINER_REQUEST })
        const { data } = await axios.get(`${process.env.REACT_APP_HOSTNAME}getProductList?page=${page}&category=GAINER&weight=ALL&flavour=ALL&sort=NEWEST`,config)
        console.log("PRODUCT_LIST_GAINER_SUCCESS@@@@@@@@@@",PRODUCT_LIST_GAINER_SUCCESS);
        console.log("dataganier###########@@@@@@@@@@@@@",data)
        dispatch({ type: PRODUCT_LIST_GAINER_SUCCESS, payload: data })
    }
    catch (err) {
        dispatch({ type: PRODUCT_LIST_GAINER_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.message })
    }
}

export const productListIsorichAction = (page) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        console.log("PRODUCT_LIST_ISORICH_REQUESTw@@@@@@@@@@@@@@@@",PRODUCT_LIST_ISORICH_REQUEST)
        dispatch({ type: PRODUCT_LIST_ISORICH_REQUEST })
        const { data } = await axios.get(`${process.env.REACT_APP_HOSTNAME}getProductList?page=${page}&category=PROTEIN&weight=ALL&flavour=ALL&sort=NEWEST`,config)
        console.log("data##############",data)
        dispatch({ type: PRODUCT_LIST_ISORICH_SUCCESS, payload: data })
    }
    catch (err) {
        dispatch({ type: PRODUCT_LIST_ISORICH_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.message })
    }
}


export const productListWheyProteinAction = (page) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        console.log("PRODUCT_LIST_WheyProtein_REQUESTw@@@@@@@@@@@@@@@@",PRODUCT_LIST_WHEYPROTEIN_REQUEST)
        dispatch({ type: PRODUCT_LIST_WHEYPROTEIN_REQUEST })
        const { data } = await axios.get(`${process.env.REACT_APP_HOSTNAME}getProductList?page=${page}&category=ISOWHEYPROTEIN&weight=ALL&flavour=ALL&sort=NEWEST`,config)
        console.log("data##############kkkkkkkkkkkkkkk",data)
        dispatch({ type: PRODUCT_LIST_WHEYPROTEIN_SUCCESS, payload: data })
    }
    catch (err) {
        dispatch({ type: PRODUCT_LIST_WHEYPROTEIN_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.message })
    }
}





export const productDetailAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAIL_REQUEST })
        const { data } = await axios.get(`${process.env.REACT_APP_HOSTNAME}get/product/${id}`)
        console.log("PRODUCT_DETAIL_SUCCESS##############",PRODUCT_DETAIL_SUCCESS)
        dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data })
    }
    catch (err) {
        dispatch({ type: PRODUCT_DETAIL_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.message })
    }
}
