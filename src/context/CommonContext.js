import { createContext , useReducer, useContext} from "react";
import { initialState, reducer } from "../reducers/commonReducer";


const CommonContext = createContext();

function CommonStateProvider ({children}) {
    const [state,dispatch] = useReducer(reducer,initialState)

    return (
        <CommonContext.Provider value={{state,dispatch}}>
            {children}
        </CommonContext.Provider>
    )
}

const useCommonContext = ()=> useContext(CommonContext);
export {useCommonContext, CommonStateProvider,CommonContext}
