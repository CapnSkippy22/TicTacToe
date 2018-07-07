const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 1337;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../static')));

app.listen(PORT, (err) => {
  console.log('App listening on PORT:', PORT);
})
