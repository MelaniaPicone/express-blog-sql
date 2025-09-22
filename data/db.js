const mysql = require("mysql2");

const connection = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "db_blog",
port: 3306,

})

connection.connect((err) => {
if(err) {
  console.log(err);
}

else {
  console.log("Connesso a mysql");
}

})

module.exports = connection;