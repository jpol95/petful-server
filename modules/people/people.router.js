const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(People.all())
})

router.post('/', json, (req, res) => {
  res.status(201).json(People.show());
})

module.exports = router
