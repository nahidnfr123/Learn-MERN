const express = require('express');
const path = require('path');
const app = express();
const port = 4000 || process.env.PORT;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.get('/about', (req, res) => {
  // res.send('about');
  res.json({message: 'Hello World!', status: 200,});
  res.status(404);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
