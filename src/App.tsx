import React, { useState } from 'react';
import './App.css';
import SpinBox from './components/SpinBox';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <SpinBox count={count} onPressDown={setCount} onPressUp={setCount} />
    </div>
  );
}

export default App;
