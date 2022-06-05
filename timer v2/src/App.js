import React, { useState } from 'react';
import Timer from './Timer';

function App() {
  const [isTimer, setTimer] = useState(false);

  return (
    <div className='App'>
      <h2>React App</h2>
      <button onClick={() => setTimer(!isTimer)}>Toggle timer</button>
      {isTimer && <Timer />}
    </div>
  );
}

export default App;
