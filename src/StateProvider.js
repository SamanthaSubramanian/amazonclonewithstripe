import React, {createContext, useContext, useReducer} from "react"

//prepares data layer
export const StateContext = createContext();

//wrap our app and provide data layer to every component in the app
export const StateProvider =({reducer,initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//pulls info from the data layer
export const useStateValue=()=>useContext(StateContext);