import React, {useContext} from "react";
import {AlertContext} from "../Context/alert/alertContext";
import {CSSTransition} from 'react-transition-group';

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    return (
        <CSSTransition
            in={alert.visible}
            timeout={{
                enter: 500,
                exit: 350
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                <strong>Warning!!! </strong>
                {alert.text}
                <button type="button" className="btn-close" aria-label="Close" onClick={hide}></button>
            </div>
        </CSSTransition>
    )
}