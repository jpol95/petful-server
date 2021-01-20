const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  return [...Pets.cats.all(), ...Pets.dogs.all()];
})

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
})

module.exports = router
