const express = require('express')
const json = require('body-parser').json()

const Pets = require('../pets/pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
    console.log(Pets.get().cat)
    return res.status(200).json(Pets.get().cat);
  })  

router.delete('/', json, (req, res) => {
  Pets.dequeue("cats");
  res.status(204).end();
})

module.exports = router
