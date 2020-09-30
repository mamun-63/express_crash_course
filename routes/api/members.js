const express = require('express')
const router = express.Router()
const members = require('../../Members')


// Gets All Members (can see it in json formate in postman/browser by the get request of the url)
router.get('/', (req, res) => res.json(members))


// Get Single Member
router.get('/:id', (req, res) => {
  // res.send(req.params.id) // check whether req object is grabing the id or not 

  const found = members.some(member => member.id === parseInt(req.params.id))

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)))
  } else {
    // 400 bad request (can see it in postman also), client side error
    res.status(400).json({ msg: `No member with the id of ${req.params.id}`})
  }

})

module.exports = router