// Set up MySQL connection.
const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL) {
  conenction = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: 'lfmerukkeiac5y5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'r6spf68nc3yyqj3g',
    password: 'xzyq4ow17pzxriww',
    database: 'kwj19z2i5x0jqbdt',
  });
}

// Export connection for our ORM to use.
connection.connect()
module.exports = connection;
