const express = require('express')

const User = require('../schemas/user')
const router = express.Router()

router.get('/admin', async (req, res, next) => {
  try {
    const user = await User.findOne({ email: process.env.ADMIN })

    if (!user) {
      return res.status(404).json({ msg: 'check the admin email or server dotenv' })
    }

    return res.json(user)
  } catch (err) {
    console.error(err)
    next()
  }
});


module.exports = router;