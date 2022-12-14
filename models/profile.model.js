const db = require('../helpers/db')
const table = 'profile'

exports.insertProfile = (data) => {
  const sql = `INSERTINTO "${table}" ("fullName", "picture", "birthDate", "userId") VALUES ($1, $2, $3, $4) RETURNING *`
  const params = [data.fullName, data.birthDate, data.picture, data.userId]
  return db.query(sql, params)
}

exports.selectProfileByUserId = (id) => {
  const sql = `SELECT * FROM "${table}" WHERE "userId"=$1`
  const params = [id]
  return db.query(sql, params)
}

exports.updateProfileByUserId = (id, data) => {
  const column = Object.keys(data)
  const val = Object.values(data)

  const conditionalSql = []
  column.forEach((col, i) => {
    conditionalSql.push(`"${col}"=$${2+i}`)
  })

  const sql = `UPDATE "${table}" SET ${conditionalSql.join(', ')} WHERE "userId"=$1 RETURNING *`
  const params = [id, ...val]
  return db.query(sql, params)
}
