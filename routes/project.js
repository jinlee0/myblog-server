const express = require('express')

const User = require('../schemas/user')
const Project = require('../schemas/project')
const router = express.Router()

router.get('/admin', async (req, res, next) => {
  try {
    const user = await User.findOne({ email: process.env.ADMIN })

    if (!user) {
      return res.status(404).json({ msg: 'check the admin email or server dotenv' })
    }
    const projects = await Project.find({ user_id: user.id })
    if (projects.length < 1) {
      return res.status(204).json()
    }
    let result = {};
    result.data = projects;
    return res.json(projects)
  } catch (err) {
    console.error(err)
    next()
  }
});


module.exports = router;