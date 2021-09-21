const express = require('express')

const User = require('../schemas/user')
const Resume = require('../schemas/resume')
const router = express.Router()

router.get('/admin', async (req, res, next) => {
  try {
    const user = await User.findOne({ email: process.env.ADMIN })

    if (!user) {
      return res.status(404).json({ msg: 'check the admin email or server dotenv' })
    }
    let result = {}
    result.data = {
      name: user.name,
      email: user.email,
    }

    const resume = await Resume.find({ user_id: user.id })
    if (resume.length < 1) {
      return res.status(204).json()
    }
    result.data.resume = resume

    return res.json(result)
  } catch (err) {
    console.error(err)
    next()
  }
});


module.exports = router;