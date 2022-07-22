import mysql from "mysql";
import config from "../config";
console.log("config: ", config);

const connection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.username,
  password: config.password,
  port: config.port,
});

connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connected to database");
  }
});

const getConnection = () => {
  return connection;
};

module.exports = {
  getConnection,
};
