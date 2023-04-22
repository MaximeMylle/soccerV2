const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();


const users = [
  {
  name:"Maxime",
  lastname:"Mylle"
  }
  ]

const teams = [
  {
    id: "1",
    Name: "Sport na Arbeid",
    Location: "Veldegem"
  },
  {
    id: "2",
    Name: "KroonHove",
    Location: "Unknown"
  }
]

const games = [
  {
    id: "1",
    Home_Team_Id: "1",
    Out_Team_Id: "2",
    Date: "01/01/2023",
    score: "-"
  },
  {
    id: "2",
    Home_Team_Id: "1",
    Out_Team_Id: "2",
    Date: "01/01/2023",
    score: "-"
  }
]


router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});


router.get('/users', (req, res) => {
  res.json(users);
});

router.get('/teams', (req, res) => {
  res.json(teams);
});

router.get('/games', (req, res) => {
  res.json(games);
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

