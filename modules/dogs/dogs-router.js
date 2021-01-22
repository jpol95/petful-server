const express = require('express')
const json = require('body-parser').json()

const Pets = require('../pets/pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
    return res.status(200).json(Pets.get().dog);
  })  

router.delete('/', json, (req, res) => {
  Pets.dequeue("dogs");
  res.status(204).end()
})

module.exports = router
