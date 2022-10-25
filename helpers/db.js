const { Pool } = require('pg')

const db = new Pool({
  connectionString: 'postgresql://akhdanfirdaus:passw0rd@localhost:5432/postgres?schema=public'
})

module.exports = db
