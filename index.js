const express = require('express')
const path = require('path')
const members = require('./Members')
const logger = require('./middleware/logger')

const app = express()

/** 
app.get('/', (req, res) => {
  // res.send('<h1>Hello World!</h1>') // thats not use too much
  res.sendFile(path.join(__dirname, 'public', 'index.html'))  // this isn't also idle, as we have to create every routes manually to render
})
*/



// Init Middleware
app.use(logger)

// Gets All Members (can see it in json formate in postman/browser by the get request of the url)
app.get('/api/members', (req, res) => res.json(members))


// Get Single Member
app.get('/api/members/:id', (req, res) => {
  // res.send(req.params.id) // check whether req object is grabing the id or not 

  const found = members.some(member => member.id === parseInt(req.params.id))

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)))
  } else {
    // 400 bad request (can see it in postman also), client side error
    res.status(400).json({ msg: `No member with the id of ${req.params.id}`})
  }

})


// Set static folder 
app.use(express.static(path.join(__dirname, 'public')))


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))