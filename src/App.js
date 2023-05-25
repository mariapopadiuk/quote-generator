import { useState } from 'react';
import './App.css';
//import './index.css';

function App() {
const [quote, setQuote] = useState('');

function getQuote() {
  fetch('https://type.fit/api/quotes')
  .then((res) => res.json())
  .then((data) => console.log(data))
}

  return (
    <div className="App">
      <button onClick={getQuote}>Quote</button>
    </div>
  );
}

export default App;
