import React, {useReducer} from "react";
import {AlertContext} from "./alertContext";
import {alertReducer} from "./alertReducer";
import {HIDE_ALERT, SHOW_ALERT} from "../types";

export const AlertState = ({children}) => {
    const [state, dispath] = useReducer(alertReducer, {visible: false})

    const show = (text, type = 'warning') => {
        dispath({
            type: SHOW_ALERT,
            payload: {text, type}
        })
    }

    const hide = () => dispath({type: HIDE_ALERT})


    return (
        <AlertContext.Provider value={{show, hide, alert: state}}>
            {children}
        </AlertContext.Provider>
    )
}