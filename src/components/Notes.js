import React, {useState, useContext} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {AlertContext} from "../Context/alert/alertContext";

export const Notes = ({notes, onRemove}) => {
    const alert = useContext(AlertContext)

    const remove = (id) => {
        onRemove(id).then(() => {
            alert.show('Note was deleted', 'warning')
        })
    }

    return (
        <TransitionGroup component="ul" className="list-group">
            {notes.map(note => (
                <CSSTransition
                    key={note.id}
                    classNames={'note'}
                    timeout={800}
                >
                    <li className='list-group-item d-flex justify-content-between align-items-center' key={note.id}>
                        <div>
                            <strong className='me-3'>{note.title}</strong>

                            <small>{note.date}</small>
                        </div>

                        <button
                            type="button"
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => remove(note.id)}
                        >&times;</button>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}