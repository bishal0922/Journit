import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters

const JournalEntryView = () => {
  const { date } = useParams(); // Get the date from the URL parameter

  // You can fetch the journal entry for the specific date from the backend here
  // For simplicity, we'll use a placeholder text
  const journalText = "This is the journal entry for " + date;

  return (
    <div>
      <h2>Journal Entry for {date}</h2>
      <p>{journalText}</p>
    </div>
  );
};

export default JournalEntryView;
