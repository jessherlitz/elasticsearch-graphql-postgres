import mysqlPromise from 'mysql2/promise'

export const connection = mysqlPromise.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME
})
