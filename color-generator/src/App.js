import './App.css';
import React, { useState } from 'react';

import Values from 'values.js';

function App() {
  const [ color, setColor ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section>
    <h1>Color generator</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Add color code here" />
      <button type="submit">submit</button>
    </form>
    </section>
  );
}

export default App;
