const express = require('express');
const Cards = require('./models/Cards');
const cors = require('cors');
const bodyParser = require('body-parser');

require('./utils/connectDb');
// connectDb();
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('helloo');
});

app.post('/tinder/cards', async (req, res) => {
  const { name, imgUrl } = req.body;
  console.log(name, imgUrl);
  try {
    if (!name || !imgUrl) {
      return res.status(422).send('fields missing fields');
    }
    const newCard = await new Cards({
      name,
      imgUrl,
    }).save();

    res.status(201).json(newCard);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.get('/tinder/cards', (req, res) => {
  Cards.find((err, data) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(data);
  });
});

app.listen(port, () => console.log(`server listening on ${port}`));
