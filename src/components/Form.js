import React, {useState, useContext} from 'react'
import {AlertContext} from "../Context/alert/alertContext";
import {FirebaseContext} from "../Context/firebase/firebaseContext";

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const subbitHandler = event => {
        event.preventDefault()

        if (value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.show('Note was created', 'success')
            }).catch(() => {
                alert.show('Something was wrong', 'danger')
            })
            alert.show('Note was created', 'success')
            setValue('')
        } else {
            alert.show('Input note', 'warning')
        }

    }

    return (
        <form onSubmit={subbitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Input note`s name"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}