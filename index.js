const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.use('/.netlify/functions/api', )


modules.exports.handler = serverless(app)