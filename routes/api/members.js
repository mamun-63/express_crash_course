const express = require('express')
const router = express.Router()
const members = require('../../Members')
const uuid = require('uuid')


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

// Create Member
router.post('/', (req, res) => {
  // res.send(req.body)

  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  }

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Please include a name and email' })
  }

  // members.save(newMembers) // when you're dealing with databases like mongodb, mongoose, any ORM, then you have to push newMwmber like this
  members.push(newMember)
  res.json(members)
})


module.exports = router