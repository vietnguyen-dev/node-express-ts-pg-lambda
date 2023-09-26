
// import pg from 'pg'
import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()
 
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000, 
})

// pg.defaults.parseInt8 = true

export default pool