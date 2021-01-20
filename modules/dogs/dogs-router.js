const express = require('express')
const json = require('body-parser').json()

const Pets = require('../pets/pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
    return Pets.get().dog;
  })  

router.delete('/', json, (req, res) => {
  return Pets.dequeue("dogs");
})

module.exports = router
