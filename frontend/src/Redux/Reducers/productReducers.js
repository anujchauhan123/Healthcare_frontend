import { PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_LIST_FAIL, 
    PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_PROTIEN_REQUEST, PRODUCT_LIST_PROTIEN_SUCCESS,
     PRODUCT_LIST_PROTIEN_FAIL, PRODUCT_LIST_GAINER_REQUEST, PRODUCT_LIST_GAINER_SUCCESS,PRODUCT_LIST_GAINER_FAIL,
     PRODUCT_LIST_ISORICH_REQUEST, PRODUCT_LIST_ISORICH_SUCCESS, PRODUCT_LIST_ISORICH_FAIL ,
 PRODUCT_LIST_WHEYPROTEIN_FAIL, PRODUCT_LIST_WHEYPROTEIN_SUCCESS, PRODUCT_LIST_WHEYPROTEIN_REQUEST} from "../contants";

export const productListReducers = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_LIST_FAIL:
            return { loading: false, products: action.payload }
        default:
            return state
    }
}

export const productListProtienReducers = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_PROTIEN_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_LIST_PROTIEN_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_LIST_PROTIEN_FAIL:
            return { loading: false, products: action.payload }
        default:
            return state
    }
}
export const productListGainerReducers = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_GAINER_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_LIST_GAINER_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_LIST_GAINER_FAIL:
            return { loading: false, products: action.payload }
        default:
            return state
    }
}
export const productListIsoRichReducers = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_ISORICH_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_LIST_ISORICH_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_LIST_ISORICH_FAIL:
            return { loading: false, products: action.payload }
        default:
            return state
    }
}

export const productListWheyProteinReducers = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_WHEYPROTEIN_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_LIST_WHEYPROTEIN_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_LIST_WHEYPROTEIN_FAIL:
            return { loading: false, products: action.payload }
        default:
            return state
    }
}


export const productDetailReducers = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_DETAIL_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_DETAIL_FAIL:
            return { loading: false, products: action.payload }
        default:
            return state
    }
}



