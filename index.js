const express = require('express')

const app = express()

const port = 3333

app.get('/', (req, res) => {
  return res.json({
    success: true,
    message: 'Backend is running well'
  })
})

app.listen(port, () => {
  console.log('App listening on port 8888')
})
