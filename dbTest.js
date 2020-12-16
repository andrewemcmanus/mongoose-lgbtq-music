const express = require('express');
const app = express();
require('dotenv').config()

app.use(express.urlEncoded())

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello from root');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
