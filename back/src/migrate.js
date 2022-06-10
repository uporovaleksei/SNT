import pg from "./pg.js"

await pg.query(`DROP TABLE IF EXISTS users`)
await pg.query(`CREATE TABLE users (
  id bigserial primary key,
  login VARCHAR(30) UNIQUE NOT NULL,
  is_admin BOOL NOT NULL,
  hash VARCHAR(50) NOT NULL
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  phone VARCHAR(20)
)`)
await pg.query(`CREATE INDEX users_keys_login ON users USING btree (login)`)
await pg.query(`CREATE INDEX users_keys_hash ON users USING btree (hash)`)

console.log("Успешная миграция")
process.exit(0)