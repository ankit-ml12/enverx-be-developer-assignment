const Blog = require('../model/blog.model')
const { StatusCodes } = require('http-status-codes')

const getAllblog = async (req, res) => {}

const getOneBlog = async (req, res) => {
  const { id: blogId } = req.params

  // Find the blog by its _id
  //removing url because we allready have url i.e, why apply get method
  const blog = await Blog.findById(blogId).select('-url')

  if (!blog) {
    //error if blog is not found
    return res.status(StatusCodes.NOT_FOUND).json({ error: 'Blog not found' })
  }

  // Increase the view count by 1
  blog.views++
  await blog.save()
  //return the blog
  res.status(StatusCodes.OK).json({ blog })
}

const createBlog = async (req, res) => {
  const blogData = req.body

  //creating blog using Blog schema
  const blog = await Blog.create(blogData)

  const blogId = blog._id.toString()
  //adding url into the blog
  blog.url = `/blog/${blogId}`

  await blog.save()
  //return the result
  await res.status(StatusCodes.OK).json({ blog })
}
const updateBlog = async (req, res) => {
  res.send('update blog')
}

const deleteBlog = async (req, res) => {
  const { id: blogId } = req.params

  const blog = await Blog.findById(blogId)

  if (!blog) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: 'Blog not found' })
  }
  await Blog.findByIdAndDelete(blogId)
  res
    .status(StatusCodes.OK)
    .json({ message: `Blog with id ${blogId} is successfully removed` })
}

module.exports = { getAllblog, getOneBlog, createBlog, deleteBlog, updateBlog }
