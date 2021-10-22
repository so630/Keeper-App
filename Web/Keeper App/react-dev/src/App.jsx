import Header from './components/Header';
import NoteForm from './components/NoteForm';
import React, { useState as state, useEffect as effect } from 'react'
import Body from './components/Body';


export default function App() {

    let [notes, setNotes] = state([]);

    effect(() => {
        setNotes(JSON.parse(localStorage.getItem('notes')))
    }, []) 

    function addNote(note) {
        setNotes(prev => {
            localStorage.setItem('notes', JSON.stringify([...prev, note]));
            return [...prev, note];
        })
    }

    function delNote(notec) {
        setNotes(prev => {
            localStorage.setItem('notes', JSON.stringify([...prev.filter((note, i) => !(i === notec.id))]));
            return [...prev.filter((note, i) => !(i === notec.id))];
        })
    }

    return (
        <>
            <Header />
            <NoteForm add={addNote} />
            <Body notes={notes} del={delNote} />
        </>

    )
}