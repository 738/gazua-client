import React, { useState } from 'react';
import './App.css';

function App() {
  let [url, setUrl] = useState('');
  const onChangeUrl = e => {
    setUrl(e.target.value);
  }
  return (
    <div className="App">
      <input type="text" value={url} onChange={onChangeUrl} />
      <button>generate short url</button>
    </div>
  );
}

export default App;
