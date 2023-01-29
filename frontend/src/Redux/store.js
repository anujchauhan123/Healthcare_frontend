import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducers } from "./Reducers/cartReducers";
import { productDetailReducers, productListGainerReducers, productListIsoRichReducers, productListProtienReducers, productListReducers } from "./Reducers/productReducers";
import { userDetailsReducers, userLoginReducers, userRegisterReducers } from "./Reducers/userReducers";

const reducer = combineReducers({
    productList: productListReducers,
    productDetail: productDetailReducers,
    userLogin: userLoginReducers,
    userRegister: userRegisterReducers,
    userDetails:userDetailsReducers,
    cartItems:cartReducers,
    protienList:productListProtienReducers,
    gainerList:productListGainerReducers,
    isoRichList:productListIsoRichReducers,
})

const userInfoFromLocalStorage = localStorage.getItem("userInfo") ?
    JSON.parse(localStorage.getItem("userInfo")) : [];

const initialState = {
    userLogin:{userInfo:userInfoFromLocalStorage}
};

const middleware = [thunk];



const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;