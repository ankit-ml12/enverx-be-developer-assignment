require('dotenv').config()
const connectDB = require('./db/connect')
const blogModel = require('./model/blog.model') // Assuming you have the blog model defined
const jsonblogs = require('./blog.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)

    // Clear all blogs
    await blogModel.deleteMany()

    // Populate the JSON blogs with _id and url before inserting
    for (const blog of jsonblogs) {
      const createdblog = await blogModel.create(blog)
      const url = `/posts/${createdblog._id.toString()}`
      await blogModel.findByIdAndUpdate(createdblog._id, { url }) // Update the blog with the generated URL
    }

    console.log('Success !!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
