import { useState, useEffect } from 'react';
// import { Link, Route, BrowserRouter as Router} from 'react-router-dom';
// import JournalEntryView from './JournalEntryView';

const JournalApp = () => {
  const [journalText, setJournalText] = useState('');
  const [journalEntries, setJournalEntries] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  // Function to handle changes in the journal text input
  const handleJournalTextChange = (e) => {
    setJournalText(e.target.value);
  };

  // Function to handle submitting a journal entry
  const handleSubmit = () => {
    // Create a new journal entry object
    const newEntry = {
      date,
      text: journalText,
    };

    // Add the new entry to the list of journal entries
    setJournalEntries([...journalEntries, newEntry]);

    // Clear the journal text input
    setJournalText('');
  };

  useEffect(() => {
    // You can replace this with actual API calls to fetch journal entries for the user
    // For simplicity, we're using local state here
    // In a real application, you would fetch data from a backend server.
  }, []);

  return (
    // <Router>
    <div>
      <h1>My Journal</h1>

      {/* Journal Entry Form */}
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label>Journal Entry:</label>
        <textarea
          rows="4"
          cols="50"
          value={journalText}
          onChange={handleJournalTextChange}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>




      {/* List of Journal Entries */}
      <div>
        <h2>Journal Entries</h2>
        <ul>
          {journalEntries.map((entry, index) => (
            <li key={index}>

                {/* create a link here */}
              <strong>{entry.date}:</strong> {entry.text}
              {/* <Link to={`/entry/${entry.date}`}>{entry.date}</Link> */}

            </li>
          ))}
        </ul>
      </div>

    </div>

    // {/* Define a route for the JournalEntryView component
    // <Route path="/entry/:date">
    //     <JournalEntryView />
    // </Route> */}

//   {/* </Router> */}


  );
  
};

export default JournalApp;
