import React, {useEffect, useRef, useState} from 'react'

var a = 0;

function App() {
  const [count, setcount] = useState(0)

  
  return (
    <div className="App">
      <button onClick={() => setcount(count + 1)}>+</button>
      <h1>value: {count}</h1>
      <button onClick={() => setcount(count - 1)}>-</button>

    </div>
  );
}

export default App;
