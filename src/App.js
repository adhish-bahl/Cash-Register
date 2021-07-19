import logo from './logo.svg';
import './App.css';
import BillAmount from './billAmount';

function App() {
  return (

    <div className="App">
      <h2>Cash Register Manager</h2>
      <p>Enter the bill amount and cash given by the customer and know minimum number of notes to return.</p>
      <BillAmount />
    </div>
  );
}

export default App;
