import React from 'react';
import { add } from './utils';

export default function App() {
  return (
    <div>
      <h1>Testgen Sample App</h1>
      <p>2 + 3 = {add(2,3)}</p>
    </div>
  );
}
