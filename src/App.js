import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [showNewNoteForm, setShowNewNoteForm] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteText, setNewNoteText] = useState('');

  const handleAddNote = () => {
    setShowNewNoteForm(true);
  };

  const handelNoteCancel = () => {
    setShowNewNoteForm(false);
  }

  const handleSaveNote = () => {
    const newNote = {
      title: newNoteTitle,
      text: newNoteText,
    };
    setNotes([...notes, newNote]);
    setNewNoteTitle('');
    setNewNoteText('');
    setShowNewNoteForm(false);
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes App</h1>
        <button onClick={handleAddNote} className="add-note-btn">
          +
        </button>
      </header>
      <div className="notes-container">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <h2>{note.title}</h2>
            <p>{note.text}</p>
            <button onClick={() => handleDeleteNote(index)} className="delete-note-btn">
              Delete
            </button>
          </div>
        ))}
      </div>
      {showNewNoteForm && (
        <div className="new-note-form">
          <input
            type="text"
            placeholder="Title"
            value={newNoteTitle}
            onChange={(e) => setNewNoteTitle(e.target.value)}
            className="note-input"
          />
          <textarea
            placeholder="Text"
            value={newNoteText}
            onChange={(e) => setNewNoteText(e.target.value)}
            className="note-input"
          ></textarea>
          <button onClick={handelNoteCancel} className="save-note-btn">
            Cancel
          </button>
          <button onClick={handleSaveNote} className="save-note-btn">
            Save
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
