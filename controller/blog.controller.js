const Blog = require('../model/blog.model')
const { StatusCodes } = require('http-status-codes')

const getAllblog = async (req, res) => {}
const getOneBlog = async (req, res) => {
  res.send('get one blog')
}
const createBlog = async (req, res) => {
  const blogData = req.body

  //creating blog using Blog schema
  const blog = await Blog.create(blogData)

  const blogId = blog._id.toString()
  //adding url into the blog
  blog.url = `/blogs/${blogId}`

  await blog.save()
  //return the result
  await res.status(StatusCodes.OK).json({ blog })
}
const updateBlog = async (req, res) => {
  res.send('update blog')
}
const deleteBlog = async (req, res) => {
  res.send('delete blog')
}

module.exports = { getAllblog, getOneBlog, createBlog, deleteBlog, updateBlog }
