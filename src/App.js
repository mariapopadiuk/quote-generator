import { useState } from 'react';
import './App.css';

function App() {
const [quote, setQuote] = useState('');

function getQuote() {
  fetch('https://type.fit/api/quotes')
  .then((res) => res.json())
  .then((data) => {
    let randomNumber = Math.floor(Math.random() * data.length);
    setQuote(data[randomNumber]);
  })
}

  return (
    <div className="App">
      {quote.text}
      <button onClick={getQuote}>Quote</button>
    </div>
  );
}

export default App;
