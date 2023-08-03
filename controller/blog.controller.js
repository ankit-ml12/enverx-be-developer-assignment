const Blog = require('../model/blog.model')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllblog = async (req, res) => {
  const { sortBy, query } = req.query

  const queryObject = {}

  if (query) {
    queryObject.$or = [
      { name: { $regex: query, $options: 'i' } }, // Case-insensitive name search
      { description: { $regex: query, $options: 'i' } }, // Case-insensitive description search
      { category: { $regex: query, $options: 'i' } }, // Case-insensitive category search
    ]
  }
  //search element according to the query
  let result = Blog.find(queryObject)
  // sorting blog according to requirement
  if (sortBy) {
    const sortList = sortBy.split(',').join(' ')
    result = result.sort(sortList)
  } else result = result.sort('createAt')

  // Check if there are any blogs in the database
  const blogs = await result
  if (blogs.length === 0) {
    throw new NotFoundError(`No blogs found`)
  }

  res.status(StatusCodes.OK).json({ count: blogs.length, blogs })
}

const getOneBlog = async (req, res) => {
  const { id: blogId } = req.params

  // Find the blog by its _id
  //removing url because we allready have url i.e, why we apply get method
  const blog = await Blog.findById(blogId).select('-url')

  if (!blog) {
    //error if blog is not found
    throw new NotFoundError(`No blog with id ${blogId}`)
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
  const { id: blogId } = req.params
  const { category, name, description } = req.body

  // Find the blog by its _id
  let blog = await Blog.findById(blogId)

  if (!blog) {
    throw new NotFoundError(`No blog with id ${blogId}`)
  }

  if (!category && !name && !description) {
    throw new BadRequestError(
      `out of category, name and description all are can't be empty`
    )
  }

  // Update the blog properties if they exist in the request body
  if (category) {
    blog.category = category
  }
  if (name) {
    blog.name = name
  }
  if (description) {
    blog.description = description
  }

  // Save the updated blog to the database
  blog = await blog.save()

  res.status(StatusCodes.OK).json({ blog })
}

const deleteBlog = async (req, res) => {
  const { id: blogId } = req.params

  const blog = await Blog.findById(blogId)

  if (!blog) {
    throw new NotFoundError(`No blog with id ${blogId}`)
  }
  await Blog.findByIdAndDelete(blogId)
  res
    .status(StatusCodes.OK)
    .json({ message: `Blog with id ${blogId} is successfully removed` })
}

module.exports = { getAllblog, getOneBlog, createBlog, deleteBlog, updateBlog }
