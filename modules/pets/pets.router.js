const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  return [...Pets.cats.all(), ...Pets.dogs.all()];
})

router.delete('/', json, (req, res) => {
const category = Math.round(Math.random()) === 1 ? "cats" : "dogs";
Pets.dequeue(category);
res.status(204).end();
})

module.exports = router
