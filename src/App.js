import { useEffect, useState } from 'react';
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

useEffect(() => {
  getQuote()
}, []);

  return (
    <div className="App">
      <div className='quote'>
        <p>{quote.text}</p>
        <p>{quote.author}</p>
        <div className='btnContainer'>
          <button className='btn'>Get quote</button>
          <a href="" className='btn'>Tweet</a>
        </div>
      </div>
    </div>
  );
}

export default App;
