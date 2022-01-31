import { useState, useEffect } from 'react';
import './App.css';
import { CHARACTERS_URL } from './api-client.js';

async function getCharacters() {
  const res = await fetch(CHARACTERS_URL);
  const json = await res.json();
  return json.results;
}

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((characters) => {
      console.log(`Characters ${characters}`);
      setCharacters(characters);
    });
  }, []);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <ul>
        {characters.map((c) => (
          <li>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
