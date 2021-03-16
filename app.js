const express = require('express');
const app = express();

const PORT = process.env.port || 3000

app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  let data = [
    {
      name: "burt lannister",
      age: 56,
      hobbies: ['reading', 'polo']
    },
    {
      name: "tobe nwige",
      age: 27,
      hobbies: ['writing', 'pressing flowers']
    },
    {
      name: "miguel atwood",
      age: undefined,
      hobbies: ['music', 'mediation']
    },
    {
      name: "hieu ngyen",
      age: 33,
      hobbies: undefined
    },
    {
      name: undefined,
      age: undefined,
      hobbies: undefined
    }
  ]

  res.render('home',{data: data})
})

app.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`)
})