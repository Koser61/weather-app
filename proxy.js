const PORT = process.env.PORT || 8000
const express = require('express')
const path = require('path')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/current', (req, res) => {
  const searchString = req.query.q
  const unitsType = req.query.units

  const options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params: { q: searchString, units: unitsType },
    headers: {
      'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
    }
  }

  axios.request(options).then((response) => {
    res.json(response.data)
  }).catch((error) => {
    console.error(error)
    res.json(error.response.data)
  })
})

app.get('/forecast', (req, res) => {
  const searchString = req.query.q
  const unitsType = req.query.units

  const options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
    params: { q: searchString, units: unitsType },
    headers: {
      'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
    }
  }

  axios.request(options).then((response) => {
    res.json(response.data)
  }).catch((error) => {
    console.error(error)
    res.json(error.response.data)
  });
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))