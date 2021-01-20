const express = require('express')
const json = require('body-parser').json()

const Pets = require('../pets/pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
    return Pets.get().cat;
  })  

router.delete('/', json, (req, res) => {
  return Pets.dequeue("cats");
})

module.exports = router
