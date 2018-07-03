const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getEstablishments()
    .then(establishments => {
      res.render('partials/index', {establishments: establishments})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id/details', (req, res) => {
  db.getEstablishment(req.params.id)
  .then(establishment => {
    res.render('partials/details', {establishment: establishment})
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
