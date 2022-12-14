const profileModel = require('../models/profile.model')

exports.readProfileById = async (req, res) => {
  try {
    const id = req.params.id || req.userData.id
    const profile = await profileModel.selectProfileByUserId(id)
    if (profile.rowCount) {
      return res.json({
        success: true,
        message: 'Profile user with id ' + id,
        result: profile.rows[0]
      })
    }
    return res.status(400).json({
      success: false,
      message: 'User with id ' + id + ' not found'
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error : ' + err.message
    })
  }
}

exports.updateProfile = async (req, res) => {
  try {
    if (req.file) {
      req.body = req.file.fileName
    }

    const profile = await profileModel.updateProfileByUserId(req.userData.id, req.body)
    if (profile.rowCount) {
      return res.json({
        success: true,
        message: 'Update profile success',
        result: profile.rows[0]
      })
    }
    return res.status(400).json({
      success: false,
      message: 'Failed update user with id ' + req.userData.id + ', not found'
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error : ' + err.message
    })
  }
}
