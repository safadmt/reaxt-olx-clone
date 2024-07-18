import { stat } from "fs";

const initialState = {
    isAuthbarOpen : "",
    isSidebarOpen : "",
    session: "",
    products : [],
    filteredproducts: []
}

function reducer (state, action)  {
    switch (action.type) {
        case "auth_bar_open":
            return {
                ...state,
                isAuthbarOpen : action.payload
            }
            break;
        case "side_bar_open" : 
            return {
                ...state,
                isSidebarOpen : action.payload
            }
        case "set_session" :
            return {
                ...state,
                session : action.payload
            }
        case "set_products" : 
            return {
                ...state,
                products: action.payload,
                filteredproducts : action.payload
            }
        case "filer_products": 
            return {
                ...state,
                filteredproducts : action.payload
            }
        default:
            return state;
            break;
    }
}

export {initialState, reducer}