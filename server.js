require('dotenv').config()
const express = require('express')
const app = express()

//variables
const PORT = process.env.PORT || 3000
const databseUrl = process.env.MONGO_URI

//required files
const connectDB = require('./db/connect')

//middleware imports

app.use(express.json())

app.use('/', (req, res) => {
  res.send('check the server')
})

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => {
      console.log(`server is listning on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
