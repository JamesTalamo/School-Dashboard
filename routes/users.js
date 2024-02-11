const express = require('express');
const router = express.Router()
const usersDB = require('../database/users.json')

router.get('/', (req,res) => {
    res.send(usersDB)
})

module.exports = router