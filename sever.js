const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

const dragons = [
   {name: "Jom", type: "hungarian horntail"},
   {name: "Sven", type: "Swedish Short-Snout"},
   {name: "Mar", type: "Common Welsh Green"},
   {name: "Boomer", type: "Chinese Fireball"},
];

// CRUD

app.get('/dragons', (req, res) => {
  res.render('dragons', {
    dragons
  });
});

app.post('/dragons', (req, res) => {
  const dragon = {
    name: req.body.name,
    type: req.body.type
  };
  dragons.push(dragon);

  res.redirect('/dragons');
});

app.post('/dragons/:name/delete', (req, res) => {
  const name = req.params.name;

  // I forgot about findIndex during the lecture, does these two things but with one function
  // google findIndex
  const dragon = dragons.find((dragon) => {
    return dragon.name === name;
  });
  const index = dragons.indexOf(dragon);
   
  dragons.splice(index, 1);

  res.redirect('/dragons');
});

app.post('/dragons/:name/update', (req, res) => {
  const name = req.params.name;
  
  const newName = req.body.name;
  const newType = req.body.type;
  
  const dragon = dragons.find((dragon) => {
    return dragon.name === name;
  });
  
  dragon.name = newName;
  dragon.type = newType;

  res.redirect('/dragons');
});

const port = 8080;
app.listen(port, () => console.log(`😎 on port ${port}`))
