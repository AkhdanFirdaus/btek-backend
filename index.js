require('dotenv').config({path: './.env'})

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/index'))

app.listen(8888, () => {
  console.log('App listening on port 8888')
})
