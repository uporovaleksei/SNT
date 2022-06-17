import pkg from 'pg'
import dotenv from 'dotenv'
dotenv.config()
const { Client } = pkg
const pg = new Client({ host: process.env.PG_HOST, port: process.env.PORT, database: process.env.PG_DB_NAME, user: process.env.PG_USER , password: process.env.PG_PASSWORD })
pg.connect()

export default pg