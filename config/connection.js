// Set up MySQL connection.
const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL) {
  conenction = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'burgers_db',
  });
}

// Export connection for our ORM to use.
connection.connect()
module.exports = connection;