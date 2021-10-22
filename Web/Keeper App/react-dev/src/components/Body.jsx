import classes from './Body.module.css';

export default function Body(props) {
    return (
        <div>
            {props.notes.map((note, i) => {
                return <Note title={note.title} note={note.note} key={i} del={props.del} id={i} />;
            })}
        </div>
    )
}

function Note(props) {

    function del() {
        props.del({title: props.title, note: props.note, id: props.id})
    }

    return (
        <div className={classes.note}>
            <h1>{props.title}</h1>
            <p>{props.note}</p>
            <button onClick={del}><i class="fas fa-check"></i></button>
        </div>
    )
}