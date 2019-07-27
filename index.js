const express = require('express')
const app = express()
const users = require('./routers/users')
const port = process.env.PORT || 4000
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('***************GRooVy GRaVy************'))
app.use(users)



app.listen(port, () => {
  console.log('app is listening on:', port)
})