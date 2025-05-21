// server/index.js
const express = require('express');
const app = express();
app.use(express.json());

app.post('/summarize', (req, res) => {
  const { todos } = req.body;
  const summary = `You have ${todos.length} tasks today.`;
  res.json({ summary });
});

app.listen(3000, () => console.log('Server running on port 3000'));
