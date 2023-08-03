const express = require('express')
const router = express.Router()

const {
  getAllblog,
  getOneBlog,
  createBlog,
  deleteBlog,
  updateBlog,
} = require('../controller/blog.controller')

router.get('/', getAllblog)
router.get('/:id', getOneBlog)
router.post('/', createBlog)
router.delete('/:id', deleteBlog)
router.patch('/:id', updateBlog)

module.exports = router
