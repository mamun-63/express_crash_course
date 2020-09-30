const express = require('express')
const path = require('path')
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

// Set static folder 
app.use(express.static(path.join(__dirname, 'public')))

// Members API Routes
app.use('/api/members', require('./routes/api/members'))


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))