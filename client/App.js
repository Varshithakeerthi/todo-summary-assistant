// client/App.js
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(['Learn GitHub', 'Write Code']);
  const summary = `You have ${todos.length} tasks today.`;

  return (
    <div>
      <h1>Todo Summary</h1>
      <ul>
        {todos.map((todo, index) => (<li key={index}>{todo}</li>))}
      </ul>
      <p>{summary}</p>
    </div>
  );
}

export default App;
