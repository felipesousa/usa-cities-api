const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const app = express();

const FILENAME = './data/db.json';

let CITIES;

const getData = async () => {
  try {
    if (CITIES) return CITIES;

    const response = await fs.readFile(path.join(__dirname, FILENAME), 'utf8');
    CITIES = response;

    return CITIES;
  } catch (e) {
    return e;
  }
}

const filter = (city, compare, prop = 'city') =>
  compare ? city[prop].toLowerCase().includes(compare.toLowerCase()) : city;

app.use(cors());

app.get('/cities', async (req, res) => {
  try {
    const { city = '', state = '' } = req.query;
    const response = await getData();

    const parsed = JSON.parse(response);
    const data = parsed.cities
      .filter(c => filter(c, city))
      .filter(c => filter(c, state, 'state'));

    res.send(data);
  } catch (e) {
    res.status(500).send({ message: e.toString() });
  }
});

app.listen(PORT, () => { console.info(`Server running at ${PORT}`); });
