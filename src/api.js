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
    id: "0",
    Name: "NO GAME",
    Location: "NONE"
  },
  {
    id: "12",
    Name: "Sport na Arbeid",
    Location: "Acaciastraat 31b, 8210 Zedelgem"
  },
  {
    id: "11",
    Name: "VV KroonHove",
    Location: "Unknown"
  },
  {
    id: "5",
    Name: "FC Veteranen t'Oost",
    Location: "Unknown"
  },
  {
    id: "3",
    Name: "Sportgroep 70",
    Location: "Unknown"
  },
  {
    id: "1",
    Name: "Oud Savio",
    Location: "Unknown"
  },
  {
    id: "2",
    Name: "Oksa",
    Location: "Unknown"
  },
  {  
    id: "4",
    Name: "VK Vogelzang",
    Location: "Unknown"
  },
  {  
    id: "8",
    Name: "TC Oedelem",
    Location: "Unknown"
  },
  {  
    id: "7",
    Name: "De Rickvrienden",
    Location: "Unknown"
  },
  {  
    id: "14",
    Name: "De Brugse Vrienden",
    Location: "Unknown"
  },
  {  
    id: "6",
    Name: "St. Joris Vrienden",
    Location: "Unknown"
  },
  {  
    id: "12",
    Name: "BammBamm",
    Location: "Unknown"
  }
]

const games = [
  {
    id: "1",
    Home_Team_Id: "11",
    Out_Team_Id: "12",
    Date: "03/09/2023",
    score: "-"
  },
  {
    id: "2",
    Home_Team_Id: "12",
    Out_Team_Id: "5",
    Date: "10/09/2023",
    score: "-"
  },
  {
    id: "3",
    Home_Team_Id: "0",
    Out_Team_Id: "0",
    Date: "17/09/2023",
    score: "-"
  },
  {
    id: "4",
    Home_Team_Id: "12",
    Out_Team_Id: "3",
    Date: "24/09/2023",
    score: "-"
  },
  {
    id: "5",
    Home_Team_Id: "1",
    Out_Team_Id: "12",
    Date: "01/10/2023",
    score: "-"
  },
  {
    id: "6",
    Home_Team_Id: "12",
    Out_Team_Id: "2",
    Date: "08/10/2023",
    score: "-"
  },
  {
    id: "7",
    Home_Team_Id: "4",
    Out_Team_Id: "12",
    Date: "15/10/2023",
    score: "-"
  },
  {
    id: "8",
    Home_Team_Id: "12",
    Out_Team_Id: "8",
    Date: "22/10/2023",
    score: "-"
  },
  {
    id: "9",
    Home_Team_Id: "3",
    Out_Team_Id: "12",
    Date: "29/10/2023",
    score: "-"
  },
  {
    id: "10",
    Home_Team_Id: "12",
    Out_Team_Id: "7",
    Date: "05/11/2023",
    score: "-"
  },
  {
    id: "11",
    Home_Team_Id: "14",
    Out_Team_Id: "12",
    Date: "12/11/2023",
    score: "-"
  },
  {
    id: "12",
    Home_Team_Id: "12",
    Out_Team_Id: "6",
    Date: "19/11/2023",
    score: "-"
  },
  {
    id: "13",
    Home_Team_Id: "12",
    Out_Team_Id: "10",
    Date: "26/11/2023",
    score: "-"
  },
  {
    id: "14",
    Home_Team_Id: "0",
    Out_Team_Id: "0",
    Date: "03/12/2023",
    score: "-"
  },
  {
    id: "15",
    Home_Team_Id: "3",
    Out_Team_Id: "12",
    Date: "10/12/2023",
    score: "-"
  },
  {
    id: "16",
    Home_Team_Id: "12",
    Out_Team_Id: "1",
    Date: "17/12/2023",
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

