import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Noteslist from "./components/Noteslist";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
        id: nanoid(),
        text: 'This is my first note!',
        date: '15/06/2022',
    },
    {
      id: nanoid(),
      text: 'This is my second note!',
      date: '20/06/2022',
    },
    {
      id: nanoid(),
      text: 'This is my third note!',
      date: '24/06/2022',
    },
  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  const addnote = (text) => {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString(),
      };
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((node)=> notes.id !== id);
    setNotes(newNotes);
  }

  return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<Noteslist
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddnote={addnote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;