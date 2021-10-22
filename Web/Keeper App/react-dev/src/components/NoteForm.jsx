import classes from './NoteForm.module.css';
import React, { useState as state, useEffect as mount, autosize } from 'react'
import TextareaAutosize from 'react-textarea-autosize';

export default function NoteForm(props) {

    let [isMax, setMax] = state(false);

    function maximise() {
        document.querySelector('input').focus();
        setMax(true);
    }

    function minimise() {
        setMax(false);
    }

    

    return (
        <div style={{textAlign: 'center'}}>
            {!isMax ? <Minimized maximise={maximise}/> : <Maximized minimise={minimise} add={props.add} cancel={minimise}/>}
        </div>
    )
}

function Minimized(props) {
    return (
        <div className={classes.min}>
            <input placeholder="Take a note..." onFocus={props.maximise}/> 
        </div>
    )
}

function Maximized(props) {
    let [note, set] = state({title: '', note: ''});

    function handleChange(event) {
        if (event.target.name == 'title') {
            let value = event.target.value;
            set(prev => {
                return {
                    title: value,
                    note: prev.note
                }
            })
        } else {
            let value = event.target.value;
            set(prev => {
                return {
                    title: prev.title,
                    note: value
                }
            })
        }
    }

    function add() {
        document.querySelector('input').value = '';
        document.querySelector('textarea').value = '';
        if (note.title.trim() == '' || note.note.trim() == '') {
            return;
        }
        props.add(note);
    }

    return (
        <div className={classes.max}>
            <input name="title" placeholder="Title" autofocus="true" onChange={handleChange} style={{marginBottom: '5px'}} />
            {/* <hr style={{margin: '10px 5%'}}/> */}
            <TextareaAutosize name="note" name="" placeholder="Take a note..." onChange={handleChange} />
            <button onClick={add}><i class="fas fa-plus"></i></button>
            <button className={classes.minus} onClick={props.minimise} style={{position: 'absolute', top: '0', right: '0', borderRadius: '0 5px 0 0', margin: '0', padding: '5px 15px'}}><i class="fas fa-minus"></i></button>
        </div>
    )
}