import React, { useState } from 'react';
import './App.css';

function App() {
  let [url, setUrl] = useState('');
  const onChangeUrl = e => {
    setUrl(e.target.value);
  }
  let pathname = window.location.pathname;
  if (pathname === '/hello') {
    window.location.href = 'https://blog.holy.kiwi';
    return null;
  } else return (
    <div className="App">
      <input type="text" value={url} onChange={onChangeUrl} />
      <button>generate short url</button>
    </div>
  );
}

export default App;
