import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
const [quote, setQuote] = useState('');
const textRef = useRef();
let colors = ['#ffff00', "#90ee90", '#ffa500', '#ff68ff', '#a9a9e7'];
  
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

  useEffect(() => {
    textRef.current.style.color = colors[Math.floor(Math.random() * colors.length)];
  }, [quote]);

  return (
    <div className="App">
      <div className='quote'>
        <p ref={textRef}>{quote.text}</p>
        <p>Author: {quote.author}</p>
        <div className='btnContainer'>
          <button className='btn' onClick={getQuote}>Get quote</button>
          <a 
            href={`https://twitter.com/intent/tweet?text=${quote.text}`} 
          target="_blank"
          rel="noopener noreferrer"
          className='btn'
          >
            Tweet
            </a>
        </div>
      </div>
    </div>
  );
}

export default App;
