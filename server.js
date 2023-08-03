require('dotenv').config()
const express = require('express')
const app = express()

//variables
const PORT = process.env.PORT || 3000
const databseUrl = process.env.MONGO_URI

//middleware
const notFound = require('./middleware/not-found')
const erroHandlerMiddleware = require('./middleware/error-handler-middleware')

//required files
const connectDB = require('./db/connect')
const blogRouter = require('./router/blog.router')

app.use(express.json())
app.use('/api/v1/blog', blogRouter)

app.use(notFound)
app.use(erroHandlerMiddleware)

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
