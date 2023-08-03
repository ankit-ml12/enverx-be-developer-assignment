const getAllblog = async (req, res) => {
  res.send('get All blog')
}
const getOneBlog = async (req, res) => {
  res.send('get one blog')
}
const createBlog = async (req, res) => {
  res.send('create blog')
}
const updateBlog = async (req, res) => {
  res.send('update blog')
}
const deleteBlog = async (req, res) => {
  res.send('delete blog')
}

module.exports = { getAllblog, getOneBlog, createBlog, deleteBlog, updateBlog }
