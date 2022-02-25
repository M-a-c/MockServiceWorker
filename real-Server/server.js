const express = require('express');
const app = express();
const PORT = 8000;

app.get('/books', async (req, res) => {
  try {
    res.send([
      {title:'real server 1', price:'13.56'},
      {title:'real server 2', price:'11.60'},
      {title:'real server 3', price:'18.16'}
    ]);
  }
  catch (error) {
    console.log(error.request);
    console.log(error.response.status);
    res.sendStatus(error.response.status);
  }
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});