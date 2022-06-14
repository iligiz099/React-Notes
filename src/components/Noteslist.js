import Note from './Note'
import Addnote from './Addnote';

const Noteslist = ({ notes, handleAddnote, handleDeleteNote }) => {
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} />
            ))}
            <Addnote handleAddnote={handleAddnote} />
        </div>
    );
};

export default Noteslist;