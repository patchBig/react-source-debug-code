import logo from './logo.svg';
import './App.css';
import { useState, useReducer } from 'react';

// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     case 'reset':
//       return 100;
//     default:
//       throw new Error('Unexpected action');
//   }
// };

function App() {
  const [state, setState] = useState(1);

  return (
    <div className="App">
      <h1>hello {state}</h1>
    </div>
  );
}

export default App;
