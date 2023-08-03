const mongoose = require('mongoose')

const connectDB = async (url) => {
  await mongoose
    .connect(url)
    .then(() => {
      console.log(`server is connected to DB :)`)
    })
    .catch((error) => {
      console.log(error)
    })
}

module.exports = connectDB
