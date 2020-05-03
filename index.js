const express = require('express');
const app = express();
const city = require('./city');
const path = require('path');

app.use((res, req, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
  );
  next();
});

app.get('/city', (req, res) => {
  res.json(city);
});

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
