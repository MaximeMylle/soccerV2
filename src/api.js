const express = require("express");
const serverless = require("serverless-http");
const fs = require('fs');

const app = express();
const router = express.Router();



router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});


router.get('/users', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const users = JSON.parse(data).users;
    res.send(users);
  });
});

router.post('/users', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const db = JSON.parse(data);
    const newUser = {
      id: db.users.length + 1,
      name: req.body.name,
      email: req.body.email
    };
    db.users.push(newUser);
    fs.writeFile('./data.json', JSON.stringify(db), err => {
      if (err) throw err;
      res.send(newUser);
    });
  });
});







app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);

