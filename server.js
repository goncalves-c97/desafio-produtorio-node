const express = require('express');
const bodyParser = require('body-parser');
const produtorioRouter = require('./controllers/api/produtorio.controller');
const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use('/produtorio', produtorioRouter);

app.listen(port, () => {
  console.log(`Server iniciado em http://localhost:${port}`);
});