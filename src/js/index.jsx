import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  return (
  <div>
    <div>Hello React!!</div>
    <div>{count}</div>
    <button onClick={increment}>Click</button>
  </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
