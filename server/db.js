const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
    user: process.env.DB_USER,
    password: String(process.env.DB_PASSWORD),
    host: "localhost",
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
});

module.exports = pool;