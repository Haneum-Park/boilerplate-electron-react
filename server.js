const express = require('express');
const path = require('path');

const port = 80;
const app = express();

const basePath = `${__dirname}/dist`;

app.use(express.static(basePath));

console.log(__dirname);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${basePath}/index.html`));
});

app.listen(port);
