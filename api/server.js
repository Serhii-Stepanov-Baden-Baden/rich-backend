const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/chat', (req, res) => {
  const message = req.body.message;
  res.json({ reply: "Привет, я RICH!" });
});

app.listen(3000, () => console.log('Server running'));
